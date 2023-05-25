import Box from "@mui/material/Box";

import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";

import { NextLinkRound } from "@/components/MuiStyled/NextLinkStyled";
import BadgeStyled from "@/components/MuiStyled/BadgeStyled";

function UserProfileCartButton() {
	return (
		<Box sx={{ display: "flex", gap: "10px" }}>
			<NextLinkRound href='/cart'>
				<BadgeStyled badgeContent={1} color='warning'>
					<ShoppingCartOutlined fontSize='small' />
				</BadgeStyled>
			</NextLinkRound>
			<NextLinkRound href='/profile'>
				<PersonOutlineOutlined fontSize='small' />
			</NextLinkRound>
		</Box>
	);
}

export default UserProfileCartButton;
