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
      name: "Tatu Bola Bar 2",
      street: "Av. do Contorno, 6557",
      neighborhood: "Savassi",
    },
    {
      id: 3,
      name: "Tatu Bola Bar 3",
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

  sheetData: [
    {
      id: 1,
      restaurantId: 1,
      isOpen: true,
      dividers: "3",
      total: 10,
    },
    {
      id: 2,
      restaurantId: 1,
      isOpen: true,
      dividers: "1",
      total: 35.7,
    },
    {
      id: 3,
      restaurantId: 3,
      isOpen: false,
      dividers: "1",
      total: 35,
    },
  ],

  menudata: [
    {
      name: "Batata Frita Pequena",
      price: 6.0,
      picture: "../assets/batata.jpg",
      restaurantId: 1,
      id: 1,
    },
    {
      name: "Batata Frita Média",
      price: 6.0,
      picture: "../assets/batata.jpg",
      restaurantId: 1,
      id: 2,
    },
    {
      name: "Batata Frita Grande",
      price: 6.0,
      picture: "../assets/batata.jpg",
      restaurantId: 1,
      id: 3,
    },
  ],
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

export const updateMenuData = async () => {
  axios.get("localhost:3000/api/menu").then((res) => {
    AppStore.menudata = {
      name: res.data.name,
      price: res.data.price,
      picture: res.data.picture,
      restaurantId: res.data.restaurantId,
    };
  });
};

const getRestaurantMenu = async (restaurantId) => {
  axios
    .get(`localhost:3000/api/restaurants/${restaurantId}/menu`)
    .then((res) => {
      AppStore.menudata = {
        name: res.data.name,
        price: res.data.price,
        picture: res.data.picture,
        restaurantId: res.data.restaurantId,
      };
    });
};
