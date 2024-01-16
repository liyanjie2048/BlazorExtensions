class JsInterop
{
    public getWindow()
    {
        return {
            closed: window.closed,
            crossOriginIsolated: window.crossOriginIsolated,
            devicePixelRatio: window.devicePixelRatio,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            isSecureContext: window.isSecureContext,
            length: window.length,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
            screenLeft: window.screenLeft,
            screenTop: window.screenTop,
            screenX: window.screenX,
            screenY: window.screenY,
            scrollX: window.scrollX,
            scrollY: window.scrollY,
        };
    }

    public getScreen()
    {
        return {
            availHeight: screen.availHeight,
            availWidth: screen.availWidth,
            colorDepth: screen.colorDepth,
            height: screen.height,
            orientation: {
                angle: screen.orientation.angle,
                type: screen.orientation.type,
            },
            pixelDepth: screen.pixelDepth,
            width: screen.width,
        };
    }

    public getBody()
    {
        const element = document.body;
        return {
            clientHeight: element.clientHeight,
            clientLeft: element.clientLeft,
            clientTop: element.clientTop,
            clientWidth: element.clientWidth,
            offsetHeight: element.offsetHeight,
            offsetLeft: element.offsetLeft,
            offsetTop: element.offsetTop,
            offsetWidth: element.offsetWidth,
            scrollHeight: element.scrollHeight,
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop,
            scrollWidth: element.scrollWidth,
        };
    }

    public getElement(selectors: string)
    {
        const element = document.querySelector(selectors) as HTMLElement;
        return {
            clientHeight: element.clientHeight,
            clientLeft: element.clientLeft,
            clientTop: element.clientTop,
            clientWidth: element.clientWidth,
            offsetHeight: element.offsetHeight,
            offsetLeft: element.offsetLeft,
            offsetTop: element.offsetTop,
            offsetWidth: element.offsetWidth,
            scrollHeight: element.scrollHeight,
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop,
            scrollWidth: element.scrollWidth,
        };
    }

    public getDOMRect(selectors: string)
    {
        const domRect = document.querySelector(selectors)?.getBoundingClientRect();
        return {
            bottom: domRect.bottom,
            height: domRect.height,
            left: domRect.left,
            right: domRect.right,
            top: domRect.top,
            width: domRect.width,
            x: domRect.x,
            y: domRect.y,
        };
    }
}
export var $blazor_extensions = new JsInterop();