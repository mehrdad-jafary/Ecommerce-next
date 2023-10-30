import { useEffect, forwardRef, memo, ReactNode } from "react";

import IconButton from "@mui/material/IconButton";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface Props {
	children?: ReactNode;
	handleNextPrev: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
type RefButton = HTMLButtonElement;

const NavigationButtons = forwardRef<RefButton, Props>((props, ref) => {
	const { handleNextPrev } = props;

	useEffect(() => {
		console.log("Buttons Rendered");
	}, []);

	return (
		<>
			<IconButton
				ref={ref}
				onClick={(e) => handleNextPrev(e)}
				id='next_button'
				sx={{
					position: "absolute",
					left: 5,
					top: "50%",
					transform: "translateY(-50%)",
				}}>
				<NavigateNextIcon fontSize='large' sx={{ pointerEvents: "none" }} />
			</IconButton>
			<IconButton
				onClick={(e) => handleNextPrev(e)}
				id='previous_button'
				sx={{
					position: "absolute",
					right: 5,
					top: "50%",
					transform: "translateY(-50%)",
				}}>
				<NavigateBeforeIcon fontSize='large' sx={{ pointerEvents: "none" }} />
			</IconButton>
		</>
	);
});

export default memo(NavigationButtons);
