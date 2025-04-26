import React, { ReactNode } from "react";

interface ParalelasLayoutProps {
  children: ReactNode;
  brasil: ReactNode;
  japao: ReactNode;
  usa: ReactNode;
}

export default function Layout(props: ParalelasLayoutProps) {
  return (
    <div className="flex flex-col gap-10">
      <div>{props.children}</div>
      <div className="grid grid-cols-3 gap-5">
        {props.brasil}
        {props.japao}
        {props.usa}
      </div>
    </div>
  );
}
