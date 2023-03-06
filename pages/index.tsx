import { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@/theme";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Home() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "secondary.main",
					color: "text.primary",
					borderRadius: 1,
					p: 3,
				}}>
				{theme.palette.mode} mode
				<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
					{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Box>
		</>
	);
}
