import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className, ...rest }: ContainerProps) => {
  const tailwindMerge = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
  return (
    <div
      className={`${twMerge(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
        className
      )}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
