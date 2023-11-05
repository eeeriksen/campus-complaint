import './Header.css'
import '../routes/AuthDetails'
import AuthDetails from '../routes/AuthDetails'


function Header() {
  return (
    <header>
      <div className='logo'>
        <div><span className='first'>Campus</span><span className='second'>Complaint</span></div>
        <AuthDetails />
      </div>
    </header>
  )
}

export default Header

