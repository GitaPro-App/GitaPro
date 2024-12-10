// app/login/page.tsx
import About from '../components/NotLoggedIn/about';
import Navbar from '../components/LoggedIn/Navbar';
import { NODE_BASE_ESM_RESOLVE_OPTIONS } from 'next/dist/build/webpack-config';



export default function LoginPage() {
  return (
    <div>
        <Navbar/>
        <About/>
      
    </div>
  );
}