import React from 'react';

interface ButtonProps {
  value: string;
  icon?: React.ReactNode;
}

function Button({ value, icon }: ButtonProps) {
  return (
    <div className="w-full flex lg:justify-start justify-center px-1 sm:px-0">
      <button className="flex border-tertiary text-tertiary hover:bg-secondary bg-white hover:text-white rounded-full
                         py-1 px-3
                         text-[0.6rem]
                         border-[3px] cursor-pointer items-center justify-center gap-0.5 whitespace-nowrap
                         sm:py-2 sm:px-4 sm:text-base sm:gap-2
                         lg:uppercase lg:text-xl lg:py-4 lg:px-6
                         ">
        <span className="flex items-center gap-0.5 sm:gap-2">
          {value}
          {icon && <span className='text-[0.6rem] sm:text-base'>{icon}</span>}
        </span>
      </button>
    </div>
  );
}

export default Button;