import React from 'react';
import { Customer } from '../types/Customer';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div className="customer-details" style={{color: '#fff;'}}><h1>Select a customer to see details.</h1></div>;
  }

  return (
    <>
    <div className='customer-details-1'>
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>{customer.details}</p>
    </div>
    <div>
      <PhotoGrid customerId={customer.id} />
    </div>
    </>
  );
};

export default CustomerDetails;
