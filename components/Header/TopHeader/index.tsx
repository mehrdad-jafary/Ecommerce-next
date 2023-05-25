import Image from "next/image";
import logoSvg from "@/public/logo.svg";

import Box from "@mui/material/Box";

import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

import UserProfileCartButton from "./_UserProfileCartButton";
import MainSearchBar from "./_MainSearchBar";

function TopHeader() {
	return (
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
				<Image src={logoSvg} alt='نشان شرکت' width={160} />
			</NextLinkStyled>
			{/* Search Input Field */}
			<MainSearchBar />
			{/* Cart & User Profile Buttons */}
			<UserProfileCartButton />
		</Box>
	);
}

export default TopHeader;
