import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'productos',
    component: Products
  }
];