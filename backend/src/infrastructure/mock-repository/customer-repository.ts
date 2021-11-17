import { Injectable } from '@nestjs/common/decorators/core';
import { Customer } from 'src/domain/user/customer';
import { CustomerId } from 'src/domain/user/customer-id';
import { ICustomerRepository } from 'src/domain/user/__interface__/customer-repository-interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()

/* eslint-disable */
export class CustomerRepository implements ICustomerRepository {
  public constructor(readonly prismaService: PrismaService) {}

  delete(user: Customer): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<Customer[]> {
    return Promise.resolve([]);
  }

  findById(userId: CustomerId): Promise<Customer | null> {
    return Promise.resolve(undefined);
  }

  register(user: Customer): Promise<void> {
    return Promise.resolve(undefined);
  }

  update(user: Customer): Promise<void> {
    return Promise.resolve(undefined);
  }
}
