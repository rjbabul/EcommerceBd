namespace Domain.Models
{
    public class Product
    {
        public int Id { get; set; }
        public int ProductID { get; set; }
        public int CategoryId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string ProductImage { get; set; } = string.Empty;
        public float? ProductPrice { get; set; } = null;
        public string ProductDescription { get; set; } = string.Empty;
    }
}