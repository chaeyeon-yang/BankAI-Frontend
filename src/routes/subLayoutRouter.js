import IdentifyPage from "stories/pages/IdentifyPage";
import LoginPage from "stories/pages/loginPage";

export const SUB_LAYOUT_ROUTES_URL = {
  LoginPage: {
    name: "로그인 페이지",
    path: () => "/login",
    component: LoginPage,
  },
  IdentifyPage: {
    name: "본인인증 페이지",
    path: () => "/identify",
    component: IdentifyPage,
  },
};
