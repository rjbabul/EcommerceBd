using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastracture.Database
{
    public class ApplicationDbContext :DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<CartModel> Carts { get; set; }
        public DbSet<OrderModel> OrderModels { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           string connectionString = "Server=(local); Database=ProductDatabase; Trusted_Connection=true;TrustServerCertificate=True;";

           optionsBuilder.UseSqlServer(connectionString);
           //BABUL\\SQLEXPRESS
        }
    }
}
