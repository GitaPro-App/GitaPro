// app/login/page.tsx
import LearnComponent from '../components/LoggedIn/Quiz';
import Navbar from '../components/NotLoggedIn/Navbar';

export default function LoginPage() {
  return (
    <div>
      <Navbar/>
      <LearnComponent />
    </div>
  );
}