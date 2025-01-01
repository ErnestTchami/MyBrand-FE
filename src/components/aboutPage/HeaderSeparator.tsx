import React from "react";

interface TypeComponents {
  Header: string;
  smallHeader?: string;
  className?: string;
  smallHeaderClassName?: string;
  headerClassName?: string;
  separatorColor?: string;
  separatorWidth?: string;
  separatorPosition?: string;
  children?: React.ReactNode;
}

function HeaderSeparator({
  Header,
  smallHeader,
  className = "",
  smallHeaderClassName = "text-gray-400 relative mb-0 p-0 uppercase",
  headerClassName = "text-3xl font-bold uppercase",
  separatorColor = "bg-green-500",
  separatorWidth = "w-32 h-[2px]",
  separatorPosition = "absolute bottom-2 left-16",
  children,
}: TypeComponents) {
  return (
    <div className={`mb-8 container ${className}`}>
      <div className="relative">
        {smallHeader && (
          <div className={`${smallHeaderClassName}`}>{smallHeader}</div>
        )}
        <div
          className={`${separatorPosition} ${separatorWidth} ${separatorColor}`}
        ></div>
      </div>
      <h2 className={`${headerClassName}`}>{Header}</h2>
      {children}
    </div>
  );
}

export default HeaderSeparator;
