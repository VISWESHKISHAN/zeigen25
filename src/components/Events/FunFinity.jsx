import { useNavigate } from 'react-router-dom';
import './Events.css'
import NonTech2 from '../../img/fw.webp'
import { BiRupee } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FunFinity() {
    const navigate = useNavigate();
    return (
        <section className='Event-1'>
            <div className="Event-1-Container">
                <div className='Event-Title'>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ←
                    </button>
                    <h1>EVENTS <span>ZEIGEN'25</span></h1>
                    <p>FUNFINITY WARS</p>
                </div>
                <div className='Event-Content'>
                    <div className='Event-Layout'>
                        <div className='Container-1'>
                            <img src={NonTech2} alt="PaperPresentation" />
                            <h2>FUNFINITY WARS</h2>
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
                            <p>Gear up for a thrilling event packed with fun challenges that <br /> test your teamwork,agility,and creativity! Enjoy Exciting <br /> activites,laugh,compete,and unleash your competitive <br /> sprite in an unforgettable experience full of energy and <br /> enthusiam</p>
                            <div className='Rounds'>
                                <h2>Round 1:</h2>
                                <h4>PAATHA ORU LOOK LA!</h4>
                                <p>observe the images on screen and write down as many words as <br /> possible in one minute - the team with the most words wins! </p>
                                <h2>Round 2:</h2>
                                <h4>GALLATA GROUND</h4>
                                <p>It is a Multi-Level Challenge featuring3-4 stages of exciting physical <br /> activities and fun tasks for an action-packed exprience</p>
                                <h2>Round 3:</h2>
                                <h4>THADAI ADHAI UDAI!</h4>
                                <p>In this XO challenge ,each turn comes with unique hindrance,manking <br />strategic play even more difficult</p>
                            </div>
                            <div className='More-Details'>
                                <h2>FOR MORE DETAILS</h2>
                                <p>9600757423</p>
                                <p>8667309662</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}