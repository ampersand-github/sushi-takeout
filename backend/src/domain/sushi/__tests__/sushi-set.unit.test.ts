import { Sushi } from '../sushi';
import { SushiSet } from '../sushi-set';
import { SushiSetId } from '../sushi-set-id';
import { ISushiDomain } from '../__interface__/sushi-domain-interface';
import { ISushiSetDomain } from '../__interface__/sushi-set-domain-interface';

describe('SushiSet', () => {
  const sushiProps: ISushiDomain = { name: '干瓢', price: 100 };
  const sushi = Sushi.create(sushiProps);
  const sushiSetProps: ISushiSetDomain = {
    name: 'セット名',
    price: 1000,
    sushiList: [{ sushi: sushi, count: 1 }],
  };
  it('createできる', () => {
    expect(SushiSet.create(sushiSetProps)).toEqual(expect.any(SushiSet));
  });

  it('restoreできる', () => {
    const sushiSetId: SushiSetId = SushiSetId.restore('test-id');
    expect(SushiSet.restore(sushiSetProps, sushiSetId)).toEqual(
      expect.any(SushiSet),
    );
    expect(
      SushiSet.restore(sushiSetProps, sushiSetId).id.equals(sushiSetId),
    ).toBe(true);
  });
});
