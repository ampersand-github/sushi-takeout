import { OrderDetailId } from '../order-detail-id';
import { OrderId } from '../order-id';

describe('OrderDetailId', () => {
  it('createできる', () => {
    expect(OrderDetailId.create()).toEqual(expect.any(OrderDetailId));
  });

  it('restoreできる', () => {
    expect(OrderDetailId.restore('test-id')).toEqual(expect.any(OrderDetailId));
  });

  it('toStringできる', () => {
    expect(OrderDetailId.restore('test-id').toString()).toEqual('test-id');
  });

  it('equalsできる', () => {
    expect(
      OrderDetailId.restore('test-id').equals(OrderDetailId.restore('test-id')),
    ).toBe(true);
    expect(
      OrderDetailId.restore('test-id').equals(
        OrderDetailId.restore('not-equal-id'),
      ),
    ).toBe(false);
  });

  it('id(uuid)が同じだけどIDのクラスが違う', () => {
    const orderId = OrderId.restore('test-id');
    const orderDetailId = OrderDetailId.restore('test-id');
    expect(orderId).not.toEqual(orderDetailId);
    expect(orderId.equals(orderDetailId)).toBe(false);
  });
});
