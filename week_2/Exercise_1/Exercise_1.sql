-- Exercise 1: Ranking and Window Functions
CREATE DATABASE ShopDB;
USE shopdb;
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);
-- apply the ranking functions (ROW_NUMBER(), RANK(), DENSE_RANK()) on your Products table to find the top 3 most expensive products in each category.
-- Using ROW_NUMBER()
SELECT *
FROM (
  SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
  FROM
    Products
) ranked
WHERE RowNum <= 3;
-- Using RANK()
SELECT *
FROM (
  SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS PriceRank
  FROM
    Products
) ranked
WHERE PriceRank <= 3;
-- Using DENSE_RANK()
SELECT *
FROM (
  SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS PriceDenseRank
  FROM
    Products
) ranked
WHERE PriceDenseRank <= 3;

