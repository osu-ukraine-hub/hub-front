import { defineStore } from 'pinia';

interface StoreOptions {
    state(): any;
    get: object;
    actions: object;
}

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        count: 35,
    }),
    get: {},
    actions: {
        increaseCount() {
            this.count++;
        }
    } as any,
} as StoreOptions);