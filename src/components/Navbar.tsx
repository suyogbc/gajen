import React from "react";
import { ModeToggle } from "./ModeToggle";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-2">
        <ModeToggle />
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
