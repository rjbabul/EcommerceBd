using Domain.Common.Common.Service.Abstraction;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Data.SqlClient;
using Newtonsoft.Json;

namespace ProductAPI.Middleware
{
    public class ErrorExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private IEmailServiceForExceptionMessege _emailService;
        public ErrorExceptionHandlingMiddleware(RequestDelegate next , IEmailServiceForExceptionMessege emailService)
        {
            _next = next;
            _emailService = emailService;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                string exMessage = ex.Message;
                string [] message = exMessage.Split(",");
                context.Response.ContentType = "application/json";
                var responseData = new
                {
                    statusCode = Convert.ToInt32(message[0]),
                    message = message[1],
                    data= String.Empty,
                    common= String.Empty
                };
                _emailService.SendErrorMessage(exMessage);
                var json = JsonConvert.SerializeObject(responseData);
                await context.Response.WriteAsync(json);
            }
        }
    }
}
