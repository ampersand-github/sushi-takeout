import { OrderDetailId } from './order-detail-id';
import { Entity } from '../__shared__/entity';
import { IOrderDetailDomain } from './__interface__/order-detail-domain-interface';

export class OrderDetail extends Entity<IOrderDetailDomain, OrderDetailId> {
  public static create(props: IOrderDetailDomain): OrderDetail {
    return new OrderDetail(props, OrderDetailId.create());
  }

  public static restore(
    props: IOrderDetailDomain,
    id: OrderDetailId,
  ): OrderDetail {
    return new OrderDetail(props, id);
  }

  public get sushi(): IOrderDetailDomain['sushi'] {
    return this.props.sushi;
  }

  public get withoutWasabi(): IOrderDetailDomain['withoutWasabi'] {
    return this.props.withoutWasabi;
  }

  public get count(): IOrderDetailDomain['count'] {
    return this.props.count;
  }
}
