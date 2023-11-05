import './Header.css'
import '../routes/AuthDetails'
import AuthDetails from '../routes/AuthDetails'


function Header() {
  return (
    <header>
      <div className='logo'>
        <span className='first'>Campus</span><span className='second'>Complaint</span>
        <AuthDetails />
      </div>
    </header>
  )
}

export default Header

