import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Klaytn from "../klaytn/Klaytn";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    private eventTrackerHealth: DomNode;

    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(this.container = el(".home-view",
            el(".title-container",
                el("h2", "Service Health"),
                el("p", "This page provides status information on the services that are part of WebplusOne Server. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please ",
                    el("a", "contact Support.", { href: "", target: "_blank" }),
                )
            ),
            el(".content",
                el("ul",
                    el("li",
                        el("img", { src: "/images/logo/available.svg", alt: "Available" }),
                        el("span", "Available"),
                    ),
                    el("li",
                        el("img", { src: "/images/logo/information.svg", alt: "information" }),
                        el("span", "Service information"),
                    ),
                    el("li",
                        el("img", { src: "/images/logo/affected.svg", alt: "affected" }),
                        el("span", "One or more regions affected"),
                    ),
                ),
                el("table",
                    el("thead",
                        el("tr",
                            el("th", "Products"),
                            el("th", "Health"),
                        ),
                    ),
                    el("tbody",
                        el("tr",
                            el("th", "Event Tracker"),
                            this.eventTrackerHealth = el("td", "..."),
                        ),
                    ),
                ),
            ),
        ));

        this.load();
    }

    public async load() {
        const result = await fetch("https://event-tracker.webplusone.com/lastblock/klaytn");
        const block = parseInt(await result.text(), 10);
        const block2 = await Klaytn.loadBlockNumber();
        if (block2 - block > 3) {
            this.eventTrackerHealth.empty().append(el("img", { src: "/images/logo/affected.svg", alt: "Available" }));
        } else {
            this.eventTrackerHealth.empty().append(el("img", { src: "/images/logo/available.svg", alt: "Available" }));
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
