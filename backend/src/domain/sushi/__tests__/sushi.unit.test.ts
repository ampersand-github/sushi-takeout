import { Sushi } from '../sushi';
import { SushiId } from '../sushi-id';
import { ISushiDomain } from '../__interface__/sushi-domain-interface';

describe('Sushi', () => {
  const SushiProps: ISushiDomain = { name: '干瓢', price: 100 };

  it('createできる', () => {
    expect(Sushi.create(SushiProps)).toEqual(expect.any(Sushi));
  });

  it('restoreできる', () => {
    const sushiId: SushiId = SushiId.restore('test-id');
    expect(Sushi.restore(SushiProps, sushiId)).toEqual(expect.any(Sushi));
    expect(Sushi.restore(SushiProps, sushiId).id.equals(sushiId)).toBe(true);
  });
});
