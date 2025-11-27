"use client";

import { boringTheme, rosePineTheme } from "~/config/themes";

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
			const rosepineTheme = ${JSON.stringify(rosePineTheme)};

			if (!Array.from(["light", "dark"]).includes(themeMode)) {
				return;
			}

			const theme = boringMode
				? boringTheme[themeMode ?? "dark"]
				: rosepineTheme[themeMode ?? "dark"];

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
    />
  );
}
