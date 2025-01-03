import Navbar from "@/components/Nabar";
import Resume from "@/components/resume/Resume";
import React from "react";

function page() {
  return (
    <div>
      <Navbar activeLink="Resume" />
      <div className="">
        <Resume />
      </div>
    </div>
  );
}

export default page;
