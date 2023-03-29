import NextLinkStyled from "../MuiStyled/NextLinkStyled";
import UlNavStyled from "../MuiStyled/UlNavStyled";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DropDownMenu from "./_DropDownMenu";

const listItemButtonSX = { "&:hover": { backgroundColor: "transparent" }, padding: "0" };
const menuItemsArr = [
	{ name: "خرید اقساطی", slug: "installment" },
	{ name: "تماس باما", slug: "contact-us" },
	{ name: "سوالات متداول", slug: "faq" },
	{ name: "درباره ما", slug: "about-us" },
];
function NavigationLinks() {
	return (
		<UlNavStyled>
			<ListItem dense={true}>
				<ListItemButton sx={listItemButtonSX} component='button' disableRipple={true}>
					<ListItemText>دسته بندی</ListItemText>
					<ListItemIcon sx={{ justifyContent: "center", minWidth: "36px" }}>
						<KeyboardArrowDownIcon color='primary' fontSize='small' />
					</ListItemIcon>
				</ListItemButton>
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
				<DropDownMenu sxProps={listItemButtonSX} text='سایر' menuItems={menuItemsArr}>
					<MoreHorizIcon color='primary' />
				</DropDownMenu>
			</ListItem>
		</UlNavStyled>
	);
}

export default NavigationLinks;
