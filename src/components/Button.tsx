import React from 'react';

interface ButtonProps {
  value: string;
}

function Button({ value }: ButtonProps) {
  return (
    <div className="px-4 sm:px-0 w-full flex justify-center sm:justify-start">
      <button className="border-tertiary text-tertiary hover:bg-secondary bg-white hover:text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 border-[2px] w-full sm:w-[170px] cursor-pointer text-xs sm:text-base">
        {value}
      </button>
    </div>
  );
}

export default Button;
