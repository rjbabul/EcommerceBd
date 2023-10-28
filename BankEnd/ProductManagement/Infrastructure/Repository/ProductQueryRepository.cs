using Application.Repository.Abstraction;
using Domain.Models;
using Infrastracture.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repository
{
    public class ProductQueryRepository :IproductQuaryRepository
    {
        readonly ApplicationDbContext _db;
        public ProductQueryRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        
        public List<Product> getAllProducts()
        {
            List<Product> products = _db.Products.ToList();
            if (products == null)
                return null;

            return products;
        }

       

        public Product getProductById(int id)
        {
            var product = _db.Products.FirstOrDefault(p => p.ProductID == id);

            return product;
        }

        public List<CartModel> getCartList()
        {
           var carts = _db.Carts.ToList();
            return carts;
        }

        
    }
}
