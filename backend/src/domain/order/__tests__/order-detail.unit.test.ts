import { Sushi } from 'src/domain/sushi/sushi';
import { OrderDetail } from '../order-detail';
import { IOrderDetailDomain } from '../__interface__/order-detail-domain-interface';
import { OrderDetailId } from '../order-detail-id';

const OrderDetailProps: IOrderDetailDomain = {
  sushi: Sushi.create({ name: '干瓢', price: 100 }),
  withoutWasabi: false,
  count: 2,
};

describe('OrderDetail', () => {
  it('createできる', () => {
    expect(OrderDetail.create(OrderDetailProps)).toEqual(
      expect.any(OrderDetail),
    );
  });

  it('restoreできる', () => {
    const orderDetailId = OrderDetailId.restore('test-id');
    expect(OrderDetail.restore(OrderDetailProps, orderDetailId)).toEqual(
      expect.any(OrderDetail),
    );
    expect(
      OrderDetail.restore(OrderDetailProps, orderDetailId).id.equals(
        orderDetailId,
      ),
    ).toBe(true);
  });
});
