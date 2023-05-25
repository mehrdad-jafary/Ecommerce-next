import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import UlNavStyled from "@/components/MuiStyled/UlNavStyled";
import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

import LightModeIcon from "@mui/icons-material/LightMode";
import ThemeToggleButton from "@/components/ThemeToggleButton";

function SecondaryNavigationLinks() {
	return (
		<>
			<UlNavStyled>
				<ListItem disableGutters dense={true}>
					<ListItemText>
						<NextLinkStyled href='/'>خرید اقساطی</NextLinkStyled>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>
						<NextLinkStyled href='/'>فروش ویژه</NextLinkStyled>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>
						<NextLinkStyled href='/'>دسته دوم</NextLinkStyled>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ThemeToggleButton />
					{/* <ListItemIcon sx={{ cursor: "pointer" }} onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "light" ? (
						<LightModeIcon color='warning' fontSize='small' />
					) : (
						<DarkModeIcon fontSize='small' />
					)}
				</ListItemIcon> */}
				</ListItem>
			</UlNavStyled>
		</>
	);
}

export default SecondaryNavigationLinks;
