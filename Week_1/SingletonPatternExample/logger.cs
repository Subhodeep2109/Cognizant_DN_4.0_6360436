public sealed class Logger
{
    private static readonly Lazy<Logger> lazy = new Lazy<Logger>(() => new Logger());

    public static Logger Instance => lazy.Value;

    private Logger() { }

    public void Log(string message)
    {
        Console.WriteLine($"Log: {message}");
    }
}
