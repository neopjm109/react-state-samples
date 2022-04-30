import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const memberStore = create(subscribeWithSelector(() => (
    {
        name: ""
    }
)));

memberStore.subscribe(console.log);

export default memberStore;