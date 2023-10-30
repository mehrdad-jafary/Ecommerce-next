import { PropsWithChildren } from "react";
import { Container } from "@mui/material";

function FluidContainer({ children }: PropsWithChildren) {
	return <Container maxWidth='lg'>{children}</Container>;
}

export default FluidContainer;
