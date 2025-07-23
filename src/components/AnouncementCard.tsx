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
      className={`bg-white border-l-2 border-gray-200 shadow-sm p-4 sm:p-6 w-full max-w-lg lg:mx-auto items-center sm:items-start gap-4 ${
        isHorizontal
          ? 'flex flex-col sm:flex-row sm:max-w-2xl lg:w-[800px] rounded-l-2xl lg:rounded-r-none rounded-r-2xl'
          : 'flex flex-col max-w-sm lg:w-[800px] h-[420px] rounded-2xl'
      }`}
    >
      <div
        className={`relative rounded-xl overflow-hidden ${
          isHorizontal ? 'w-full sm:w-2/5 h-40 sm:h-auto' : 'w-full h-96'
        }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={400}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="absolute bottom-2 left-2 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-md">
          {tag}
        </div>
      </div>
      <div
        className={`flex flex-col justify-between w-full h-full ${
          isHorizontal ? 'sm:w-3/5' : ''
        }`}
      >
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-tertiary">{title}</h2>
          <p className="text-sm sm:text-base text-gray-700 mt-1">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm font-medium text-tertiary">
          <span>{date}</span>
          <a href={"/anouncements"} className="hover:underline text-tertiary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;