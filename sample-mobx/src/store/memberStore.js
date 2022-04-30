import { makeAutoObservable } from "mobx";

class MemberStore {
    name = 0;

    constructor() {
        makeAutoObservable(this);
    }
}

export default MemberStore;