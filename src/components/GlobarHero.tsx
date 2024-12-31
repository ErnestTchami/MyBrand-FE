import React from "react";
import Breadcrumb from "./aboutPage/Breadcrumb";
interface GlobType {
  pageName: string;
  HeaderDescription: string;
  BreadcrumbName: string;
}
function GlobarHero({ BreadcrumbName, HeaderDescription, pageName }: GlobType) {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="container flex flex-col items-center justify-center   pt-28 pb-16">
        <p className="text-4xl font-bold">{pageName}</p>
        <p className="text-center text-xs md:text-sm lg:text-[13px] text-white mt-3 px-20">
          {HeaderDescription}
        </p>
      </div>

      <Breadcrumb activePath={BreadcrumbName} />
    </div>
  );
}

export default GlobarHero;
