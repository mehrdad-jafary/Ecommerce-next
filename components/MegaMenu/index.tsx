import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { Typography } from "@mui/material";

function MegaMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div>
			<Typography
				sx={{ color: "#fff", cursor: "pointer" }}
				aria-owns={open ? "mouse-over-popover" : undefined}
				aria-haspopup='true'
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}>
				دسته بندی
			</Typography>
			<Popover
				sx={{
					pointerEvents: "none",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				anchorEl={anchorEl}
				id='mouse-over-popover'
				open={open}
				disableRestoreFocus
				onClose={handlePopoverClose}>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Popover>
		</div>
	);
}

export default MegaMenu;
