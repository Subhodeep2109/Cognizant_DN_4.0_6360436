using System;
using System.Collections.Generic;

class Program
{
    // Basic recursive forecasting function
    public static double ForecastValue(int period, double startValue, double growthRate, double additionalGrowth)
    {
        if (period == 0)
            return startValue;

        double prevValue = ForecastValue(period - 1, startValue, growthRate, additionalGrowth);
        return prevValue * (1 + growthRate) + additionalGrowth;
    }

    // Optimized recursive forecasting function with memoization
    private static Dictionary<int, double> memo = new Dictionary<int, double>();
    public static double ForecastValueMemo(int period, double startValue, double growthRate, double additionalGrowth)
    {
        if (period == 0)
            return startValue;

        if (memo.ContainsKey(period))
            return memo[period];

        double prevValue = ForecastValueMemo(period - 1, startValue, growthRate, additionalGrowth);
        double result = prevValue * (1 + growthRate) + additionalGrowth;
        memo[period] = result;
        return result;
    }

    static void Main(string[] args)
    {
        double startValue = 1000.0;
        double growthRate = 0.05; // 5% growth per period
        double additionalGrowth = 50.0; // $50 added each period
        int periods = 5;

        Console.WriteLine("=== Recursive Forecast ===");
        for (int i = 0; i <= periods; i++)
        {
            double forecast = ForecastValue(i, startValue, growthRate, additionalGrowth);
            Console.WriteLine($"Period {i}: {forecast:F2}");
        }

        Console.WriteLine("\n=== Memoized Recursive Forecast ===");
        memo.Clear(); // Clear memoization dictionary before use
        for (int i = 0; i <= periods; i++)
        {
            double forecast = ForecastValueMemo(i, startValue, growthRate, additionalGrowth);
            Console.WriteLine($"Period {i}: {forecast:F2}");
        }
    }
}

