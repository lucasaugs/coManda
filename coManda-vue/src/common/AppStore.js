import { reactive } from "vue";

const startStore = {
  userLogged: false,
  email: null,
  user_id: null,
  user_type: null,
  showSidebar: false,
};

export const AppStore = reactive({ ...startStore });
