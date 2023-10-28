using Application.Services.Abstraction;
using Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
 
    
    public class ProductController : ControllerBase
    {
         IproductCommandServices _commandService;
         readonly IproductQueryServices _queryService;
         public ProductController(IproductCommandServices commandService,IproductQueryServices queryService)
        {
            _commandService = commandService;
            _queryService = queryService;
        }
        // GET: api/<ProductController>

        [Authorize]
        [HttpGet("getallproduct")]
        public ActionResult< List<Product > > Get()
        {
            List<Product> products = _queryService.getAllProducts();
            if (products == null || products.Count == 0)
                return NotFound();

            return products;
        }

        // GET api/<ProductController>/5

        [Authorize]
        [HttpGet("getproduct/{id}")]
        public ActionResult<Product> Get(int id)
        {
            try
            {
                var product = _queryService.getProductById(id);
                if (product == null)
                    throw new Exception("3,Data Note Found.");

                return Ok(product);
            }
            catch
            {
                throw;
            }
        }

        // POST api/<ProductController>
        [Authorize]
        [HttpPost("addProduct")]
        public IActionResult addProduct(Product product)
        {

            try
            {
                if (product.ProductPrice == 0)
                    throw new Exception("2,Product Price required.");

                if (product.ProductID == 0)
                    throw new Exception("2,Product Id required.");

                if (product.ProductDescription.Length <= 0)
                    throw new Exception("2,Product Description required.");
                if (product.ProductName.Length <= 0)
                    throw new Exception("2,Product Name required.");
                if (product.CategoryId == 0)
                    throw new Exception("2,Product Category Id required.");


                var isok = _commandService.addProduct(product);
                if (isok == null) return NotFound();

                return Ok();
            }
            catch  
            {
                throw;
            }
        }

        // PUT api/<ProductController>/5
        [Authorize]
        [HttpPut("updateproduct")]
        public IActionResult updateproduct(Product product)
        {
            try
            {
                var isok = _commandService.UpdateProduct(product);
                if (isok == null) throw new Exception("3,Data Note Found.");

                return Ok();
            }
            catch
            {
                throw;
            }
        }

        // DELETE api/<ProductController>/5
        [Authorize]
        [HttpDelete("deleteproduct/{id}")]
        public IActionResult deleteproduct(int id)
        {
            try
            {
                var isok = _commandService.removeProduct(id);
                if (isok == null)
                {
                    throw new Exception("3,Data Not Found");
                }

                return Ok();
            }
            catch
            {
                throw;
            }
        }
        // Cart Section 
        [Authorize]
        [HttpPost("add-to-cart")]
        public IActionResult AddtoCart(CartModel cart)
        {
            try
            {
                var isok = _commandService.addtoCart(cart);
                if (isok == null) return BadRequest();

                return Ok();
            }
            catch
            {
                throw;
            }
        }

        [Authorize]
        [HttpGet("get-cart-roducts")]
        public ActionResult<List<Product>> GetCartProducts()
       {

            try
            {
                List<Product> products = _queryService.getcartProduct();
                if (products == null || products.Count == 0)
                    throw new Exception("3,Data Not Found.");

                return Ok(products);
            }
            catch
            {
                throw;
            }
        }
    }
}
