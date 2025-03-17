import { useNavigate } from 'react-router-dom';
import './Events.css';
import NonTech1 from '../../img/cm.webp';
import { BiRupee } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Cinematica() {
    const navigate = useNavigate();
    return (
        <section className='Event-1'>
            <div className="Event-1-Container">
                <div className='Event-Title'>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ←
                    </button>
                    <h1>EVENTS <span>ZEIGEN'25</span></h1>
                    <p>CINEMATICA</p>
                </div>
                <div className='Event-Content'>
                    <div className='Event-Layout'>
                        <div className='Container-1'>
                            <img src={NonTech1} alt="PaperPresentation" />
                            <h2>CINEMATICA</h2>
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
                            <p>Get ready for a cinematic journey celebrating the magic <br />of movies and the music that makes them unforgettable! <br />Four exciting rounds await, testing your knowledge of iconic <br />films and their soundtracks. From blockbuster hits to cult <br />classics, it's a celebration of the silver screen.
                            </p>
                            <div className='Cinematic-Quotes'>
                                <p>So, are you ready to reel in the fun?</p>
                                <p>Let the cinematic adventure begin!🎬✨"</p>
                            </div>
                            <div className='Team-size'>
                                <h2>TEAM SIZE</h2>
                                <p>2 Members per Team</p>
                            </div>
                            <div className='Cinematic-More-Details'>
                                <h2>FOR MORE DETAILS</h2>
                                <p>7540050459</p>
                                <p>9345164496</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}