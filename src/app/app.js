// pages/_app.js
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {

    <ThemeProvider>
    return <Component {...pageProps} />
    </ThemeProvider>
  }
  
  export default MyApp