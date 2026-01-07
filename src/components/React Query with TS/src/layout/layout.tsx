import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";
import ScrollToTop from "../utils/scrollToTop/scrollToTop";
import { Toaster } from 'react-hot-toast';

export default function Layout() {
    return (
        <>  
            <Toaster/>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}