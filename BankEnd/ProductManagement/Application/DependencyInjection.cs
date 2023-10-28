using Application.Services;
using Application.Services.Abstraction;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddScoped<IproductCommandServices, ProductCommandHandler>();
            services.AddScoped<IproductQueryServices, ProductQueryHandler>();
            
            return services;
        }
        
    }
}
