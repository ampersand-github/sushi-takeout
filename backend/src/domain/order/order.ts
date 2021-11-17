import { AggregateRoot } from '../__shared__/aggregate-root';
import { OrderId } from './Order-id';
import { IOrderDomain } from './__interface__/order-domain-interface';

export class Order extends AggregateRoot<IOrderDomain, OrderId> {
  public static create(props: IOrderDomain): Order {
    return new Order(props, OrderId.create());
  }

  public static restore(props: IOrderDomain, id: OrderId): Order {
    return new Order(props, id);
  }
  public get customer(): IOrderDomain['customer'] {
    return this.props.customer;
  }
  public get orderDetail(): IOrderDomain['orderDetail'] {
    return this.props.orderDetail;
  }
}
