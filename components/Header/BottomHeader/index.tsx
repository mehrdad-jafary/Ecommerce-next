import Box from "@mui/material/Box";

import MainNavigationLinks from "./_MainNavigationLinks";
import SecondaryNavigationLinks from "./_SecondaryNavigationLinks";

const BottomHeader = () => {
	return (
		<Box
			component='nav'
			sx={(theme) => ({
				py: "15px",
				display: "flex",
				justifyContent: "space-between",
				[theme.breakpoints.down("md")]: {
					justifyContent: "space-around",
				},
			})}>
			<MainNavigationLinks />
			<SecondaryNavigationLinks />
		</Box>
	);
};

export default BottomHeader;
