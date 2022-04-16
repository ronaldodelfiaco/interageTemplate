import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import './i18n';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../contexts/AuthContext';
import SettingsProvider from '../contexts/SettingsContext';
import TitleContextProvider from '../contexts/TitleContext';
import useSettings from '../hooks/useSettings';
import { ukoTheme } from '../theme';
import '../../styles/globals.css';
import RTL from '../components/RTL';
import AuthGuard from '../components/authentication/AuthGuard';
import DashboardLayout from '../components/Layouts/DashboardLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const { settings } = useSettings();

  // App theme
  const appTheme = ukoTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  // toaster options
  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
    },
  };
  return (
    <>
      <Head>
        <title>Interage</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <div id="root">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AuthProvider>
          <SettingsProvider>
            <TitleContextProvider>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={appTheme}>
                  <RTL direction={appTheme.direction}>
                    <AuthGuard>
                    <DashboardLayout>
                      <CssBaseline />
                      <Toaster toastOptions={toasterOptions} />
                      <Component {...pageProps} />
                    </DashboardLayout>
                    </AuthGuard>
                  </RTL>
                </ThemeProvider>
              </StyledEngineProvider>
            </TitleContextProvider>
          </SettingsProvider>
          </AuthProvider>
        </LocalizationProvider>
      </div>
    </>
  );
}

export default MyApp;
