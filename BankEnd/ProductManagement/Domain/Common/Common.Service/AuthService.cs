using Domain.Common.Common.Service.Abstraction;
using Domain.Models.Common;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Common.Common.Service
{
    public class AuthService:IAuthService
    {
        private readonly IConfiguration _configuration;
        public AuthService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string CreateToken(User user)
        {
            try
            {
                List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.UserData, user.userName),
                new Claim(ClaimTypes.Role, "User"),
            };

                var keyBytes = Encoding.UTF8.GetBytes(_configuration.GetSection("SecretKey").Value!);
                if (keyBytes.Length < 16)
                {
                    throw new Exception("SecretKey length is too short. It should be at least 16 bytes.");
                }

                var key = new SymmetricSecurityKey(keyBytes);

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

                var token = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(1440),
                    signingCredentials: creds
                );

                var jwt = new JwtSecurityTokenHandler().WriteToken(token);

                return jwt;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }
    }
}
