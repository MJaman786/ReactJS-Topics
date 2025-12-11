import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}