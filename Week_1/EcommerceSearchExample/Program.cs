using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        Product[] products = new Product[]
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "T-Shirt", "Clothing"),
            new Product(150, "Smartphone", "Electronics"),
            new Product(120, "Book", "Books"),
            new Product(180, "Shoes", "Footwear")
        };

        int searchId = 150;

        // Linear Search
        Product foundLinear = LinearSearch(products, searchId);
        Console.WriteLine(foundLinear != null
            ? $"[Linear] Found: {foundLinear.ProductName} in {foundLinear.Category}"
            : "[Linear] Product not found.");

        // Binary Search (requires sorted array)
        var sortedProducts = products.OrderBy(p => p.ProductId).ToArray();
        Product foundBinary = BinarySearch(sortedProducts, searchId);
        Console.WriteLine(foundBinary != null
            ? $"[Binary] Found: {foundBinary.ProductName} in {foundBinary.Category}"
            : "[Binary] Product not found.");
    }

    public static Product LinearSearch(Product[] products, int targetId)
    {
        foreach (var product in products)
        {
            if (product.ProductId == targetId)
                return product;
        }
        return null;
    }

    public static Product BinarySearch(Product[] products, int targetId)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            if (products[mid].ProductId == targetId)
                return products[mid];
            else if (products[mid].ProductId < targetId)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }
}
