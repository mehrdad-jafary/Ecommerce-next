import Link from "next/link";
import { styled } from "@mui/material/styles";

export const NextLinkRound = styled(Link)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: "none",
	transition: "0.4s",
	backgroundColor: theme.palette.secondary.main,
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
	},
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "36px",
	height: "36px",
	borderRadius: 50,
}));

const NextLinkStyled = styled(Link)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: "none",
}));

export default NextLinkStyled;
