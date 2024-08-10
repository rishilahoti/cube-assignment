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
      style={{
        maxHeight: '400px',
        overflowY: 'auto',
        padding: '10px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        background: isSelected
          ? 'linear-gradient(to right, rgba(20, 30, 48, 0.9), rgba(36, 59, 85, 0.9))'
          : 'linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '0 8px 8px 0',
        transition: 'background 0.3s, border-color 0.3s',
      }}
      className={`customer-list-container ${isSelected ? 'selected' : ''}`}
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>{customer.details}</p>
    </div>
  );
};

export default CustomerCard;
