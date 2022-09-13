"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Layout {
    constructor() {
        Layout.current = this;
        let select;
        skydapp_browser_1.BodyNode.append((this.container = (0, skydapp_browser_1.el)(".layout", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("img", { src: "/images/logo/webplusone.png", alt: "WebplusOne" })), (0, skydapp_browser_1.el)("main", (this.content = (0, skydapp_browser_1.el)(".content"))), (0, skydapp_browser_1.el)("footer", (0, skydapp_browser_1.el)(".footer-container", (0, skydapp_browser_1.el)(".copyright", "ⓒ WebplusOne. - Last updated: 2022-09-15 00:00:00 KRT "))))));
    }
    set title(title) {
        document.title = `${title} | Webplus One`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map