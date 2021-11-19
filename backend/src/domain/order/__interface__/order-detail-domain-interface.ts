import { Sushi } from 'src/domain/sushi/sushi';

export interface IOrderDetailDomain {
  sushi: Sushi;
  withoutWasabi: boolean;
  count: number;
}
