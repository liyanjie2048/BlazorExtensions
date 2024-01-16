var JsInterop = /** @class */ (function () {
    function JsInterop() {
    }
    JsInterop.prototype.getWindow = function () {
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
    };
    JsInterop.prototype.getScreen = function () {
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
    };
    JsInterop.prototype.getBody = function () {
        var element = document.body;
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
    };
    JsInterop.prototype.getElement = function (selectors) {
        var element = document.querySelector(selectors);
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
    };
    JsInterop.prototype.getDOMRect = function (selectors) {
        var _a;
        var domRect = (_a = document.querySelector(selectors)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
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
    };
    return JsInterop;
}());
export var $blazor_extensions = new JsInterop();
//# sourceMappingURL=JsInterop.js.map