import NavigationDesktop from './navigation/NavigationDesktop';
import NavigationMobile from './navigation/NavigationMobile';
import Footer from './Footer';

const Layout = ({children}) => (
  <>
    <NavigationDesktop />
    <NavigationMobile />
    {children}
    <Footer />
  </>
);

export default Layout;