using Domain.Common.Common.Service;
using Domain.Common.Common.Service.Abstraction;
using Domain.Common.Service;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public static class DipendencyInjection
    {
        public static IServiceCollection AddDomain(this IServiceCollection services)
        {
            services.AddScoped<ICommonService, CommonService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddSingleton<IEmailServiceForExceptionMessege, EmailServiceForExceptionMessege>();

            return services;
        }
    }
}
