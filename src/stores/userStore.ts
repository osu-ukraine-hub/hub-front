import { axiosInstance } from "@/main";
import { AxiosResponse } from "axios";
import { defineStore } from "pinia";

interface LoginResponse {
  id: number;
  osuId: number;
  username: string;
  permissions: any;
}

interface User {
  id: number | undefined;
  osuId: number | undefined;
  username: string | undefined;
  permissions: string[] | undefined;
}

interface StateOptions {
  isLoggedIn: boolean;
  user: User;
}

export const useUserStore = defineStore("user", {
  state: () =>
    ({
      isLoggedIn: false,
      user: {},
    } as StateOptions),
  getters: {},
  actions: {
    async login(code: string): Promise<void> {
      try {
        const request: AxiosResponse<LoginResponse> = await axiosInstance.post(
          "/auth/osu/callback",
          undefined,
          {
            params: {
              code: code,
            },
          }
        );

        if (request && request.status < 400) {
          request.data.permissions = request?.data.permissions.split(",");
          this.user = request?.data;

          this.isLoggedIn = true;
        } else {
          console.log("Wotefak mazafak xD");
        }
      } catch (error: any) {
        console.log(error);
      }
    },
    async logout(): Promise<void> {
      try {
        const request: AxiosResponse<void> = await axiosInstance.get(
          "/auth/logout"
        );

        if (request && request.status < 400) {
          this.user = {} as User;

          this.isLoggedIn = false;
        } else {
          console.log("Wotefak mazafak xD");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  persist: true,
});
