import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/theme";
import createEmotionCache from "@/theme/createEmotionCache";
import cacheRtl from "@/theme/createRTLCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	cachertl?: EmotionCache;
}

export default function App(props: MyAppProps) {
	const {
		Component,
		pageProps,
		emotionCache = clientSideEmotionCache,
		cachertl = cacheRtl,
	} = props;
	return (
		<>
			<CacheProvider value={emotionCache}>
				<CacheProvider value={cachertl}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</CacheProvider>
			</CacheProvider>
		</>
	);
}
