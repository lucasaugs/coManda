import { reactive } from "vue";
import axios from "axios";

const startStore = {
  userLogged: false,
  email: null,
  userId: null,
  showSidebar: false,

  restaurantData: [],

  usersData: [],

  sheetData: [],

  menuData: [],
};

export const AppStore = reactive({ ...startStore });

export const updateRestaurantData = async () => {
  axios.get("http://localhost:3030/api/restaurants").then((res) => {
    if (!res.data.length) return;
    AppStore.restaurantData = res.data.map((restaurant) => {
      return {
        id: restaurant.id,
        name: restaurant.name,
        street: restaurant.street,
        neighborhood: restaurant.neighborhood,
      };
    });
  });
};

export const updateUsersData = async () => {
  axios.get("http://localhost:3030/api/users").then((res) => {
    if (!res.data.length) return;
    AppStore.usersData = res.data.map((user) => {
      return {
        id: user.id,
        name: user.name,
      };
    });
  });
};

export const updateSheetData = async () => {
  axios.get("http://localhost:3030/api/sheetClient").then((res) => {
    if (!res.data.length) return;
    AppStore.sheetData = res.data.map((item) => {
      return {
        id: item.id,
        restaurantId: item.restaurantId,
        isOpen: item.isOpen,
        dividers: item.dividers,
      };
    });
  });
};

export const getRestaurantMenu = async (restaurantId) => {
  axios
    .get(`http://localhost:3030/api/restaurants/${restaurantId}/menu`)
    .then((res) => {
      if (!res.data.length) return;
      AppStore.menuData = res.data.map((item) => {
        return {
          name: item.name,
          price: item.price,
          picture: item.picture,
          restaurantId: item.restaurantId,
          id: item.id,
        };
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
