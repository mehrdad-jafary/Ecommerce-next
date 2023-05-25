import Link from "next/link";
import { styled } from "@mui/material/styles";

export const NextLinkRound = styled(Link)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: "none",
	transition: "0.4s",
	backgroundColor: theme.palette.primary[theme.palette.mode],
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
	},
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "36px",
	height: "36px",
	padding: "10px",
	borderRadius: 50,
}));

const NextLinkStyled = styled(Link)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: "none",
}));

export default NextLinkStyled;
