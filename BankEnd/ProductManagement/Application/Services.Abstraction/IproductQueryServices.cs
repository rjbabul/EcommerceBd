using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Abstraction
{
    public interface IproductQueryServices
    {
        Product getProductById(int id);
        List<Product> getAllProducts();
        List<Product> getcartProduct();
        
    }
}
