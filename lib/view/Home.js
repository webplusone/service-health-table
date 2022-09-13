"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Layout_1 = __importDefault(require("./Layout"));
class Home {
    constructor() {
        Layout_1.default.current.title = "Home";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".home-view", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", "Service Health"), (0, skydapp_browser_1.el)("p", "This page provides status information on the services that are part of WebplusOne Server. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please ", (0, skydapp_browser_1.el)("a", "contact Support.", { href: "", target: "_blank" }))), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("ul", (0, skydapp_browser_1.el)("li", (0, skydapp_browser_1.el)("img", { src: "/images/logo/available.svg", alt: "Available" }), (0, skydapp_browser_1.el)("span", "Available")), (0, skydapp_browser_1.el)("li", (0, skydapp_browser_1.el)("img", { src: "/images/logo/information.svg", alt: "information" }), (0, skydapp_browser_1.el)("span", "Service information")), (0, skydapp_browser_1.el)("li", (0, skydapp_browser_1.el)("img", { src: "/images/logo/affected.svg", alt: "affected" }), (0, skydapp_browser_1.el)("span", "One or more regions affected"))), (0, skydapp_browser_1.el)("table", (0, skydapp_browser_1.el)("thead", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("th", "Products"), (0, skydapp_browser_1.el)("th", "Health"))), (0, skydapp_browser_1.el)("tbody", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("th", "Event Tracker"), this.eventTrackerHealth = (0, skydapp_browser_1.el)("td", "...")))))));
        this.load();
    }
    async load() {
        const result = await fetch("https://event-tracker.webplusone.com/lastblock/klaytn");
        const block = parseInt(await result.text(), 10);
        const block2 = await Klaytn_1.default.loadBlockNumber();
        if (block2 - block > 3) {
            this.eventTrackerHealth.empty().append((0, skydapp_browser_1.el)("img", { src: "/images/logo/affected.svg", alt: "Available" }));
        }
        else {
            this.eventTrackerHealth.empty().append((0, skydapp_browser_1.el)("img", { src: "/images/logo/available.svg", alt: "Available" }));
        }
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map