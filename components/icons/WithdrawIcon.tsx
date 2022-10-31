import { Icon } from '@chakra-ui/react';
import React from 'react';

const WithdrawIcon: React.FC<{ color?: string; boxSize?: number }> = (props) => {
  const { boxSize = 18, color = '#1E2026' } = props;

  return (
    <Icon boxSize={boxSize} color={color} viewBox='0 0 15 15'>
      <path
        d='M7.5 6.16663C7.5 5.89048 7.72386 5.66663 8 5.66663C8.27614 5.66663 8.5 5.89048 8.5 6.16663V13.3333C8.5 13.6094 8.27614 13.8333 8 13.8333C7.72386 13.8333 7.5 13.6094 7.5 13.3333L7.5 6.16663Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.31344 10.9798C5.5087 10.7846 5.82528 10.7846 6.02055 10.9798L8.00033 12.9596L9.9801 10.9798C10.1754 10.7846 10.4919 10.7846 10.6872 10.9798C10.8825 11.1751 10.8825 11.4917 10.6872 11.6869L8.35388 14.0203C8.15862 14.2155 7.84203 14.2155 7.64677 14.0203L5.31344 11.6869C5.11818 11.4917 5.11818 11.1751 5.31344 10.9798Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.16699 3.66667C2.16699 3.02233 2.68933 2.5 3.33366 2.5L12.667 2.5C13.3113 2.5 13.8337 3.02233 13.8337 3.66667V8.66667C13.8337 9.311 13.3113 9.83333 12.667 9.83333H10.0003C9.72418 9.83333 9.50033 9.60948 9.50033 9.33333C9.50033 9.05719 9.72418 8.83333 10.0003 8.83333H12.667C12.759 8.83333 12.8337 8.75871 12.8337 8.66667V3.66667C12.8337 3.57462 12.759 3.5 12.667 3.5L3.33366 3.5C3.24161 3.5 3.16699 3.57462 3.16699 3.66667L3.16699 8.66667C3.16699 8.75871 3.24161 8.83333 3.33366 8.83333H6.00033C6.27647 8.83333 6.50033 9.05719 6.50033 9.33333C6.50033 9.60948 6.27647 9.83333 6.00033 9.83333H3.33366C2.68933 9.83333 2.16699 9.311 2.16699 8.66667L2.16699 3.66667Z'
        fill='currentColor'
      />
    </Icon>
  );
};

export default WithdrawIcon;
