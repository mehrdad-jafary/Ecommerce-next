import { memo, useEffect } from "react";

import { Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";

import CircleIcon from "@mui/icons-material/Circle";

interface IIndicatorProps {
	imagesCount: number;
	directSlideClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleAddIndicatorToRef: (svg: SVGSVGElement) => void;
}

const Indicators = (props: IIndicatorProps) => {
	const { imagesCount, directSlideClick, handleAddIndicatorToRef } = props;
	useEffect(() => {
		console.log("INDICATORS Rendered");
	});
	return (
		<Box
			component='ul'
			sx={{
				display: "flex",
				position: "absolute",
				left: 0,
				right: 0,
				bottom: 10,
				padding: 0,
				margin: 0,
				justifyContent: "center",
			}}>
			{Array.from({ length: imagesCount }, (_, index) => index + 1).map(
				(item, index, arr) => {
					return (
						<ListItem key={index} disablePadding disableGutters sx={{ width: "inherit" }}>
							<IconButton
								onClick={(e) => directSlideClick(e)}
								id={`${item}`}
								disableRipple>
								<CircleIcon
									ref={handleAddIndicatorToRef}
									className={index === 1 ? "active" : ""}
									sx={(theme) => ({
										fontSize: ".4rem",
										"&.active": {
											color: theme.palette.primary.main,
											fontSize: ".6rem",
										},
										pointerEvents: "none",
									})}
								/>
							</IconButton>
						</ListItem>
					);
				}
			)}
		</Box>
	);
};

export default memo(Indicators);
