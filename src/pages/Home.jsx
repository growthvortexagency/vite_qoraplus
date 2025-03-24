import '../styles/pages/Home.css'
import dashboard from '../assets/images/dashboard.png'
import building from '../assets/icons/building-circle-check-solid.svg'

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
                <img src={dashboard} alt='dashboard' />
            </div>
            <div className='section-2'>
                <div className='features'>Features</div>
                <h1>Maximize Productivity with Our Cloud Software</h1>
                <p>Stay ahead with our all-in-one solution for ERP, CRM, school/college management, 
                    sales, and more. Automate processes, manage operations efficiently, and boost your 
                    business growth—all from a single platform.</p>
            </div>
            <div className='features-cards'>
                <div className='card'>
                    <div className='icon'>
                        <img src={building} alt='building-icon'/>
                    </div>
                    <h2>Business Management</h2>
                    <p>Seamlessly handle daily operations across departments.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
