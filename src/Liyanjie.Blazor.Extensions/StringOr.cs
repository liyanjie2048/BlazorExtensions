namespace Liyanjie.Blazor.Extensions;

public struct StringOr<T>
{
    public string? StringValue { get; set; }
    public T? TValue { get; set; }

    public readonly string? Value
    {
        get
        {
            if (StringValue is not null)
                return StringValue;
            else
                return TValue?.ToString();
        }
    }

    public static implicit operator StringOr<T>(T value) => new() { TValue = value };
    public static implicit operator StringOr<T>(string value) => new() { StringValue = value };
}
public struct StringOr<T1, T2>
{
    public string? StringValue { get; set; }
    public T1? T1Value { get; set; }
    public T2? T2Value { get; set; }

    public readonly string? Value
    {
        get
        {
            if (StringValue is not null)
                return StringValue;
            else if (T1Value is not null)
                return T2Value?.ToString();
            else if (T2Value is not null)
                return T2Value?.ToString();
            else
                return default;
        }
    }

    public static implicit operator StringOr<T1, T2>(T1 value) => new() { T1Value = value };
    public static implicit operator StringOr<T1, T2>(T2 value) => new() { T2Value = value };
    public static implicit operator StringOr<T1, T2>(string value) => new() { StringValue = value };
}
