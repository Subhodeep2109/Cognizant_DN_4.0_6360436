using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.Instance;
        Logger logger2 = Logger.Instance;

        logger1.Log("First message");
        logger2.Log("Second message");

        if (object.ReferenceEquals(logger1, logger2))
        {
            Console.WriteLine("Both logger1 and logger2 refer to the same instance.");
        }
        else
        {
            Console.WriteLine("Different instances exist! Singleton failed.");
        }
    }
}
