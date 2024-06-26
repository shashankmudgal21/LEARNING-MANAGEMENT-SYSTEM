"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SideBarItems {
  icon: LucideIcon;
  href: string;
  label: string;
}
const SidebarItem = ({ icon: Icon, href, label }: SideBarItems) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname.startsWith(`/${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 pl-6 text-slate-500 hover:text-slate-600 hover:bg-slate-200/20 transition-all font-[500] text-sm ",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:text-sky-700 hover:bg-sky-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto  opacity-0 border-2 h-full justify-end border-sky-700 transition-all",
          isActive && 'opacity-100'
        )}
      >
        {" "}
      </div>
    </button>
  );
};

export default SidebarItem;
