import { useRef, useEffect } from "react";
import ListItemText from "@mui/material/ListItemText";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/material";

import MegaMenuContents from "./_MegaMenuContents";
import useDropDownMenu from "@/hooks/useDropDownMenu";

function MegaMenu() {
	const megaMenuAnchorRef = useRef<HTMLElement | null>(null);
	const { anchorEl, open, handleOpen, handleClose } = useDropDownMenu(megaMenuAnchorRef);
	useEffect(() => {
		megaMenuAnchorRef.current = document.querySelector("header");
		return () => {
			megaMenuAnchorRef.current = null;
		};
	}, []);

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
				<ListItemText>دسته بندی</ListItemText>
				<ListItemIcon sx={{ justifyContent: "center", minWidth: "36px" }}>
					<KeyboardArrowDownIcon color='primary' fontSize='small' />
				</ListItemIcon>
			</ListItemButton>
			<Menu
				id='basic-menu'
				variant='menu'
				sx={{
					".MuiMenu-paper": {
						boxShadow: 1,
					},
					".MuiMenu-list": {
						padding: 0,
					},
				}}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				open={open}
				onClose={handleClose}>
				<MegaMenuContents />
			</Menu>
		</>
	);
}

export default MegaMenu;
