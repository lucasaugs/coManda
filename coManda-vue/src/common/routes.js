import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ClientSingUpPage from '../views/ClientSingUpPage.vue'
import RestaurantSingUpPage from '../views/RestaurantSingUpPage.vue' 

export const routes = [
    {
        path: '/',
        component:LandingPage,
        name: 'Home'
    },
    {
        path: '/login',
        component:LoginPage,
        name: 'Login'
    },
    {
        path: '/client-signUp',
        component:ClientSingUpPage,
        name: 'Sing Up'
    },
    {
        path: '/restaurant-signUp',
        component:RestaurantSingUpPage,
        name: 'Restaurant Sing Up'
    }
]