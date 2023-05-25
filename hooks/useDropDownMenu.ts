import React, { useState, RefObject } from "react";
import useBlurFilterOnBody from "./useBlurFilterOnBody";

type EventType =
	| React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
	| React.MouseEvent<HTMLButtonElement>;
export interface IuseDropDownMenu {
	anchorEl: HTMLElement | null;
	open: boolean;
	handleOpen: (event: EventType) => void;
	handleClose: () => void;
}

export type UseDropDownMenu = {
	(anchorRef?: RefObject<HTMLElement>): IuseDropDownMenu;
};

const useDropDownMenu: UseDropDownMenu = (anchorRef) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { setBlur, removeBlur } = useBlurFilterOnBody();
	const open = Boolean(anchorEl);

	const handleOpen = (event: EventType): void => {
		let start_time = Date.now();
		if (anchorRef?.current) {
			setBlur();
			if (event.type === "focus") {
				setAnchorEl(event.currentTarget.parentElement);
				console.log((start_time - Date.now()) / 1000);
				return;
			}
			setAnchorEl(anchorRef.current);
			console.log((start_time - Date.now()) / 1000);
		} else {
			setAnchorEl(event.currentTarget);
			console.log((start_time - Date.now()) / 1000);
		}
	};

	const handleClose = (): void => {
		setAnchorEl(null);
		removeBlur();
	};

	return { anchorEl, open, handleOpen, handleClose };
};

export default useDropDownMenu;
