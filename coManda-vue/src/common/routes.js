import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ClientSingUpPage from "../views/ClientSingUpPage.vue";
import RestaurantSingUpPage from "../views/RestaurantSingUpPage.vue";
import PdfSingUpPage from "../views/PdfSingUpPage.vue";
import RecoverPage from "../views/RecoverPage.vue";
import RestaurantPage from "../views/RestaurantPage.vue";
import Restaurants from "../views/Restaurants.vue";
import AddFriends from "../views/AddFriends.vue";
import Menu from "../views/Menu.vue";
import MySheets from "../views/MySheets.vue";
import SheetView from "../views/SheetView.vue";

import {
  AppStore,
  updateRestaurantData,
  updateSheetData,
  updateUsersData,
} from "./AppStore.js";

const hideSidebar = () => {
  AppStore.showSidebar = false;
};

const showSidebar = () => {
  AppStore.showSidebar = true;
};

export const routes = [
  {
    path: "/",
    component: LandingPage,
    name: "Home",
    beforeEnter: [hideSidebar],
  },
  {
    path: "/login",
    component: LoginPage,
    name: "Login",
    beforeEnter: [hideSidebar],
  },
  {
    path: "/client-signUp",
    component: ClientSingUpPage,
    name: "Sing Up",
    beforeEnter: [hideSidebar],
  },
  {
    path: "/restaurant-signUp",
    component: RestaurantSingUpPage,
    name: "Restaurant Sing Up",
    beforeEnter: [hideSidebar],
  },
  {
    path: "/restaurant-signUp/menu",
    component: PdfSingUpPage,
    name: "Restaurant Menu",
    beforeEnter: [hideSidebar],
  },
  {
    path: "/recover",
    component: RecoverPage,
    name: "Recover Password",
    beforeEnter: [hideSidebar],
  },
  {
    path: "/restaurant/:restaurantId",
    component: RestaurantPage,
    name: "Restaurant Page",
    beforeEnter: [showSidebar, updateRestaurantData],
  },
  {
    path: "/restaurants",
    component: Restaurants,
    name: "Restaurants",
    beforeEnter: [showSidebar, updateRestaurantData],
  },
  {
    path: "/addFriends/:sheetId",
    component: AddFriends,
    name: "AddFriends",
    beforeEnter: [showSidebar, updateRestaurantData, updateUsersData],
  },
  {
    path: "/restaurant/:restaurantId/menu",
    component: Menu,
    name: "Menu",
    beforeEnter: [showSidebar, updateRestaurantData, updateSheetData],
  },
  {
    path: "/mySheets",
    component: MySheets,
    name: "MySheets",
    beforeEnter: [showSidebar, updateSheetData, updateRestaurantData],
  },
  {
    path: "/mySheets/:sheetId",
    component: SheetView,
    name: "SheetView",
    beforeEnter: [
      showSidebar,
      updateSheetData,
      updateRestaurantData,
      updateUsersData,
    ],
  },
];
