using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Repository.Abstraction
{
    public interface IproductQuaryRepository
    {
        Product getProductById(int id);
        List<Product> getAllProducts();
        List<CartModel> getCartList();
    }
}
