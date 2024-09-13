import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import CreateReservation from '../views/CreateReservation.vue';
import EditReservation from '../views/EditReservation.vue';
import ViewReservations from '../views/ViewReservations.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/create',
    name: 'create-reservation',
    component: CreateReservation
  },
  {
    path: '/edit/:id',
    name: 'edit-reservation',
    component: EditReservation
  },
  {
    path: '/view',
    name: 'view-reservations',
    component: ViewReservations
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // se usa createWebHistory para el modo 'history'
  routes
});

export default router;
