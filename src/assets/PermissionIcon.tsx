import { SVGProps } from 'react';

export function PermissionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.125 7.5C11.125 5.3625 12.8625 3.625 15 3.625C17.1375 3.625 18.875 5.3625 18.875 7.5V10H13.05L15.55 12.5H22.5V19.45L25 21.95V12.5C25 11.125 23.875 10 22.5 10H21.25V7.5C21.25 4.05 18.45 1.25 15 1.25C12.1 1.25 9.675 3.2375 8.975 5.925L11.125 8.075V7.5ZM5.5125 6.0125L3.75 7.775L6.3 10.325C5.525 10.75 5 11.5625 5 12.5V25C5 26.375 6.125 27.5 7.5 27.5H23.475L24.725 28.75L26.4875 26.9875L5.5125 6.0125ZM7.5 25V12.5H8.475L20.975 25H7.5Z"
        fill="#F6F4F4"
      />
    </svg>
  );
}
