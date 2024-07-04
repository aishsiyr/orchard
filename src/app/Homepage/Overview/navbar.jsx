import React from "react";
import Link from "next/link";
import Switcher from "@/app/themeformodes/theme";

const Navbar = () => {
  return (
    <div className="max-w-4/5 mx-auto">
      <div className="flex items-center justify-between py-4">
        <div className="flex text-md items-center font-semibold">
          <Link href="/ExploreOrchards">
            <div className="mr-4">Explore</div>
          </Link>
         <Link href={"/Notes"}> <div className="mr-4 cursor-pointer">Notes</div></Link>
          {/* <div className="mr-4 cursor-pointer">Newsletter</div> */}
          <div className="mr-4 cursor-pointer">Blogs</div>
          <div className="mr-4">About</div>
          <div className="mr-4">Tags</div>
        </div>
        <div>
          <Switcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
