import { useNavigate } from 'react-router-dom';
import './Events.css'
import NonTech3 from '../../img/st.webp'
import { BiRupee } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
export default function SharkTank() {
    const navigate = useNavigate();
    return (
        <section className='Event-1'>
            <div className="Event-1-Container">
                <div className='Event-Title'>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ←
                    </button>
                    <h1>EVENTS <span>ZEIGEN'25</span></h1>
                    <p>SHARK TANK</p>
                </div>
                <div className='Event-Content'>
                    <div className='Event-Layout'>
                        <div className='Container-1'>
                            <img src={NonTech3} alt="PaperPresentation" />
                            <h2>SHARK TANK</h2>
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
                            <p>Shark Tank is an exciting pitch competition where aspiring <br /> entrepreneurs present their innovative ideas(new product or <br /> startup pitch)  to a panel of 'sharks'(industry experts <br/>and judges).Participants must convince the sharks of their <br /> creativity, strategy and negotiation skills</p>
                            <div className='Shark-Tank-Rounds'>
                                <h2>Round 1</h2>
                                <h4>THE ELEVATOR PITCH(SCREENING ROUND)</h4>
                                <ul>
                                    <li>Time limit:90 seconds - 2 Minutes per team</li>
                                </ul>
                                <h2>Round 2</h2>
                                <h4>THE INVESTMENT PITCH(FINAL ROUND)</h4>
                                <ul>
                                    <li>Time limit:7-10 Minutes per team (5-7 Min pitch) +2-3 <br />Minutes Q&A</li>
                                </ul>
                            </div>
                            <div className='Team-size'>
                                <h2>TEAM SIZE</h2>
                                <p>2 Members per Team</p>
                            </div>
                            <div className='Quotes'>
                                <p>DETAILES BUSINESS MODEL,REVENUE STRAREGY,MARKET</p>
                                <p>ANALYSIS,AND INVESTMENT BREAKDOWN</p>
                            </div>
                            <div className='More-Details'>
                                <h2>FOR MORE DETAILS</h2>
                                <p>9025178348</p>
                                <p>8637442114</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}