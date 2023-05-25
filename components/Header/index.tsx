import Box from "@mui/material/Box";

import FluidContainer from "@/components/layout/FluidContainer";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

function Header() {
	return (
		<Box
			component='header'
			sx={({ palette, shadows }) => ({
				backgroundColor: palette.mode === "dark" ? palette.grey["900"] : "#fff",
				borderBottom:
					palette.mode === "dark" ? "none" : `solid 1px ${palette.grey["A400"]}`,
			})}>
			<FluidContainer>
				{/* Top Navigation */}
				<TopHeader />
				{/* Bottom Navigation */}
				<BottomHeader />
			</FluidContainer>
		</Box>
	);
}

export default Header;
