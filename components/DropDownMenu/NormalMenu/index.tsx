import { PropsWithChildren } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

import useDropDownMenu from "@/hooks/useDropDownMenu";

function DropDownMenu(props: {
	text?: string;
	menuItems: { name: string; slug: string }[];
	icon?: "ThreeDotsHorizontal" | "ThreeDotsVertical" | "KeyboardArrowDown";
}) {
	const { text, menuItems, icon } = props;
	const { anchorEl, open, handleOpen, handleClose } = useDropDownMenu();
	return (
		<>
			<ListItemButton
				sx={{ "&:hover": { backgroundColor: "transparent" }, padding: "0" }}
				component='button'
				disableRipple={true}
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleOpen}>
				<ListItemText sx={{ pointerEvents: "none" }}>{text}</ListItemText>
				<ListItemIcon
					sx={{ justifyContent: "center", minWidth: "36px", pointerEvents: "none" }}>
					{icon === "ThreeDotsHorizontal" ? (
						<MoreHorizIcon color='primary' />
					) : icon === "ThreeDotsVertical" ? (
						<MoreVertIcon color='primary' fontSize='small' />
					) : (
						<KeyboardArrowDownIcon color='primary' fontSize='small' />
					)}
				</ListItemIcon>
			</ListItemButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				{menuItems.map((item, index) => {
					return (
						<MenuItem key={item.name + index}>
							<NextLinkStyled sx={{ fontWeight: 200 }} href={`/${item.slug}`}>
								{item.name}
							</NextLinkStyled>
						</MenuItem>
					);
				})}
			</Menu>
		</>
	);
}

export default DropDownMenu;
