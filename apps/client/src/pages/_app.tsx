import * as React from 'react'
import store from 'src/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { SessionProvider } from "next-auth/react"

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import createEmotionCache from 'src/utils/cache/createEmotionCache'
import darkThemeOptions from 'src/styles/theme/dark-theme-options'
import 'src/styles/globals.css'
import Layout from 'src/shared/ui/layout'
import { Session } from 'next-auth'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  session: Session
  Component: AppProps['Component'] & { __NEXT_ISAUTHPAGE?: boolean };
}

const clientSideEmotionCache = createEmotionCache()

const darkTheme = createTheme(darkThemeOptions)

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, session, router } = props

  const isLayoutHidden = [`/auth/login`].includes(router.pathname);
  const LayoutComponent = isLayoutHidden ? React.Fragment : Layout;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </ThemeProvider>
        </CacheProvider>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
