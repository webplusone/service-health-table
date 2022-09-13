"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Prompt extends skydapp_browser_1.Popup {
    constructor(title, message, confirmTitle, confirm, placeholder) {
        super(".popup-background");
        this.append(this.content = (0, skydapp_browser_1.el)(".dialogue.prompt", (0, skydapp_browser_1.el)("h2", title), (0, skydapp_browser_1.el)("p", message), (0, skydapp_browser_1.el)(".input-container", this.input = (0, skydapp_browser_1.el)("input", { placeholder: placeholder })), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("button", (0, skydapp_browser_1.msg)("CANCEL_BUTTON"), {
            click: () => this.delete(),
        }), (0, skydapp_browser_1.el)("button", confirmTitle, {
            click: () => {
                confirm(this.input.domElement.value);
                this.delete();
            },
        }))));
    }
}
exports.default = Prompt;
//# sourceMappingURL=Prompt.js.map