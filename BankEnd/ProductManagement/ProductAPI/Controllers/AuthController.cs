using Domain.Common.Common.Service.Abstraction;
using Domain.Models.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthService _authService;
        public AuthController(IConfiguration configuration, IAuthService authService)
        {
            _authService = authService;
            _configuration = configuration;
        }
        public static User _user = new User()
        {
            userName = "babul",
            password = "password"
        };

        [HttpPost("getToken")]
        public ActionResult GetToken()
        {
            try
            {
                Request.Headers.TryGetValue("userName", out var userIdHeader);
                Request.Headers.TryGetValue("password", out var decodeIdHeader);
                if (_user.userName != userIdHeader.ToString())
                {
                    return BadRequest(new
                    {
                        statusCode = StatusCodes.Status401Unauthorized,
                        message = "Unauthorized",
                    });
                }
                if (_user.password != decodeIdHeader.ToString())
                {
                    return BadRequest(new
                    {
                        statusCode = StatusCodes.Status401Unauthorized,
                        message = "Unauthorized",
                    });
                }

                string jwt_token = _authService.CreateToken(_user);

                return Ok(new
                {
                    statusCode = "200",
                    message = "Success",
                    data = new
                    {
                        token = jwt_token
                    }
                });
            }
            catch
            {
                throw;
            }
        }
    }
}
