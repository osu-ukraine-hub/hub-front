import { defineStore } from "pinia";

interface NewsItem {
  title: string;
  thumbnail: string;
  content: string;
  pinned: boolean;
  created_at: Date;
}

interface StateOptions {
  recentNews: Array<NewsItem>;
}

export const useGlobalStore = defineStore("globalStore", {
  state: () =>
    ({
      recentNews: [
        {
          title: "UoT: 2022",
          thumbnail: "",
          content: "",
          pinned: true,
          created_at: new Date(),
        },
      ],
    } as StateOptions),
  getters: {},
  actions: {},
});
