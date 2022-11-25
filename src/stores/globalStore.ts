import { defineStore } from 'pinia';

interface StoreOptions {
    state(): any;
    get: object;
    actions: object;
};

interface NewsItem {
    title: string;
    thumbnail: string;
    content: string;
    pinned: boolean;
    created_at: Date;
};

interface StateOptions {
    recentNews: Array<NewsItem>;
};

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        recentNews: [
            {
                title: 'UoT: 2022',
                thumbnail: '',
                content: '',
                pinned: true,
                created_at: new Date(),
            }
        ]
    } as StateOptions),
    get: {},
    actions: {
        increaseCount() {
            this.count++;
        }
    } as any,
} as StoreOptions);