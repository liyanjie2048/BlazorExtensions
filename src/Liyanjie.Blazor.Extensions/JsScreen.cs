namespace Liyanjie.Blazor.Extensions;

public readonly struct JsScreen
{
    public int AvailHeight { get; init; }
    public int AvailWidth { get; init; }
    public int ColorDepth { get; init; }
    public int Height { get; init; }
    public JsScreenOrientation Orientation { get; init; }
    public int PixelDepth { get; init; }
    public int Width { get; init; }
}
