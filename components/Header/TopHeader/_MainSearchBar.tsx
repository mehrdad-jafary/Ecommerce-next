import React, { useRef, useEffect } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import SearchInputStyles from "@/components/MuiStyled/SeacrchInputStyled";
import useDropDownMenu from "@/hooks/useDropDownMenu";

import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
function MainSearchBar() {
	const headerRef = useRef<HTMLElement | null>(null);
	const { anchorEl, open, handleOpen, handleClose } = useDropDownMenu(headerRef);
	const id = open ? "search-bar-popper" : undefined;

	useEffect(() => {
		headerRef.current = document.querySelector("header");
		return () => {
			headerRef.current = null;
		};
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.parentElement);
	};

	const handdleEscape = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Escape") {
			handleClose();
			const target = event.target as HTMLInputElement;
			target.blur();
		}
	};

	const handleCloseIcon = () => {
		if (open) {
			handleClose();
		}
	};

	return (
		<>
			<SearchInputStyles
				onChange={handleSearch}
				type='text'
				id={id}
				name='search'
				placeholder='به دنبال چه چیزی میگردید؟'
				fullWidth
				size='medium'
				autoComplete='off'
				onFocus={handleOpen}
				onBlur={handleClose}
				onKeyUp={handdleEscape}
				endAdornment={
					<InputAdornment onClick={handleCloseIcon} position='start'>
						{open ? (
							<CloseOutlinedIcon sx={{ cursor: "pointer", color: "primary.main" }} />
						) : (
							<SearchIcon sx={{ color: "primary.main" }} />
						)}
					</InputAdornment>
				}
			/>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<Paper sx={{ minWidth: "500px", minHeight: "100px" }} elevation={4}>
					<Typography sx={{ p: 2, textAlign: "center" }}>
						برای جستجو حداقل ۲ کاراکتر وارد نمایید
					</Typography>
				</Paper>
			</Popper>
		</>
	);
}

export default MainSearchBar;
