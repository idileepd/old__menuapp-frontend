import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const TimeIcon: FC<SVGProps> = ({
  width = 21,
  height = 21,
  stroke = '#363B4E',
  cursor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill="none"
      width={width}
      height={height}
      cursor={cursor}
    >
      <path
        d="M10.5 5.25V10.5H14.4375M18.375 10.5C18.375 11.5342 18.1713 12.5582 17.7756 13.5136C17.3798 14.4691 16.7997 15.3372 16.0685 16.0685C15.3372 16.7997 14.4691 17.3798 13.5136 17.7756C12.5582 18.1713 11.5342 18.375 10.5 18.375C9.46584 18.375 8.44181 18.1713 7.48637 17.7756C6.53093 17.3798 5.6628 16.7997 4.93153 16.0685C4.20027 15.3372 3.6202 14.4691 3.22445 13.5136C2.82869 12.5582 2.625 11.5342 2.625 10.5C2.625 8.41142 3.45469 6.40838 4.93153 4.93153C6.40838 3.45469 8.41142 2.625 10.5 2.625C12.5886 2.625 14.5916 3.45469 16.0685 4.93153C17.5453 6.40838 18.375 8.41142 18.375 10.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
