"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const skydapp_common_1 = require("skydapp-common");
class Kaikas extends skydapp_common_1.EventContainer {
    constructor() {
        super();
        this.klaytn = window.klaytn;
        this.caver = window.caver;
        this.checkConnected();
    }
    get installed() {
        return this.klaytn !== undefined && this.caver !== undefined;
    }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        return this.caver === undefined ? undefined : (await this.caver.klay.getAccounts())[0];
    }
    async loadChainId() {
        return this.caver === undefined ? -1 : await this.caver.klay.getChainId();
    }
    async loadBlockNumber() {
        return this.caver === undefined ? -1 : await this.caver.klay.getBlockNumber();
    }
    async loadBalance() {
        return bignumber_1.BigNumber.from(this.caver === undefined ? -1 : await this.caver.klay.getBalance(await this.loadAddress()));
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        await this.klaytn?.enable();
        this.checkConnected();
    }
    createContract(address, abi) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    }
    addToken(address, symbol, decimals, image) {
        this.klaytn?.sendAsync({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: { address, symbol, decimals, image },
            },
            id: Math.round(Math.random() * 100000),
        });
    }
}
exports.default = new Kaikas();
//# sourceMappingURL=Kaikas.js.map