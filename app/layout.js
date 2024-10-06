"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import './globals.css';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';
import store from './redux';
import AddNew from './components/Add-New/add-new';
 


const roboto = Roboto({
 weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
}));

 export default function RootLayout({children}) {


   return (
     <html lang="en">
      <body className={roboto.variable}>

        <Provider store={store}>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
            <Main>
              <Navbar />
              {children}
               <AddNew/>
            </Main>
           </ThemeProvider>
          </AppRouterCacheProvider>
          </Provider>
       </body>
     </html>
   );
 }
