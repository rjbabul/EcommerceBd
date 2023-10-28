using Application;
using Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors;
using ProductAPI.Middleware;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Domain.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication().AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        ValidateAudience = false,
        ValidateIssuer = false,
        ClockSkew = TimeSpan.Zero,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                builder.Configuration.GetSection("SecretKey").Value!))
    };
});
builder.Services.AddCors(options =>

    options.AddPolicy("AngularTestProject",
          policy =>
          {
              policy.WithOrigins("http://localhost:4200").AllowAnyMethod()
              .AllowAnyHeader()
              .AllowAnyOrigin()
              .AllowAnyHeader();
          }
   ));


builder.Services
    .AddApplication()
    .AddInfractructure()
    .AddDomain();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseMiddleware<UnauthorizedMiddleware>();
app.UseMiddleware<ErrorExceptionHandlingMiddleware>();
app.UseAuthorization();
app.UseCors("AngularTestProject");

app.MapControllers();

app.Run();
