import CommonStore from "./commonStore";
import MemberStore from "./memberStore";

class UseStore {
    constructor() {
        this.commonStore = new CommonStore(this);
        this.memberStore = new MemberStore(this);
    }
}

export default new UseStore();