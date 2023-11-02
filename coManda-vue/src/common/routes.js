import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ClientSingUpPage from "../views/ClientSingUpPage.vue";
import RestaurantSingUpPage from "../views/RestaurantSingUpPage.vue";
import PdfSingUpPage from "../views/PdfSingUpPage.vue";
import RecoverPage from "../views/RecoverPage.vue";
import RestaurantPage from "../views/RestaurantPage.vue";

export const routes = [
  {
    path: "/",
    component: LandingPage,
    name: "Home",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "Login",
  },
  {
    path: "/client-signUp",
    component: ClientSingUpPage,
    name: "Sing Up",
  },
  {
    path: "/restaurant-signUp",
    component: RestaurantSingUpPage,
    name: "Restaurant Sing Up",
  },
  {
    path: "/restaurant-signUp/menu",
    component: PdfSingUpPage,
    name: "Restaurant Menu",
  },
  {
    path: "/recover",
    component: RecoverPage,
    name: "Recover Password",
  },
  {
    path: "/restaurant",
    component: RestaurantPage,
    name: "Restaurant Page",
  },
];
