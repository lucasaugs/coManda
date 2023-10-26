import TelaInicial from '../views/TelaInicial.vue'
import LoginPage from '../views/LoginPage.vue'

export const routes = [
    {
        path: '/',
        component:TelaInicial,
        name: 'Home'
    },
    {
        path: '/login',
        component:LoginPage,
        name: 'Login'
    }
]