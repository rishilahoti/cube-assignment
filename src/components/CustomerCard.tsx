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
      style={{ background: isSelected ? '#e0e0e0' : 'transparent', cursor: 'pointer' }}
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
