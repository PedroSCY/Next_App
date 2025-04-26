/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function Layout(props: any) {
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
