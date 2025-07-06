using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Create categories (Names are not present in your model, so only Id will be set by the database)
        var category1 = new Category();
        var category2 = new Category();

        // Add categories to the database
        await context.Categories.AddRangeAsync(category1, category2);
        await context.SaveChangesAsync(); // Save to generate Ids

        // Create products and assign CategoryId
        var product1 = new Product { Price = 75000, CategoryId = category1.Id };
        var product2 = new Product { Price = 1200, CategoryId = category2.Id };

        // Add products to the database
        await context.Products.AddRangeAsync(product1, product2);
        await context.SaveChangesAsync();

        Console.WriteLine("Initial data inserted successfully!");
    }
}
