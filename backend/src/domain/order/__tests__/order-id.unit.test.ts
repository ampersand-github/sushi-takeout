import { OrderId } from '../Order-id';

describe('OrderId', () => {
  it('createできる', () => {
    expect(OrderId.create()).toEqual(expect.any(OrderId));
  });

  it('restoreできる', () => {
    expect(OrderId.restore('test-id')).toEqual(expect.any(OrderId));
  });

  it('toStringできる', () => {
    expect(OrderId.restore('test-id').toString()).toEqual('test-id');
  });

  it('equalsできる', () => {
    expect(OrderId.restore('test-id').equals(OrderId.restore('test-id'))).toBe(
      true,
    );
    expect(
      OrderId.restore('test-id').equals(OrderId.restore('not-equal-id')),
    ).toBe(false);
  });
});
