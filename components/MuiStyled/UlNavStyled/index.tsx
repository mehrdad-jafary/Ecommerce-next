import { styled } from "@mui/material/styles";

const UlNavStyled = styled("ul")(({ theme }) => ({
	listStyle: "none",
	padding: "0",
	margin: "0",
	lineHeight: "1.5",
	display: "flex",
	gap: "15px",
	"& > .MuiListItem-root": {
		padding: "0",
		width: "auto",
	},
}));

export default UlNavStyled;
