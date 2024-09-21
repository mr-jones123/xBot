import { forwardRef } from "react";

const Input = forwardRef(({ text, className, ...props }, ref) => {
  return (
    <div className="flex justify-center bg-transparent border px-3 border-white rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white">
      <input
        placeholder={text}
        className={`bg-transparent outline-none text-sm placeholder:text-sm ${className}`}
        ref={ref}
        {...props}
        
      />
      <button type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-6 hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>

      </button>
    </div>
  );
});

export default Input;
