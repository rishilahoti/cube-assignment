'use client'
import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerDetails from '../components/CustomerDetail';
import { Customer } from '../types/Customer';

const Home: React.FC = () => {
  const [customers] = useState<Customer[]>([
    { id: 1, name: 'Customer 01', title: 'CEO', address: '123 Street, City', details: 'Lorem ipsum dolor sit amet.' },
    { id: 2, name: 'Customer 02', title: 'CTO', address: '456 Avenue, City', details: 'Consectetur adipiscing elit.' },
    { id: 3, name: 'Customer 03', title: 'CFO', address: '789 Road, City', details: 'Sed do eiusmod tempor.' },
    { id: 4, name: 'Customer 04', title: 'COO', address: '101 Hill, City', details: 'Incididunt ut labore et dolore.' },
    // Add more customers as needed
  ]);

  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="container">
      <div className="customer-list">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
      </div>
      <div className="customer-details">
        <CustomerDetails customer={selectedCustomer || null} />
      </div>
    </div>
  );
};

export default Home;
