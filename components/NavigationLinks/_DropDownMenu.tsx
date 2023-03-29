import { PropsWithChildren, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NextLinkStyled from "../MuiStyled/NextLinkStyled";
import { SxProps } from "@mui/material";

interface IDropDownMenuProps {
	sxProps?: SxProps;
	text?: string;
	menuItems: { name: string; slug: string }[];
}

function DropDownMenu({
	sxProps,
	text,
	menuItems,
	children,
}: PropsWithChildren<IDropDownMenuProps>) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<ListItemButton
				sx={sxProps}
				component='button'
				disableRipple={true}
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}>
				<ListItemText sx={{ pointerEvents: "none" }}>{text}</ListItemText>
				<ListItemIcon
					sx={{ justifyContent: "center", minWidth: "36px", pointerEvents: "none" }}>
					{children}
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
