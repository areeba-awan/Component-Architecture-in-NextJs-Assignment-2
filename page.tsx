
import Link from "next/link";
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'purple',
        color: 'white',
      }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '300%',
          marginTop: '20px'
        }}>Beginner's Buddy</h1>Welcome to My Next JS Website!<br /><br />
      <Link href='./navbar'>Go to Navbar</Link><br />
      <Link href='./about'>Go to About</Link><br />
      <Link href='./contact-us'>Go to Contact us</Link><br />
      <Link href='./footer'>Go to Footer</Link>
    </div>
  )
}