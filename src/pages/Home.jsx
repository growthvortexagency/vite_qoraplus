import '../styles/pages/Home.css'
import dashboard from '../assets/images/dashboard.png'

const Home = () => {
    return (
        <div className='homepage-main-content'>
            <div className='section-1'>
                <h1>Streamline Your Business with Our All-in-One Cloud Solution!</h1>
                <p>Manage ERP, CRM, school/college operations, sales, and more - all in one place.
                    Our powerful cloud software simplifies your workflow, enhances efficiency, and
                    keeps your business running smoothly.</p>
                <button>Get Started</button>
            </div>
            <div className='dashboard-image'>
                <img src={dashboard} alt='dashboard'/>
            </div>
        </div>
    )
}

export default Home
