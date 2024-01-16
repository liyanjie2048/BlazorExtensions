namespace Liyanjie.Blazor.Extensions;

public class BlazorQuery(IJSRuntime jsRuntime) : IAsyncDisposable
{
    readonly Lazy<Task<IJSObjectReference>> moduleTask
        = new(() => jsRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/Liyanjie.Blazor.Extensions/JsInterop.js").AsTask());

    public async ValueTask<JsWindow> GetWindowAsync()
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsWindow>("$blazor_extensions.getWindow");
    }
    public async ValueTask<JsScreen> GetScreenAsync()
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsScreen>("$blazor_extensions.getScreen");
    }
    public async ValueTask<JsHTMLElement> GetBodyAsync()
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsHTMLElement>("$blazor_extensions.getBody");
    }
    public async ValueTask<JsHTMLElement> GetElementAsync(ElementReference element)
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsHTMLElement>("$blazor_extensions.getElement", $"[_bl_{element.Id}]");
    }
    public async ValueTask<JsHTMLElement> GetElementAsync(string selectors)
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsHTMLElement>("$blazor_extensions.getElement", selectors);
    }
    public async ValueTask<JsDOMRect> GetDOMRectAsync(ElementReference element)
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsDOMRect>("$blazor_extensions.getDOMRect", $"[_bl_{element.Id}]");
    }
    public async ValueTask<JsDOMRect> GetDOMRectAsync(string selectors)
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<JsDOMRect>("$blazor_extensions.getDOMRect", selectors);
    }

#pragma warning disable CA1816 // Dispose methods should call SuppressFinalize
    public async ValueTask DisposeAsync()
#pragma warning restore CA1816 // Dispose methods should call SuppressFinalize
    {
        if (moduleTask.IsValueCreated)
        {
            var module = await moduleTask.Value;
            await module.DisposeAsync();
        }
    }
}
