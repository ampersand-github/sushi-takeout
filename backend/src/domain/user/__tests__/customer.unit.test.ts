import { Customer } from '../customer';
import { CustomerId } from '../customer-id';
import { ICustomerDomain } from '../__interface__/customer-domain-interface';

const UserProps: ICustomerDomain = {
  name: '名前',
  telephone: 9011112222, // todo telephone型作る
};

describe('User', () => {
  it('createできる', () => {
    expect(Customer.create(UserProps)).toEqual(expect.any(Customer));
  });

  it('restoreできる', () => {
    const userId: CustomerId = CustomerId.restore('test-id');
    expect(Customer.restore(UserProps, userId)).toEqual(expect.any(Customer));
    expect(Customer.restore(UserProps, userId).id.equals(userId)).toBe(true);
  });
});
