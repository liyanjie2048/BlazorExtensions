namespace Liyanjie.Blazor.Extensions;

public struct OneOf<T1, T2>
{
    public T1? T1Value { get; set; }
    public T2? T2Value { get; set; }

    public readonly object? Value
    {
        get
        {
            if (T1Value is not null)
                return T2Value?.ToString();
            else if (T2Value is not null)
                return T2Value?.ToString();
            else
                return default;
        }
    }

    public static implicit operator OneOf<T1, T2>(T1 value) => new() { T1Value = value };
    public static implicit operator OneOf<T1, T2>(T2 value) => new() { T2Value = value };
}
public struct OneOf<T1, T2, T3>
{
    public T1? T1Value { get; set; }
    public T2? T2Value { get; set; }
    public T3? T3Value { get; set; }

    public readonly object? Value
    {
        get
        {
            if (T1Value is not null)
                return T2Value?.ToString();
            else if (T2Value is not null)
                return T2Value?.ToString();
            else if (T3Value is not null)
                return T3Value?.ToString();
            else
                return default;
        }
    }

    public static implicit operator OneOf<T1, T2, T3>(T1 value) => new() { T1Value = value };
    public static implicit operator OneOf<T1, T2, T3>(T2 value) => new() { T2Value = value };
    public static implicit operator OneOf<T1, T2, T3>(T3 value) => new() { T3Value = value };
}
