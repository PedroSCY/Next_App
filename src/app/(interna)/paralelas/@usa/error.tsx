"use client";

import { IconMoodSadSquint } from "@tabler/icons-react";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center">
        <IconMoodSadSquint size={40}/>
      <span className="text-sm">Ops... ocorreu um erro!</span>
    </div>
  );
}
