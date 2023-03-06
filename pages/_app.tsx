import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/theme/createEmotionCache";
import cacheRtl from "@/theme/createRTLCache";
import MyThemeProvider from "@/theme";

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	cachertl?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();

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
					<MyThemeProvider>
						<Component {...pageProps} />
					</MyThemeProvider>
				</CacheProvider>
			</CacheProvider>
		</>
	);
}
