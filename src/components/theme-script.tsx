"use client";

import { boringTheme, kanagawaTheme } from "~/config/themes";

export function ThemeScript() {
  const scriptContent = `
		(function () {
			let themeMode = null;
			let boringMode = null;

			try {
				themeMode = localStorage.getItem("theme");
				boringMode = JSON.parse(localStorage.getItem("boring-mode") ?? "true");
			} catch (error) {
				console.error(error);
			}


			if (!boringMode) {
				return;
			}

			const boringTheme = ${JSON.stringify(boringTheme)};
			const kanagawaTheme = ${JSON.stringify(kanagawaTheme)};

			if (!Array.from(["light", "dark"]).includes(themeMode)) {
				return;
			}

			const theme = boringMode
				? boringTheme[themeMode ?? "dark"]
				: kanagawaTheme[themeMode ?? "dark"];

			const variables = Object.entries(theme).map(([key, value]) => {
				return \`--\${key}: \${value};\`;
			});

			document.documentElement.style.cssText = variables.join("");
		})();
	`;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
      defer
    />
  );
}
