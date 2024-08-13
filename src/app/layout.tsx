import Cookies from 'js-cookie';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Sections/Footer";
import { Container } from "@mui/material";
import "./globals.css";
import LoginModal from "./components/Modals/LoginModal";
import RegistrationModal from "./components/Modals/RegistrationModal";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "./api/getCurrentUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uchar Ketmon",
  description: "Uchar Ketmon - Бўш ИШ ўринлар, Квартиралар, Ҳужжатлар, Фирибгарлар руйхати",
};


const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Toaster
          />
          <LoginModal />
          <RegistrationModal />
          <Navbar currentUser={currentUser} />
          <Container maxWidth="xl" sx={{ mt: '100px' }}>

            {children}
          </Container>
        </div>
        <div style={{ marginTop: 'auto' }} >
          <Footer />
        </div>
      </body>
    </html >
  );
}

export default RootLayout;
