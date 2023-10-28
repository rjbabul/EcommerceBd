using Application.Services.Abstraction;
using Application.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Repository;
using Application.Repository.Abstraction;
using Infrastracture.Database;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfractructure(this IServiceCollection services)
        {
            services.AddScoped<IproductCommandRepository, ProductCommandRepository>();
            services.AddScoped<IproductQuaryRepository, ProductQueryRepository>();
            services.AddScoped<ApplicationDbContext>();
            return services;
        }
    }
}
