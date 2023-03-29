import { useContext } from "react";

import Header from "@/components/Header";

import { useTheme } from "@mui/material/styles";

import { ColorModeContext } from "@/theme";
export default function Home() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	return <Header />;
}
