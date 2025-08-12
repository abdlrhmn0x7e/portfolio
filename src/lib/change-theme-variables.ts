import { boringTheme, kanagawaTheme } from "~/config/themes";
import { type ThemeMode } from "./types";

export function changeThemeVariables(
  themeMode: ThemeMode,
  isBoringMode: boolean,
) {
  const theme = isBoringMode
    ? boringTheme[themeMode]
    : kanagawaTheme[themeMode];

  const variables = Object.entries(theme).map(([key, value]) => {
    return `--${key}: ${value};`;
  });

  document.documentElement.style.cssText = variables.join("");
}
