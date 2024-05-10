import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
  classname?: string;
};

export const Sidebar = ({ classname }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full left-0 top-0 px-4 border-2 flex-col lg:w-[256px] lg:fixed",
        classname
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 items-center flex gap-x-3">
          <Image src="/butterfly.png" alt="butterfly" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
