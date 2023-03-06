import { PropsWithChildren, createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import localFont from "next/font/local";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const IRANSansWeb = localFont({
	src: [
		{
			path: "../fonts/IRANSansWeb_Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../fonts/IRANSansWeb_Medium.woff2",
			weight: "500",
			style: "normal",
		},
	],
});

function MyThemeProvider(props: PropsWithChildren) {
	const [mode, setMode] = useState<"light" | "dark">("dark");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				direction: "rtl",
				palette: {
					mode: mode,
					primary: {
						main: "#556cd6",
					},
					secondary: {
						main: "#19857b",
					},
					error: {
						main: red.A400,
					},
				},
				typography: {
					fontFamily: IRANSansWeb.style.fontFamily,
					h1: { fontWeight: 300 },
					h2: { fontWeight: 300 },
					h3: { fontWeight: 300 },
					h4: { fontWeight: 300 },
					h5: { fontWeight: 300 },
					h6: { fontWeight: 300 },
					body1: { fontWeight: 300 },
				},
			}),
		[mode]
	);
	const { children } = props;
	return (
		<>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	);
}

export default MyThemeProvider;
