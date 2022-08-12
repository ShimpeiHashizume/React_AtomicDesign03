import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  defalt: { isAdmin: false }
});
