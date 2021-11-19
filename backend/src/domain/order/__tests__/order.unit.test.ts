import { Customer } from 'src/domain/customer/customer';
import { IOrderDomain } from '../__interface__/order-domain-interface';
import { Order } from '../order';
import { OrderId } from '../order-id';
import { OrderDetail } from '../order-detail';
import { Sushi } from 'src/domain/sushi/sushi';

const OrderProps: IOrderDomain = {
  customer: Customer.create({ name: 'name', telephone: 123 }),
  orderDetail: [
    OrderDetail.create({
      sushi: Sushi.create({ name: '干瓢', price: 100 }),
      withoutWasabi: false,
      count: 2,
    }),
  ],
};

describe('Order', () => {
  it('createできる', () => {
    expect(Order.create(OrderProps)).toEqual(expect.any(Order));
  });

  it('restoreできる', () => {
    const orderId: OrderId = OrderId.restore('test-id');
    expect(Order.restore(OrderProps, orderId)).toEqual(expect.any(Order));
    expect(Order.restore(OrderProps, orderId).id.equals(orderId)).toBe(true);
  });
});
