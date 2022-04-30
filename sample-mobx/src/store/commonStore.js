import { makeAutoObservable } from "mobx";

class CommonStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }
}

export default CommonStore;