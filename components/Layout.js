import Footer from './Footer'
import Head from './Head'
import { Nav } from './Navigation'

const Layout = ({ children }) => (
  <>
    <Head />
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
