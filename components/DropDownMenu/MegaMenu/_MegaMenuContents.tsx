import React, { useRef } from "react";

import Box from "@mui/material/Box";
import NextLinkStyled from "@/components/MuiStyled/NextLinkStyled";

function MegaMenu() {
	const subCategoriesRefs = useRef<HTMLElement[]>([]);
	const mainCategoriesLis = useRef<HTMLLIElement[]>([]);

	const handleMouseOver = (e: React.MouseEvent): void => {
		const id = e.currentTarget.getAttribute("data-target");
		mainCategoriesLis.current.forEach((li: HTMLLIElement): void => {
			if (li) {
				li.classList.remove("active");
			}
		});
		subCategoriesRefs.current.forEach((item) => {
			if (item) {
				item.style.display = "none";
				if (item.getAttribute("data-target") === id) {
					item.style.display = "flex";
				}
			}
		});
	};
	const handleMouseLeave = (e: React.MouseEvent): void => {
		e.currentTarget.classList.add("active");
	};
	return (
		<Box
			component='div'
			sx={{
				display: "flex",
				minWidth: "calc(100vw / 1.5)",
				padding: 0,
				margin: 0,
			}}>
			{/* Main Categories UL */}
			<Box
				component='ul'
				sx={({ palette, shadows }) => ({
					listStyleType: "none",
					backgroundColor:
						palette.mode === "dark" ? palette.secondary.main : palette.primary.light,
					paddingY: "1rem",
					"& > li": {
						borderTopLeftRadius: 20,
						borderBottomLeftRadius: 20,
						"&.active": {
							backgroundColor: palette.mode === "dark" ? palette.secondary.dark : "#fff",
							boxShadow: palette.mode === "dark" ? shadows[3] : "none",
						},
						"&:hover": {
							backgroundColor: palette.mode === "dark" ? palette.secondary.dark : "#fff",
							boxShadow: palette.mode === "dark" ? shadows[3] : "none",
						},
						"& >:first-of-type": {
							padding: "20px",
							display: "block",
							"&:hover": {
								"&::before": {
									backgroundColor: "transparent",
								},
							},
							"&::before": {
								content: '""',
								display: "inline-block",
								width: "7px",
								height: "7px",
								borderRadius: 50,
								margin: "0 10px",
								border: `1px solid ${palette.primary.main}`,
								backgroundColor: palette.primary.main,
							},
						},
					},
				})}>
				<li
					tabIndex={1}
					ref={(li: HTMLLIElement) => li && mainCategoriesLis.current.push(li)}
					className='active'
					data-target='10'
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}>
					<NextLinkStyled sx={{ pointerEvent: "none" }} href='/'>
						کامپیوتر و قطعات کامپیوتر
					</NextLinkStyled>
				</li>
				<li
					tabIndex={2}
					ref={(li: HTMLLIElement) => li && mainCategoriesLis.current.push(li)}
					data-target='20'
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}>
					<NextLinkStyled href='/'>لپتاپ و All in One و تبلت</NextLinkStyled>
				</li>
				<li
					tabIndex={3}
					ref={(li: HTMLLIElement) => li && mainCategoriesLis.current.push(li)}
					data-target='30'
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}>
					<NextLinkStyled href='/'>کنسول ٫گجت ٫موبایل</NextLinkStyled>
				</li>
				<li
					tabIndex={4}
					ref={(li: HTMLLIElement) => li && mainCategoriesLis.current.push(li)}
					data-target='40'
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}>
					<NextLinkStyled href='/'>تجهیزات شبکه و ارتباطات</NextLinkStyled>
				</li>
				<li
					tabIndex={5}
					ref={(li: HTMLLIElement) => li && mainCategoriesLis.current.push(li)}
					data-target='50'
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}>
					<NextLinkStyled href='/'>ماشین های اداری و موارد مصرفی</NextLinkStyled>
				</li>
			</Box>

			<Box
				component='div'
				data-target='10'
				ref={(elem: HTMLElement) => elem && subCategoriesRefs.current.push(elem)}
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: "20px",
					padding: "1rem",
				}}>
				<Box component='div'>
					<NextLinkStyled href='/'>کیس و قطعات اصلی داخل کیس</NextLinkStyled>
				</Box>
				<Box component='div'>
					<NextLinkStyled href='/'>قطعات اصلی خارجی کیس</NextLinkStyled>
				</Box>
				<Box component='div'>
					<NextLinkStyled href='/'>لوازم جانبی کامپیوتر</NextLinkStyled>
				</Box>
				<Box component='div'>
					<NextLinkStyled href='/'>لوازم جانبی کامپیوتر</NextLinkStyled>
				</Box>
				<Box component='div'>
					<NextLinkStyled href='/'>لوازم جانبی کامپیوتر</NextLinkStyled>
				</Box>
			</Box>

			<Box
				component='div'
				data-target='20'
				ref={(elem: HTMLElement) => elem && subCategoriesRefs.current.push(elem)}
				sx={{
					display: "none",
					flexDirection: "row",
					gap: "20px",
					padding: "1rem",
				}}>
				<Box component='div'>
					<NextLinkStyled href='/'>لپ تاپ</NextLinkStyled>
				</Box>
			</Box>

			<Box
				component='div'
				data-target='30'
				ref={(elem: HTMLElement) => elem && subCategoriesRefs.current.push(elem)}
				sx={{
					display: "none",
					flexDirection: "row",
					gap: "20px",
					padding: "1rem",
				}}>
				<Box component='div'>
					<NextLinkStyled href='/'>کنسول ٫گجت ٫موبایل</NextLinkStyled>
				</Box>
			</Box>

			<Box
				component='div'
				data-target='40'
				ref={(elem: HTMLElement) => elem && subCategoriesRefs.current.push(elem)}
				sx={{
					display: "none",
					flexDirection: "row",
					gap: "20px",
					padding: "1rem",
				}}>
				<Box component='div'>
					<NextLinkStyled href='/'>تجهیزات شبکه و ارتباطات</NextLinkStyled>
				</Box>
			</Box>

			<Box
				component='div'
				data-target='50'
				ref={(elem: HTMLElement) => elem && subCategoriesRefs.current.push(elem)}
				sx={{
					display: "none",
					flexDirection: "row",
					gap: "20px",
					padding: "1rem",
				}}>
				<Box component='div'>
					<NextLinkStyled href='/'>ماشین های اداری و موارد مصرفی</NextLinkStyled>
				</Box>
			</Box>
		</Box>
	);
}

export default MegaMenu;
