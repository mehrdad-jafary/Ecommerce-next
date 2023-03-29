import NextLinkStyled, { NextLinkRound } from "../MuiStyled/NextLinkStyled";
import Image from "next/image";

import logoSvg from "../../public/logo.svg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FluidContainer from "../layout/FluidContainer";
import { PropsWithChildren } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import SearchInput from "../MuiStyled/SeacrchInputStyled";
import BadgeStyled from "../MuiStyled/BadgeStyled";
import BottomNav from "./_‌BottomNav";

function Header({ children }: PropsWithChildren) {
	return (
		<Box component='header'>
			<FluidContainer>
				{/* Top Navigation */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "nowrap",
						gap: "30px",
						py: "15px",
					}}>
					{/* Logo Linked TO Home Page */}
					<NextLinkStyled href='/'>
						<Image src={logoSvg} alt='نشان شرک ت' width={160} priority={true} />
					</NextLinkStyled>
					{/* Search Input Field */}
					<SearchInput
						type='search'
						id='search'
						name='search'
						placeholder='به دنبال چه چیزی میگردید؟'
						fullWidth
						size='medium'
						autoComplete='off'
						endAdornment={
							<InputAdornment position='start'>
								<SearchIcon sx={{ color: "primary.main" }} />
							</InputAdornment>
						}
					/>
					{/* Cart & User Profile Buttons */}
					<Box sx={{ display: "flex", gap: "10px" }}>
						<NextLinkRound href='/cart'>
							<BadgeStyled badgeContent={1} color='warning'>
								<ShoppingCartOutlined fontSize='small' />
							</BadgeStyled>
						</NextLinkRound>
						<NextLinkRound href='/profile'>
							<IconButton size='medium'>
								<PersonOutlineOutlined fontSize='small' />
							</IconButton>
						</NextLinkRound>
					</Box>
				</Box>
				{/* Bottom Navigation */}
				<BottomNav />
			</FluidContainer>
		</Box>
	);
}

export default Header;
