import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class HomePage {

  stats = [
    {
      title: 'Usuarios',
      value: '12,540',
      change: '+12%',
      icon: '👥'
    },
    {
      title: 'Ventas',
      value: '$48,900',
      change: '+18%',
      icon: '💰'
    },
    {
      title: 'Pedidos',
      value: '1,245',
      change: '+8%',
      icon: '📦'
    },
    {
      title: 'Mensajes',
      value: '328',
      change: '+24%',
      icon: '✉️'
    }
  ];

  activities = [
    {
      user: 'Juan Pérez',
      action: 'Realizó una compra',
      time: 'Hace 5 min'
    },
    {
      user: 'María López',
      action: 'Actualizó su perfil',
      time: 'Hace 20 min'
    },
    {
      user: 'Carlos Ruiz',
      action: 'Registró un nuevo pedido',
      time: 'Hace 1 hora'
    },
    {
      user: 'Ana Torres',
      action: 'Envió un mensaje',
      time: 'Hace 2 horas'
    }
  ];

}
