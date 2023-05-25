import { useEffect, useRef } from "react";

export default function useBlurFilterOnBody() {
	const __nextDivRef = useRef<NodeListOf<ChildNode> | undefined>();
	useEffect(() => {
		__nextDivRef.current = document.querySelector("#__next")?.childNodes;
	}, []);

	const setBlur = (): void => {
		if (__nextDivRef.current) {
			__nextDivRef?.current.forEach((tag, index) => {
				if (index !== 0) {
					let elem = tag as HTMLElement;
					elem.style.filter = "blur(5px)";
				}
			});
		}
	};

	const removeBlur = (): void => {
		if (__nextDivRef.current) {
			__nextDivRef?.current.forEach((tag, index) => {
				if (index !== 0) {
					let elem = tag as HTMLElement;
					elem.style.filter = "blur(0px)";
				}
			});
		}
	};

	return { setBlur, removeBlur };
}
