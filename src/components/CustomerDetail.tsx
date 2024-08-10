import React from 'react';
import { Customer } from '../types/Customer';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div className="customer-details">Select a customer to see details</div>;
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>{customer.details}</p>
      <PhotoGrid customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
