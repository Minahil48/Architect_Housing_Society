import React from 'react';

interface AnnouncementCardProps {
  imageUrl: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  seeMoreLink: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  imageUrl,
  imageAlt,
  tag,
  title,
  description,
  date,
  seeMoreLink,
}) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white border-l-2 border-gray-200 shadow-sm rounded-l-2xl rounded-r-none p-4 sm:p-6 w-full max-w-lg sm:max-w-2xl lg:w-[800px] lg:mx-auto items-center sm:items-start gap-4">
      <div className="relative w-full sm:w-2/5 h-40 sm:h-auto rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="absolute bottom-2 left-2 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-md">
          {tag}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full sm:w-3/5 h-full">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-tertiary">{title}</h2>
          <p className="text-sm sm:text-base text-gray-700 mt-1">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm font-medium text-tertiary">
          <span>{date}</span>
          <a href={seeMoreLink} className="hover:underline text-tertiary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;