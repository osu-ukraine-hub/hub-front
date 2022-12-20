import { axiosInstance } from "@/main";
import { AxiosResponse } from "axios";
import { defineStore } from "pinia";

interface User {
  id: number;
  osuId: number;
  username: string;
  permissions: string | string[];
}

interface StateOptions {
  isLoggedIn: boolean;
  user: User;
}

export const useUserStore = defineStore("user", {
  state: () =>
    ({
      isLoggedIn: false,
      user: {
        id: 0,
        osuId: 0,
        username: "",
        permissions: [],
      },
    } as StateOptions),
  getters: {},
  actions: {
    async login(code: string): Promise<void> {
      let request: AxiosResponse | undefined;
      try {
        request = await axiosInstance.post("/auth/osu/callback", undefined, {
          params: {
            code: code,
          },
        });
      } catch (error) {
        console.log(error);
      }

      if (request && request.status < 400) {
        request?.data.permissions.split(",");
        this.user = request?.data;

        this.isLoggedIn = true;
      } else {
        console.log("Wotefak mazafak xD");
      }
    },
    async logout(): Promise<void> {
      let request: AxiosResponse | undefined;
      try {
        request = await axiosInstance.get("/auth/logout");
      } catch (error) {
        console.log(error);
      }

      if (request && request.status < 400) {
        this.user = {
          id: 0,
          osuId: 0,
          username: "",
          permissions: [],
        };

        this.isLoggedIn = false;
      } else {
        console.log("Wotefak mazafak xD");
      }
    },
  },
  persist: true,
});
