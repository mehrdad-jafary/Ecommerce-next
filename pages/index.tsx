import Image from "next/image";
import Header from "@/components/Header";
import MainCarousel from "@/components/MainCarousel";
import FluidContainer from "@/components/layout/FluidContainer";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

export default function Home() {
	return (
		<>
			<Header />
			<FluidContainer>
				<Box component='main' sx={{ direction: "rtl" }}>
					<Typography variant='h1' gutterBottom>
						Main Content
					</Typography>

					<Box
						component='section'
						sx={(theme) => ({
							display: "grid",
							gridTemplateColumns: "repeat(12, 1fr)",
							justifyItems: "stretch",
							alignItems: "start",

							gap: 1,
							"& > .carousel": {
								gridColumn: "4 / -1",
								gridRow: "1 / 3",
								placeSelf: "center",
							},
							[theme.breakpoints.down("md")]: {
								"& > .carousel": { gridColumn: "1 / -1", gridRow: "1 / 3" },
							},
						})}>
						<MainCarousel />

						<Box
							component={"div"}
							className='links'
							sx={(theme) => ({
								position: "relative",
								height: 200,
								borderRadius: 2,
								overflow: "hidden",
								gridColumn: "1 / span 3",
								[theme.breakpoints.down("md")]: {
									gridColumn: "1 / span 6",
									height: 250,
								},
							})}>
							<NextLinkStyled href={"/"}>
								<Image
									fill
									style={{ objectFit: "cover" }}
									src={"/images/hero-link-images/pc-builder.webp"}
									alt={"pc-builder"}
								/>
							</NextLinkStyled>
						</Box>

						<Box
							component={"div"}
							className='links'
							sx={(theme) => ({
								height: 200,
								position: "relative",
								borderRadius: 2,
								overflow: "hidden",
								gridColumn: "1 / span 3",
								[theme.breakpoints.down("md")]: {
									gridColumn: "7  / span 6",
									height: 250,
								},
							})}>
							<NextLinkStyled href={"/"}>
								<Image
									fill
									style={{ objectFit: "cover" }}
									src={"/images/hero-link-images/credit-sales.webp"}
									alt={"credit-sale"}
								/>
							</NextLinkStyled>
						</Box>
					</Box>
				</Box>
				<footer>
					<h1>Footer</h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur maxime
					possimus praesentium saepe, at neque quas unde velit fugit!
				</footer>
			</FluidContainer>
		</>
	);
}
