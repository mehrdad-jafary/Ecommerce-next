import React, { forwardRef, useEffect } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";

import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

interface IImagesContainer {
	imagesArray: { imageUrl: string }[];
	slideWidth: number;
	handleTransitionEnd: () => void;
}

export type RefElem = HTMLUListElement | undefined;

const ImagesContainer = forwardRef<RefElem, IImagesContainer>((props, ref) => {
	const { imagesArray, slideWidth, handleTransitionEnd } = props;

	useEffect(() => {
		console.log("IMAGES CONTAINER RENDERED");
	});
	return (
		<Box
			onTransitionEnd={handleTransitionEnd}
			component='ul'
			ref={ref}
			sx={(theme) => ({
				display: "flex",
				padding: 0,
				margin: 0,
				listStyle: "none",
				transform: `translateX(${slideWidth}px)`,
				width: "100%",
				minHeight: 400,

				"& > li": {
					backgroundColor: theme.palette.grey["800"],
					flex: "1 0 100%",
					"& > a": {
						display: "block",
						textDecoration: "none",
						"& > img": {
							objectFit: "cover",
							[theme.breakpoints.down("lg")]: {
								objectFit: "contain",
							},
						},
					},
					padding: 0,
					flexWrap: "nowrap",
				},
			})}>
			{imagesArray.map((item, index) => {
				return (
					<ListItem key={index}>
						<NextLinkStyled href={"/"}>
							<Image
								fill={true}
								src={item.imageUrl}
								priority={true}
								alt='Picture of the author'
							/>
						</NextLinkStyled>
					</ListItem>
				);
			})}
		</Box>
	);
});

export default ImagesContainer;
