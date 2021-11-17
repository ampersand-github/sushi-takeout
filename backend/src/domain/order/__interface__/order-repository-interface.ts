import { Order } from '../order';
import { OrderId } from '../Order-id';

export interface IOrderRepository {
  findById(orderId: OrderId): Promise<Order | null>;
  findAll(): Promise<Order[]>;
  register(order: Order): Promise<void>;
  update(order: Order): Promise<void>;
  delete(order: Order): Promise<void>;
}
