import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  orders = [
    { id: 1, product: 'Papa', quantity: 2, total: 50.00, accepted: false },
    { id: 2, product: 'Tomate', quantity: 3, total: 75.00, accepted: false },
    { id: 3, product: 'Fresa', quantity: 1, total: 30.00, accepted: false },
    // Agrega más objetos de pedido según sea necesario
  ];

  acceptOrder(orderId: number): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.accepted = true;
    }
  }

}
