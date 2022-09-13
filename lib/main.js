"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const superagent_1 = __importDefault(require("superagent"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Home_1 = __importDefault(require("./view/Home"));
(async () => {
    skydapp_browser_1.msg.language = skydapp_browser_1.BrowserInfo.language;
    skydapp_browser_1.msg.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skydapp_common_1.SkyRouter.route("**", Layout_1.default);
    skydapp_common_1.SkyRouter.route("", Home_1.default);
    if (sessionStorage.__spa_path) {
        skydapp_common_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
//# sourceMappingURL=main.js.map