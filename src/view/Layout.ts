import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el("img", { src: "/images/logo/webplusone.png", alt: "WebplusOne" })
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                    el(".footer-container",
                        // el(".copyright", "ⓒ WebplusOne. - Last updated: 2022-09-15 00:00:00 KRT "),
                        el(".copyright", "ⓒ WebplusOne."),
                    ),
                ),
            )
            ),
        );
    }

    public set title(title: string) {
        document.title = `${title} | Webplus One`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
