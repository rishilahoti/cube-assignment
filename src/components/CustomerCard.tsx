import React from 'react';
import { Customer } from '../types/Customer';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px', border: '1px solid #ddd' , background: isSelected ? '#e0e0e0' : 'transparent', cursor: 'pointer'}}
      className="customer-list-container"
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>{customer.details}</p>
    </div>
  );
};

export default CustomerCard;
