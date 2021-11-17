import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class SushiId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'SushiId');
  }

  public static create(): SushiId {
    return new SushiId(uuid());
  }

  public static restore(id: string): SushiId {
    return new SushiId(id);
  }
}
