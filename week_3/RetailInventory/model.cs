public class Category
{
    public int Id { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
}
