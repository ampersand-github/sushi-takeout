import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class OrderId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'OrderId');
  }

  public static create(): OrderId {
    return new OrderId(uuid());
  }

  public static restore(id: string): OrderId {
    return new OrderId(id);
  }
}
