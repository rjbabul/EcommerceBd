
using Application.Repository.Abstraction;
using Application.Services.Abstraction;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class ProductQueryHandler : IproductQueryServices
    {
        private readonly IproductQuaryRepository _quaryRepository;
        public ProductQueryHandler(IproductQuaryRepository quaryRepository)
        {
            _quaryRepository = quaryRepository;
        }
       
        public List<Product> getAllProducts()
        {
             
                var products = _quaryRepository.getAllProducts();
                if (products == null)
                    return null;
                return products;
            
        }

        

        public Product getProductById(int id)
        {
            try
            {
                Product product = _quaryRepository.getProductById(id);
                if (product == null)
                    return null;
                return product;
            }
            catch (Exception ex)
            { 
                throw ex;

            }
        }

         
        public List<Product> getcartProduct()
        {
            List<CartModel> carts = _quaryRepository.getCartList();
            List<Product> products = new List<Product>();
            foreach(var car in carts)
            {
                var aProduct = _quaryRepository.getProductById((int)car.ProductId);
                if(aProduct!=null)
                {
                    products.Add(aProduct);
                }
            }

            return products;

        }
    }
}
