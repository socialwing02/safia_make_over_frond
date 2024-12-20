import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
};

export default function Button({
  children,
  className,
  type = "button",
  onClick,
}: Props) {
  const defaultClass = "bg-black text-white rounded-xl py-2 px-3 text-lg ";

  const useClass = className ? `${defaultClass} ${className}` : defaultClass;

  return (
    <button className={useClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
