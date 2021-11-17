import { Sushi } from '../sushi';

// todo これはなんだ？
interface ISushiSetItem {
  sushi: Sushi;
  count: number;
}

export interface ISushiSetDomain {
  name: string;
  price: number;
  sushiList: ISushiSetItem[];
}
