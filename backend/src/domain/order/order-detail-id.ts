import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class OrderDetailId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'OrderDetailId');
  }

  public static create(): OrderDetailId {
    return new OrderDetailId(uuid());
  }

  public static restore(id: string): OrderDetailId {
    return new OrderDetailId(id);
  }
}
