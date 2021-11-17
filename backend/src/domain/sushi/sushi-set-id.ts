import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class SushiSetId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'SushiSetId');
  }

  public static create(): SushiSetId {
    return new SushiSetId(uuid());
  }

  public static restore(id: string): SushiSetId {
    return new SushiSetId(id);
  }
}
