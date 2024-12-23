// app/login/page.tsx
import About from '../components/NotLoggedIn/about';
import Navbar from '../components/NotLoggedIn/Navbar'; 
import Footer from '../components/NotLoggedIn/Footer';



export default function LoginPage() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  );
}