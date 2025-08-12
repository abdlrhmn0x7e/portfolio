"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { changeThemeVariables } from "~/lib/change-theme-variables";
import { themeModeSchema } from "~/lib/types";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [boringMode, setBoringMode] = useLocalStorage("boring-mode", false);

  const handleBoringMode = (isBoringMode: boolean) => {
    setBoringMode(isBoringMode);

    const parsedThemeMode = themeModeSchema.safeParse(theme);
    if (!parsedThemeMode.success) {
      return;
    }

    changeThemeVariables(parsedThemeMode.data, isBoringMode);
  };

  React.useEffect(() => {
    const parsedThemeMode = themeModeSchema.safeParse(theme);
    if (!parsedThemeMode.success) {
      return;
    }

    changeThemeVariables(parsedThemeMode.data, boringMode);
  }, [theme, boringMode]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <div className="flex items-center gap-2 p-2">
          <Switch
            id="boring-mode"
            checked={boringMode}
            onCheckedChange={handleBoringMode}
          />
          <Label htmlFor="boring-mode">Boring Mode</Label>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
