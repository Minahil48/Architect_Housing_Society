import React from 'react';

interface ButtonProps {
  value: string;
}

function Button({ value }: ButtonProps) {
  return (
    <button className="border-tertiary uppercase text-tertiary hover:bg-secondary bg-white hover:text-white rounded-full p-2 border-[2px] w-[170px] cursor-pointer">
      {value}
    </button>
  );
}

export default Button;
