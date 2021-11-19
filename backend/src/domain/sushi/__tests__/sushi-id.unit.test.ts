import { SushiId } from '../sushi-id';

describe('SushiId', () => {
  it('createできる', () => {
    expect(SushiId.create()).toEqual(expect.any(SushiId));
  });

  it('restoreできる', () => {
    expect(SushiId.restore('test-id')).toEqual(expect.any(SushiId));
  });

  it('toStringできる', () => {
    expect(SushiId.restore('test-id').toString()).toEqual('test-id');
  });

  it('equalsできる', () => {
    expect(SushiId.restore('test-id').equals(SushiId.restore('test-id'))).toBe(
      true,
    );
    expect(
      SushiId.restore('test-id').equals(SushiId.restore('not-equal-id')),
    ).toBe(false);
  });
});
