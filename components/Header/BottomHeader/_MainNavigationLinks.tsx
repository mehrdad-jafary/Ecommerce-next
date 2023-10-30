import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";
import UlNavStyled from "@/components//MuiStyled/UlNavStyled";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import { MegaMenu, NormalMenu } from "@/components/DropDownMenu";

const menuItemsArr = [
	{ name: "خرید اقساطی", slug: "installment" },
	{ name: "تماس باما", slug: "contact-us" },
	{ name: "سوالات متداول", slug: "faq" },
	{ name: "درباره ما", slug: "about-us" },
];

function MainNavigationLinks() {
	return (
		<UlNavStyled
			sx={(theme) => ({
				[theme.breakpoints.down("md")]: {
					display: "none",
				},
			})}>
			<ListItem dense={true}>
				<MegaMenu />
			</ListItem>
			<ListItem>
				<ListItemText>
					<NextLinkStyled sx={{ textDecoration: "none" }} href='/'>
						چرا لیون کامپیوتر
					</NextLinkStyled>
				</ListItemText>
			</ListItem>
			<ListItem>
				<ListItemText>
					<NextLinkStyled sx={{ textDecoration: "none" }} href='/'>
						راهنمای خرید
					</NextLinkStyled>
				</ListItemText>
			</ListItem>
			<ListItem>
				<ListItemText>
					<NextLinkStyled sx={{ textDecoration: "none" }} href='/'>
						ایزی پی سی
					</NextLinkStyled>
				</ListItemText>
			</ListItem>
			<ListItem>
				<ListItemText>
					<NextLinkStyled sx={{ textDecoration: "none" }} href='/'>
						شرایط گارانتی
					</NextLinkStyled>
				</ListItemText>
			</ListItem>
			<ListItem>
				<NormalMenu text='سایر' menuItems={menuItemsArr} icon='ThreeDotsHorizontal' />
			</ListItem>
		</UlNavStyled>
	);
}

export default MainNavigationLinks;
