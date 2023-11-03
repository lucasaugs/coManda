import { reactive } from "vue";
import axios from "axios";

const startStore = {
  userLogged: false,
  email: null,
  userId: null,
  showSidebar: false,

  restaurantData: [
    {
      id: 1,
      name: "Tatu Bola Bar",
      street: "Av. do Contorno, 6557",
      neighborhood: "Savassi",
    },
    {
      id: 2,
      name: "Tatu Bola Bar",
      street: "Av. do Contorno, 6557",
      neighborhood: "Savassi",
    },
    {
      id: 3,
      name: "Tatu Bola Bar",
      street: "Av. do Contorno, 6557",
      neighborhood: "Savassi",
    },
  ],

  usersData: [
    {
      id: 1,
      name: "Caio",
    },
    {
      id: 2,
      name: "Lucas",
    },
    {
      id: 3,
      name: "Henrique",
    },
  ],

  sheetData: [],
};

export const AppStore = reactive({ ...startStore });

export const updateRestaurantData = async () => {
  axios.get("localhost:3000/api/restaurants").then((res) => {
    AppStore.restaurantData = {
      name: res.data.name,
      street: res.data.street,
      neighborhood: res.data.neighborhood,
      id: res.data.id,
    };
  });
};

export const updateUsersData = async () => {
  axios.get("localhost:3000/api/users").then((res) => {
    AppStore.restaurantData = {
      id: res.data.id,
      name: res.data.name,
    };
  });
};

export const updateSheetData = async () => {
  axios.get("localhost:3000/api/sheetClient").then((res) => {
    AppStore.sheetData = {
      id: res.data.id,
      restaurantId: res.data.restaurantId,
      isOpen: res.data.isOpen,
      dividers: res.data.dividers,
    };
  });
};
