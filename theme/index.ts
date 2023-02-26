import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import localFont from "next/font/local";

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

const theme = createTheme({
	direction: "rtl",
	palette: {
		mode: "dark",
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
});

export default theme;
