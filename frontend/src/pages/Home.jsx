import '../styles/pages/Home.css'
import dashboard from '../assets/images/dashboard.png'
import building from '../assets/icons/building-circle-check-solid.svg'
import gear from '../assets/icons/gear-solid.svg'
import chart from '../assets/icons/chart-simple-solid.svg'
import hourglass from '../assets/icons/hourglass-start-solid.svg'
import database from '../assets/icons/database-solid.svg'
import link from '../assets/icons/link-solid.svg'
import graphImage from '../assets/images/graphs-img.png'

const Home = () => {

    const features = [
        {
            icon: building,
            headline: "Business Management",
            paragraph: "Seamlessly handle daily operations across departments."
        },
        {
            icon: gear,
            headline: "Task Automation",
            paragraph: "Automate repetitive tasks and enhance efficiency."
        },
        {
            icon: chart,
            headline: "Multiple Dashboards",
            paragraph: "Gain real-time insights with customizable views."
        },
        {
            icon: hourglass,
            headline: "Workflow Scheduling",
            paragraph: "Organize tasks and set priorities effortlessly."
        },
        {
            icon: database,
            headline: "Centralized Data",
            paragraph: "Keep all business records, leads, and reports in one place."
        },
        {
            icon: link,
            headline: "Smart Integrations",
            paragraph: "Connect with your favorite tools for better workflow."
        }
    ]
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
                <div className='section-name'>Features</div>
                <h1>Maximize Productivity with Our Cloud Software</h1>
                <p>Stay ahead with our all-in-one solution for ERP, CRM, school/college management,
                    sales, and more. Automate processes, manage operations efficiently, and boost your
                    business growth—all from a single platform.</p>
            </div>
            <div className='features-cards'>
                {features.map((feature, index) => (<div key={index} className='card'>
                    <div className='icon'>
                        <img src={feature.icon} alt='building-icon' />
                    </div>
                    <h2>{feature.headline}</h2>
                    <p>{feature.paragraph}</p>
                </div>
                ))}
            </div>
            <div className='analytics-section'>
                <div className='section-name'>Analytics & Insights</div>
                <div className='content-box'>
                    <div className='left-text-box'>
                        <h2>Visualize Your Growth with Interactive Graphs</h2>
                        <p>Transform complex data into clear, actionable insights with our powerful graph
                            analytics. Track ad performance, monitor lead conversion trends, and measure key
                            metrics—all in one place. Our dynamic bar charts, line graphs, and radar charts
                            help you spot patterns, optimize strategies, and make data-backed decisions with
                            confidence.</p>
                        <button>Explore More</button>
                    </div>
                    <img src={graphImage} alt='graph-analytics-image' />
                </div>
            </div>
        </div>
    )
}

export default Home
