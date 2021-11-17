import { Customer } from 'src/domain/customer/customer';
import { OrderDetail } from '../orderDetail';

export interface IOrderDomain {
  customer: Customer;
  orderDetail: OrderDetail[];
}
