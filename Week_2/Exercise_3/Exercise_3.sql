-- Exercise_3-Create a stored procedure that returns the total number of employees in a department
USE companydb;
DELIMITER $$

CREATE PROCEDURE sp_CountEmployeesByDepartment(IN p_DepartmentID INT)
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = p_DepartmentID;
END$$

DELIMITER ;
CALL sp_CountEmployeesByDepartment(2);
