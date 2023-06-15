import { IconPropsType } from "types/Icon";

const ColumnIcon = ({ fill }: IconPropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 1.5V19.5C3.75 21.1575 5.0925 22.5 6.75 22.5H20.25V1.5H3.75ZM15.75 3V8.205L14.25 6.9825L12.75 8.205V3H15.75ZM18.75 21H6.75C5.925 21 5.25 20.325 5.25 19.5V3H11.25V9C11.25 9.4575 11.52 9.8625 11.9475 10.0425C12.3525 10.215 12.8175 10.125 13.14 9.8325L14.2575 8.925L15.375 9.8325C15.585 10.0275 15.855 10.1325 16.1325 10.1325C16.275 10.1325 16.425 10.1025 16.5675 10.05C16.9875 9.8775 17.265 9.465 17.265 9.0075V3H18.765V21H18.75Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default ColumnIcon;
