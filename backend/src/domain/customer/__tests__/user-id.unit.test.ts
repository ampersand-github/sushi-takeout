import { CustomerId } from '../customer-id';

describe('UserId', () => {
  it('createできる', () => {
    expect(CustomerId.create()).toEqual(expect.any(CustomerId));
  });

  it('restoreできる', () => {
    expect(CustomerId.restore('test-id')).toEqual(expect.any(CustomerId));
  });

  it('toStringできる', () => {
    expect(CustomerId.restore('test-id').toString()).toEqual('test-id');
  });

  it('equalsできる', () => {
    expect(
      CustomerId.restore('test-id').equals(CustomerId.restore('test-id')),
    ).toBe(true);
    expect(
      CustomerId.restore('test-id').equals(CustomerId.restore('not-equal-id')),
    ).toBe(false);
  });
  /* todo
  it('id(uuid)が同じだけどIDのクラスが違う', () => {
    const postId = PostId.restore('test-id');
    const userId = CustomerId.restore('test-id');
    expect(postId).not.toEqual(userId);
    expect(postId.equals(userId)).toBe(false);
  });
 */
});
