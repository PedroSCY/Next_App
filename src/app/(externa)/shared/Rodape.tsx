import Logo from "@/app/shared/Logo";
import React from "react";
import Links from "./Links";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Rodape() {
  return (
    <footer className=" flex justify-center border-t border-zinc-700 py-7">
      <div className="flex flex-col w-[1100px]">
        <div className="flex items-start gap-20">
          <Logo/>
          <Links/>
        </div>
        <div className="flex justify-between items-center mt-5">
           <span className="text-sm text-zinc-400">© {new Date().getFullYear()} SCY.DEV</span>
           <div className="flex gap-2 text-zinc-400">
            <a href="https://github.com/PedroSCY" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub stroke={1} />
            </a>
            <span className="text-zinc-700">|</span>
            <a href="https://linkedin.com/in/scy-pedrolucas" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin stroke={1} />
            </a>
           </div>
        </div>
      </div>
    </footer>
  );
}
