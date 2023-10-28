using Newtonsoft.Json;

namespace ProductAPI.Middleware
{
    public class UnauthorizedMiddleware
    {
        private readonly RequestDelegate _next;

        public UnauthorizedMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            await _next(context);

            if (context.Response.StatusCode == StatusCodes.Status401Unauthorized)
            {
                context.Response.ContentType = "application/json";
                var responseData = new
                {
                    statusCode = StatusCodes.Status401Unauthorized,
                    message = "Unauthorized",
                };

                var json = JsonConvert.SerializeObject(responseData);
                await context.Response.WriteAsync(json);
            }
        }
    }
}
