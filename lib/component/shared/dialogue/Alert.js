"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Alert extends skydapp_browser_1.Popup {
    constructor(title, message, confirmTitle) {
        super(".popup-background");
        this.append(this.content = (0, skydapp_browser_1.el)(".dialogue.alert", (0, skydapp_browser_1.el)("h2", title), (0, skydapp_browser_1.el)("p", message), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("button", confirmTitle === undefined ? (0, skydapp_browser_1.msg)("CONFIRM_BUTTON") : confirmTitle, {
            click: () => this.delete(),
        }))));
    }
}
exports.default = Alert;
//# sourceMappingURL=Alert.js.map