import { styled } from "@mui/material/styles";
import Input, { InputProps } from "@mui/material/Input";

const SearchInput = styled(Input)<InputProps>(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "light"
			? theme.palette.grey[200]
			: theme.palette.secondary.main,
	padding: "5px",
	paddingLeft: "15px",
	width: "450px",
	borderRadius: "50px",
	fontSize: "0.9rem",
	":hover:not(.Muidisabled,.Mui-error):before": {
		borderBottom: "none",
	},
	"&:before": {
		borderBottom: "none",
	},
	"&:after": {
		borderBottom: "none",
	},
}));

export default SearchInput;
