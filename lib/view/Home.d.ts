import { View, ViewParams } from "skydapp-common";
export default class Home implements View {
    private container;
    private interval;
    private eventTrackerHealth;
    constructor();
    load(): Promise<void>;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Home.d.ts.map