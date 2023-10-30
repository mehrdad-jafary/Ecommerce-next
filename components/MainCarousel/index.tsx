import React, { useState, useEffect, useRef, useCallback } from "react";
import Box from "@mui/material/Box";

import debounce from "@/util/debounce";

import ImagesContainer from "./_ImagesContainer";
import Indicators from "./_Indicators";
import NavigationButtons from "./_NavigationButtons";

function MainCarousel() {
	let imagesArray = [
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (1).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (2).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (3).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (4).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (5).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (6).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (7).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (8).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (9).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (10).webp" },
		{ imageUrl: "/images/lioncomputer-carousel/lion-carousel (11).webp" },
	];
	const [currentSlide, setCurrentSlide] = useState<number>(1);

	const slideCount = useRef<number>(imagesArray.length);
	const slideWidth = useRef<number>(0);

	const imagesContainerRef = useRef<HTMLUListElement>();
	const indicatorsArrayRef = useRef<SVGSVGElement[]>([]);
	const nextButtonRef = useRef<HTMLButtonElement | null>(null);

	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	let newArr = [imagesArray[imagesArray.length - 1], ...imagesArray, imagesArray[0]];

	useEffect(() => {
		function handleResize() {
			if (imagesContainerRef.current) {
				slideWidth.current = imagesContainerRef.current.clientWidth;
			}
		}
		if (imagesContainerRef.current) {
			slideWidth.current = imagesContainerRef.current.clientWidth;
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		handleSliderAnimation();
		handleStartAutoSlide();
	}, [currentSlide]);

	const addIndicatorToRef = useCallback((svg: SVGSVGElement) => {
		if (indicatorsArrayRef.current) {
			if (svg !== null) indicatorsArrayRef.current.push(svg);
		}
	}, []);

	const handleStartAutoSlide = () => {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			if (nextButtonRef.current) {
				nextButtonRef.current.click();
			}
		}, 3000);
	};

	const handleStopAutoSlide = () => {
		clearTimeout(timeoutRef.current);
	};

	const handleSliderAnimation = () => {
		if (imagesContainerRef.current) {
			if (currentSlide !== 1 && currentSlide !== slideCount.current) {
				imagesContainerRef.current.style.transition = "transform 400ms ease-in-out";
			}
			imagesContainerRef.current.style.transform = `translateX(${
				currentSlide * slideWidth.current * -1
			}px)`;
			indicatorsArrayRef.current.forEach((svg) => {
				svg.classList.remove("active");
			});
			indicatorsArrayRef.current[
				currentSlide === slideCount.current + 1
					? 0
					: currentSlide === 0
					? slideCount.current - 1
					: currentSlide - 1
			].classList.add("active");
		}
	};

	const handleTransitionEnd = () => {
		if (currentSlide === slideCount.current + 1 || currentSlide === 0) {
			if (imagesContainerRef.current) {
				imagesContainerRef.current.style.transition = "none";
			}
		}
		if (currentSlide === slideCount.current + 1) {
			setCurrentSlide(1);
		}
		if (currentSlide === 0) {
			setCurrentSlide(slideCount.current);
		}
	};

	const handleNextPrev = debounce(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			const target = event.target as HTMLButtonElement;
			let btnId = target.id;
			if (btnId === "next_button") {
				if (currentSlide <= slideCount.current + 1) {
					setCurrentSlide((prev) => prev + 1);
				}
				if (currentSlide > slideCount.current) {
					setCurrentSlide(1);
				}
			} else if (btnId === "previous_button") {
				if (currentSlide >= 1) {
					setCurrentSlide((prev) => prev - 1);
				}

				if (currentSlide === 0) {
					setCurrentSlide(slideCount.current);
				}
			}
		},
		200
	);

	const handleDirectSlide = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		const target = event.target as HTMLButtonElement;
		const slideId: number = Number(target.id);
		const nextSlide = slideId;
		setCurrentSlide(nextSlide);
	}, []);

	return (
		<Box
			onMouseEnter={handleStopAutoSlide}
			onMouseLeave={handleStartAutoSlide}
			component='div'
			className='carousel'
			dir='ltr'
			sx={{
				position: "relative",
				overflow: "hidden",
				borderRadius: 2,
				width: "100%",
			}}>
			{/* Images Ul */}
			<ImagesContainer
				ref={imagesContainerRef}
				imagesArray={newArr}
				slideWidth={slideWidth.current}
				handleTransitionEnd={handleTransitionEnd}
			/>
			{/* carousel indicators */}
			<Indicators
				imagesCount={slideCount.current}
				directSlideClick={handleDirectSlide}
				handleAddIndicatorToRef={addIndicatorToRef}
			/>
			{/* carousel next & prev buttons */}
			<NavigationButtons ref={nextButtonRef} handleNextPrev={handleNextPrev} />
		</Box>
	);
}

export default MainCarousel;
