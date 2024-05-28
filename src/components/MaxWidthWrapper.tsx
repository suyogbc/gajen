import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="mx-auto px-2 sm:px-20 w-full max-w-screen-xl">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
