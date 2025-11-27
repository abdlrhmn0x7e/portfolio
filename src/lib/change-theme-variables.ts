import { boringTheme, rosePineTheme } from "~/config/themes";
import { type ThemeMode } from "./types";

export function changeThemeVariables(
  themeMode: ThemeMode,
  isBoringMode: boolean,
) {
  const theme = isBoringMode
    ? boringTheme[themeMode]
    : rosePineTheme[themeMode];

  const variables = Object.entries(theme).map(([key, value]) => {
    return `--${key}: ${value};`;
  });

  document.documentElement.style.cssText = variables.join("");
}
