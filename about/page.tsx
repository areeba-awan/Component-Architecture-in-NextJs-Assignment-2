

'use client'
import { useRouter } from 'next/navigation'
function About() {
  const route = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'blue',
        color: 'white',
      }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '300%',
          marginTop: '20px'
        }}>This is About Page</h1><br /><br />
      <button onClick={() => route.push('./')}>Go to Home Page</button><br />
      <button onClick={() => route.push('./navbar')}>Go to Navbar</button><br />
      <button onClick={() => route.push('./contact-us')}>Go to Contact us</button><br />
      <button onClick={() => route.push('./footer')}>Go to Footer</button>

    </div>
  );
}
export default About