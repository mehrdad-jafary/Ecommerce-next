import Box from "@mui/material/Box";

import MainNavigationLinks from "./_MainNavigationLinks";
import SecondaryNavigationLinks from "./_SecondaryNavigationLinks";

const BottomHeader = () => {
	return (
		<Box
			component='nav'
			sx={{ py: "15px", display: "flex", justifyContent: "space-between" }}>
			<MainNavigationLinks />
			<SecondaryNavigationLinks />
		</Box>
	);
};

export default BottomHeader;
