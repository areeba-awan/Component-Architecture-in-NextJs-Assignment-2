
     'use client'
import { useRouter } from 'next/navigation'
function Footer() {
  const route = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '50vh',
        backgroundColor: 'orange',
        color: 'white',
      }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '300%',
          marginTop: '20px'
        }}>I am Footer</h1>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <button onClick={() => route.push('./')}>Go to Home Page</button><br /><br />
        <button onClick={() => route.push('./navbar')}>Go to Navbar</button><br /><br />
        <button onClick={() => route.push('./about')}>Go to About</button><br /><br />
        <button onClick={() => route.push('./contact-us')}>Go to Contact us</button>  </div><br /><br />
    </div>
  );
}
export default Footer