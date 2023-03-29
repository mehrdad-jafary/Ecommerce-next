import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const BadgeStyled = styled(Badge)<BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: 30,
		top: -5,
		padding: "0 2px",
	},
}));

export default BadgeStyled;
