'use client'
import { useRouter } from 'next/navigation'
function Navbar() {
  const route = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'yellow',
        color: 'maroon',
      }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '300%',
          marginTop: '20px'
        }}>This is  Navbar</h1><br /><br />
      <button onClick={() => route.push('./')}>Go to Home Page</button><br />
      <button onClick={() => route.push('./about')}>Go to About</button><br />
      <button onClick={() => route.push('./contact-us')}>Go to Contact us</button><br />
      <button onClick={() => route.push('./footer')}>Go to Footer</button>

    </div>
  );
}
export default Navbar;