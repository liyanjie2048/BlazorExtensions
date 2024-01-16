namespace Liyanjie.Blazor.Extensions;

public readonly struct JsWindow
{
    public bool Closed { get; init; }
    public bool CrossOriginIsolated { get; init; }
    public double DevicePixelRatio { get; init; }
    public int InnerHeight { get; init; }
    public int InnerWidth { get; init; }
    public bool IsSecureContext { get; init; }
    public int Length { get; init; }
    public int OuterHeight { get; init; }
    public int OuterWidth { get; init; }
    public int ScreenLeft { get; init; }
    public int ScreenTop { get; init; }
    public int ScreenX { get; init; }
    public int ScreenY { get; init; }
    public int ScrollX { get; init; }
    public int ScrollY { get; init; }
}
