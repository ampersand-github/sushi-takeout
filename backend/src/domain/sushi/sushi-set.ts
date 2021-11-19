import { AggregateRoot } from '../__shared__/aggregate-root';
import { SushiSetId } from './sushi-set-id';
import { ISushiSetDomain } from './__interface__/sushi-set-domain-interface';

export class SushiSet extends AggregateRoot<ISushiSetDomain, SushiSetId> {
  public static create(props: ISushiSetDomain): SushiSet {
    return new SushiSet(props, SushiSetId.create());
  }

  public static restore(props: ISushiSetDomain, id: SushiSetId): SushiSet {
    return new SushiSet(props, id);
  }

  public get name(): ISushiSetDomain['name'] {
    return this.props.name;
  }

  public get price(): ISushiSetDomain['price'] {
    return this.props.price;
  }

  public get sushiList(): ISushiSetDomain['sushiList'] {
    return this.props.sushiList;
  }
}
