import React from 'react';
import Image from 'next/image';

interface AnnouncementCardProps {
  imageUrl: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  orientation?: 'horizontal' | 'vertical';
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  imageUrl,
  imageAlt,
  tag,
  title,
  description,
  date,
  orientation = 'horizontal',
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={`bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:p-6 w-full max-w-6xl lg:mx-auto items-center sm:items-start gap-4 ${isHorizontal
          ? 'flex flex-col sm:flex-row sm:max-w-2xl lg:w-[800px] rounded-l-2xl lg:rounded-r-none rounded-r-2xl'
          : 'flex flex-col lg:w-[450px] h-[520px] rounded-2xl'
        }`}
    >
      <div
        className={`relative rounded-xl overflow-hidden ${isHorizontal ? 'w-full sm:w-2/5 h-30 md:h-auto sm:h-auto' : 'w-full h-66'
          }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={600}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="absolute bottom-0 left-0 bg-secondary text-amber-100 text-xs font-semibold px-4 py-1">
          {tag}
        </div>
      </div>
      <div
        className={`flex flex-col ${isHorizontal ? 'sm:w-3/5' : 'w-full flex-grow justify-between'
          }`}
      >
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-tertiary">{title}</h2>
          <p className="text-sm sm:text-base text-gray-700 mt-1">{description}</p>
        </div>
        <div className={`flex justify-between font-bold text-sm text-tertiary ${isHorizontal ? '' : 'mt-auto'}`}>
          <span>{date}</span>
          <a href={"/anouncements"} className="hover:underline underline text-tertiary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;