import { useContext } from "react";

import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { ColorModeContext } from "@/theme";
import NavigationLinks from "../NavigationLinks";

const ulStyles = {
	display: "flex",
	gap: "15px",
	listStyle: "none",
	padding: "0",
};

function _BottomNav() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	return (
		<Box
			component='nav'
			sx={{ py: "15px", display: "flex", justifyContent: "space-between" }}>
			<NavigationLinks />
			<MenuList component='ul' sx={ulStyles}>
				<MenuItem
					disableGutters
					disableRipple
					dense={true}
					sx={{
						"&.MuiMenuItem-root:hover": {
							backgroundColor: "rgba(0,0,0,0)",
						},
					}}>
					<ListItemText>خرید اقساطی</ListItemText>
				</MenuItem>
				<MenuItem
					disableGutters
					disableRipple
					dense={true}
					sx={{
						"&.MuiMenuItem-root:hover": {
							backgroundColor: "rgba(0,0,0,0)",
						},
					}}>
					<ListItemText>فروش ویژه</ListItemText>
				</MenuItem>
				<MenuItem
					disableGutters
					disableRipple
					dense={true}
					sx={{
						"&.MuiMenuItem-root:hover": {
							backgroundColor: "rgba(0,0,0,0)",
						},
					}}>
					<ListItemText>دسته دوم</ListItemText>
				</MenuItem>
				<MenuItem
					disableGutters
					disableRipple
					dense={true}
					sx={{
						"&.MuiMenuItem-root:hover": {
							backgroundColor: "transparent",
						},
					}}>
					<ListItemIcon onClick={colorMode.toggleColorMode}>
						{theme.palette.mode === "light" ? (
							<LightModeIcon color='warning' fontSize='small' />
						) : (
							<DarkModeIcon fontSize='small' />
						)}
					</ListItemIcon>
				</MenuItem>
			</MenuList>
		</Box>
	);
}

export default _BottomNav;
