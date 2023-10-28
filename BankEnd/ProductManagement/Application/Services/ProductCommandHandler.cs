
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
    public class ProductCommandHandler : IproductCommandServices
    {
        IproductCommandRepository _repository;
        IproductQuaryRepository _queryRepository;
        public ProductCommandHandler(IproductCommandRepository repository, IproductQuaryRepository queryRepository)
        {
            _repository = repository;
            _queryRepository = queryRepository;
        }
         public Product addProduct(Product product)
        {
            try {
                
                var checkproduct = _queryRepository.getProductById(product.ProductID);
                if (checkproduct != null)
                {
                    return null;
                }

                bool isSave = _repository.addProduct(product);

                    if (isSave==false)
                        return null;

                    return product;
             }
            catch (Exception ex)
            {
                throw ex;
            }
}

        public Product removeProduct(int id)
        {

            try
            {
                var product = _queryRepository.getProductById(id);
                if (product == null)
                {
                    return null;
                }

                bool isSave = _repository.removeProduct(id);
                if (isSave == false)
                    return null;

                return product;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Product UpdateProduct(Product product)
        {
            try
            {
                var aproduct = _queryRepository.getProductById(product.ProductID);
                if (aproduct == null)
                {
                    return null;
                }

                
                aproduct.ProductName = product.ProductName.Length>2? product.ProductName:aproduct.ProductName;
                aproduct.ProductPrice=product.ProductPrice>0? product.ProductPrice:aproduct.ProductPrice;
                aproduct.ProductDescription =  product.ProductDescription.Length>2? product.ProductDescription:aproduct.ProductDescription;
                var isSave = _repository.updateProduct(aproduct);

                if (isSave == false)

                    return null;

                return product;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool addtoCart(CartModel cart)
        {
             return _repository.addtoCart(cart);
        }

    }
}
