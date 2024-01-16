declare class JsInterop {
    getWindow(): {
        closed: boolean;
        crossOriginIsolated: boolean;
        devicePixelRatio: number;
        innerHeight: number;
        innerWidth: number;
        isSecureContext: boolean;
        length: number;
        outerHeight: number;
        outerWidth: number;
        screenLeft: number;
        screenTop: number;
        screenX: number;
        screenY: number;
        scrollX: number;
        scrollY: number;
    };
    getScreen(): {
        availHeight: number;
        availWidth: number;
        colorDepth: number;
        height: number;
        orientation: {
            angle: number;
            type: OrientationType;
        };
        pixelDepth: number;
        width: number;
    };
    getBody(): {
        clientHeight: number;
        clientLeft: number;
        clientTop: number;
        clientWidth: number;
        offsetHeight: number;
        offsetLeft: number;
        offsetTop: number;
        offsetWidth: number;
        scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        scrollWidth: number;
    };
    getElementByBlazorId(id: string): {
        clientHeight: number;
        clientLeft: number;
        clientTop: number;
        clientWidth: number;
        offsetHeight: number;
        offsetLeft: number;
        offsetTop: number;
        offsetWidth: number;
        scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        scrollWidth: number;
    };
    getElement(selector: string): {
        clientHeight: number;
        clientLeft: number;
        clientTop: number;
        clientWidth: number;
        offsetHeight: number;
        offsetLeft: number;
        offsetTop: number;
        offsetWidth: number;
        scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        scrollWidth: number;
    };
    getDOMRectByBlazorId(id: string): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;
    };
    getDOMRect(selector: string): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;
    };
}
export declare var $blazor_extensions: JsInterop;
export {};
