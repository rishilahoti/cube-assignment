'use client'
import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerDetails from '../components/CustomerDetail';
import { Customer } from '../types/Customer';

const Home: React.FC = () => {
  const [customers] = useState<Customer[]>([
    { id: 1, name: 'Customer 01', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 2, name: 'Customer 02', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 3, name: 'Customer 03', title: 'hello', address: 'INDIA', details: 'this is for cube assignmentr.' },
    { id: 4, name: 'Customer 04', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 5, name: 'Customer 01', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 6, name: 'Customer 02', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id:7, name: 'Customer 03', title: 'hello', address: 'INDIA', details: 'this is for cube assignmentr.' },
    { id: 8, name: 'Customer 04', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 9, name: 'Customer 01', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 10, name: 'Customer 02', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
    { id: 11, name: 'Customer 03', title: 'hello', address: 'INDIA', details: 'this is for cube assignmentr.' },
    { id: 12, name: 'Customer 04', title: 'hello', address: 'INDIA', details: 'this is for cube assignment' },
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
