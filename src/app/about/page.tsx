// app/login/page.tsx
import About from '../components/NotLoggedIn/about';
import Navbar from '../components/LoggedIn/Navbar';



export default function LoginPage() {
  return (
    <div>
        <Navbar/>
        <About/>
      
    </div>
  );
}