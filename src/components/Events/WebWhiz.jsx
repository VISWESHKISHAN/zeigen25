import './Events.css'
import Events3 from '../../img/ww.webp'
import { BiRupee } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
export default function WebWhiz() {
    const navigate = useNavigate();
    return (
        <section className='Event-1'>
            <div className="Event-1-Container">
                <div className='Event-Title'>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ←
                    </button>
                    <h1>EVENTS <span>ZEIGEN'25</span></h1>
                    <p>WEB WHIZ</p>
                </div>
                <div className='Event-Content'>
                    <div className='Event-Layout'>
                        <div className='Container-1'>
                            <img src={Events3} alt="PaperPresentation" />
                            <h2>WEB WHIZ</h2>
                            <div className='Registration-Box'>
                                <h3>REGISTRATION</h3>
                                <p>Registration Fee :<span><BiRupee /></span>250 Per Head</p>
                                <div className='RegisterBtn'>
                                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScb9LvYpjYncZKPCZNnXMZ76uoThlQlaFhu-skCXWktAixqLw/viewform" target="_blank">Register Now <FaArrowRightLong /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className='Container-2'>
                            <h2>EVENT OVERVIEW</h2>
                            <p> Website Designing-Students can design a website <br /> consisting of multiple web pages using any internet  <br /> resources</p>
                            <div className='Notices'>
                                <h2>IMPORTANT NOTICE</h2>
                                <p>Website topic for a team will be given <b>on the spot</b>.</p>
                            </div>
                            <div className='Tools'>
                                <h2>TOOLS</h2>
                                <p>Web page can be created using HTML,VS code or <br /> any other web development applications.
                                </p>
                            </div>
                            <div className='Team-size'>
                                <h2>TEAM SIZE</h2>
                                <p>2 Members per Team</p>
                            </div>
                            <div className='Duration'>
                                <p>45 Minutes</p>
                            </div>
                            <div className='More-Details'>
                                <h2>FOR MORE DETAILS</h2>
                                <p>99946 97700</p>
                                <p>95972 35924</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}