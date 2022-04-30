import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const commonStore = create(subscribeWithSelector(() => (
    {
        count: 0
    }
)));

commonStore.subscribe(console.log);

export default commonStore;