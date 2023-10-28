using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Repository.Abstraction
{
    public interface IproductCommandRepository
    {
        bool addProduct(Product product);
        bool removeProduct(int id);
        bool updateProduct(Product product);
        bool addtoCart(CartModel cart);

    }
}
