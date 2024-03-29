import { IconPropsType } from "types/Icon";

const ProfileIcon = ({ cursor, onClick }: IconPropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={cursor}
      onClick={onClick}
    >
      <path
        id="Combined Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0036 11.25C9.3156 11.25 7.1286 9.063 7.1286 6.375C7.1286 3.687 9.3156 1.5 12.0036 1.5C14.6916 1.5 16.8786 3.687 16.8786 6.375C16.8786 9.063 14.6916 11.25 12.0036 11.25ZM12.0036 3C10.1428 3 8.6286 4.51425 8.6286 6.375C8.6286 8.23575 10.1428 9.75 12.0036 9.75C13.8644 9.75 15.3786 8.23575 15.3786 6.375C15.3786 4.51425 13.8644 3 12.0036 3ZM21.75 22.5H5.25C3.59625 22.5 2.25 21.1545 2.25 19.5V12.75H21.75V22.5ZM3.75 14.25V19.5C3.75 20.3272 4.42275 21 5.25 21H20.25V14.25H3.75Z"
        fill="#4C4C4C"
      ></path>
    </svg>
  );
};

export default ProfileIcon;
