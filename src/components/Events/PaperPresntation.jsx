import { useNavigate } from 'react-router-dom';
import './Events.css'
import Event1 from '../../img/pblitz.webp'
import { BiRupee } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
export default function PaperPresentation() {
    const navigate = useNavigate();
    return (
        <section className='Event-1'>
            <div className="Event-1-Container">
                <div className='Event-Title'>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ←
                    </button>
                    <h1>EVENTS <span>ZEIGEN'25</span></h1>
                    <p>PRESENTATION BLITZ</p>
                </div>
                <div className='Event-Content'>
                    <div className='Event-Layout'>
                        <div className='Container-1'>
                            <img src={Event1} alt="PaperPresentation" />
                            <h2>PRESENTATION BLITZ</h2>
                            <div className='Registration-Box'>
                                <h3>REGISTRATION</h3>
                                <p>Registration Fee :<span><BiRupee /></span>250 Per Head</p>
                                <div className='RegisterBtn'>
                                    <p><a href="https://forms.gle/mrUbzaNAQDudphBy5" target="_blank">Register Now <FaArrowRightLong /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className='Container-2'>
                            <h2>EVENT OVERVIEW</h2>
                            <p>Technology is like art, It is a soaring exercise of human <br /> Imagination</p>
                            <div className='Topics'>
                                <h2>TOPICS</h2>
                                <ol>
                                    <li>Block chain and Cryptography</li>
                                    <li>Future of AI</li>
                                    <li>The Rise of 5G and it's impact on society</li>
                                    <li>Metaverse</li>
                                    <li>Digital twin technology</li>
                                    <li>Ethical Hacking</li>
                                    <li>RFID Technology</li>
                                </ol>
                            </div>
                            <div className='Team-size'>
                                <h2>TEAM SIZE</h2>
                                <p>2 Members per Team</p>
                            </div>
                            <div className='Rules'>
                                <h2>RULES</h2>
                                <ul>
                                    <li>Maximum 15 Slides</li>
                                    <li>5-8 minutes for a Team</li>
                                </ul>
                            </div>
                            <div className='More-Details'>
                                <h2>FOR MORE DETAILS</h2>
                                <p>8248990886</p>
                                <p>7397047581</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}