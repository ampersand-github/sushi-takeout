import { SushiSetId } from '../sushi-set-id';

describe('SushiSetId', () => {
  it('createできる', () => {
    expect(SushiSetId.create()).toEqual(expect.any(SushiSetId));
  });

  it('restoreできる', () => {
    expect(SushiSetId.restore('test-id')).toEqual(expect.any(SushiSetId));
  });

  it('toStringできる', () => {
    expect(SushiSetId.restore('test-id').toString()).toEqual('test-id');
  });

  it('equalsできる', () => {
    expect(
      SushiSetId.restore('test-id').equals(SushiSetId.restore('test-id')),
    ).toBe(true);
    expect(
      SushiSetId.restore('test-id').equals(SushiSetId.restore('not-equal-id')),
    ).toBe(false);
  });
});
