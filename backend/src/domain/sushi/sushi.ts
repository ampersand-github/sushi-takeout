import { AggregateRoot } from '../__shared__/aggregate-root';
import { ISushiDomain } from './__interface__/sushi-domain-interface';
import { SushiId } from './sushi-id';

export class Sushi extends AggregateRoot<ISushiDomain, SushiId> {
  public static create(props: ISushiDomain): Sushi {
    return new Sushi(props, SushiId.create());
  }

  public static restore(props: ISushiDomain, id: SushiId): Sushi {
    return new Sushi(props, id);
  }

  public get name(): ISushiDomain['name'] {
    return this.props.name;
  }

  public get price(): ISushiDomain['price'] {
    return this.props.price;
  }
}
