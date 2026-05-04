"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src="/icons/sun.png"
            alt="Light mode"
            width={20}
            height={20}
            className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
          />
          <Image
            src="/icons/moon.png"
            alt="Dark mode"
            width={20}
            height={20}
            className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <div className="border-b light-border-2 w-full" />
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <div className="border-b light-border-2 w-full" />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
