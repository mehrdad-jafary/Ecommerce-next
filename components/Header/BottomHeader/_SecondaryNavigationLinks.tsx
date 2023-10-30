import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import UlNavStyled from "@/components/MuiStyled/UlNavStyled";
import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

import ThemeToggleButton from "@/components/ThemeToggleButton";

function SecondaryNavigationLinks() {
	return (
		<>
			<UlNavStyled
				sx={(theme) => ({
					[theme.breakpoints.down("md")]: {
						justifyContent: "space-around",
					},
				})}>
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
				</ListItem>
			</UlNavStyled>
		</>
	);
}

export default SecondaryNavigationLinks;
