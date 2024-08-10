'use client';

import React from 'react';
import { Customer } from '../types/Customer';
import CustomerCard from './CustomerCard';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div>
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onSelectCustomer(customer.id)}
        />
      ))}
    </div>
  );
};

export default CustomerList;

