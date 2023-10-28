using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Abstraction
{
    public interface IproductCommandServices
    {
       Product addProduct(Product product);
       Product removeProduct(int id );
       Product UpdateProduct(Product product);
        bool addtoCart(CartModel cart);
    }
}
