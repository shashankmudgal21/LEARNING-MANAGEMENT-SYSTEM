"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
const NavbarRoutes = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isTeacherMode = pathName?.startsWith("/teacher");
  const isPlayerMode = pathName?.includes("/chapter");
  return (
    <div className="flex gap-2 ml-auto">
      {isTeacherMode || isPlayerMode ? (
        <Link href={"/"}>
          <Button size={"sm"} variant={"ghost"}>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Button size={"sm"} variant={"ghost"}>
          <Link href={"/teacher/courses"}>Teacher Mode</Link>
        </Button>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
