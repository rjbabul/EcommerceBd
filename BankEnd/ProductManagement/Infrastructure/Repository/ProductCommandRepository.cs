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
    public class ProductCommandRepository: IproductCommandRepository 
    {
        ApplicationDbContext _db;
        public ProductCommandRepository(ApplicationDbContext db)
        {
            _db = db;
        }
         
        public bool addProduct(Product product)
        {
            _db.Products.Add(product);
          
            return _db.SaveChanges()>0;
        }

       
        public bool removeProduct(int id)
        {
           var product = _db.Products.FirstOrDefault(p => p.ProductID == id);
            if (product == null)
            {
                return false;
            }
            _db.Products.Remove(product);

            return _db.SaveChanges()>0;
           
        }

        public bool updateProduct(Product product)
        {
            _db.Products.Update(product);

            return _db.SaveChanges()>0;
        }


        public bool addtoCart(CartModel cart)
        {
             
            _db.Carts.Add(cart);

            return _db.SaveChanges() > 0;
        }

    }
}
