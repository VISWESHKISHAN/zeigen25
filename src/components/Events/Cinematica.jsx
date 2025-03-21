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
                                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScb9LvYpjYncZKPCZNnXMZ76uoThlQlaFhu-skCXWktAixqLw/viewform" target="_blank">Register Now <FaArrowRightLong /></a></p>
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
                            <div className='Rounds'>
                                <h2>Round 1:</h2>
                                <h4>Balloon-a Oodhu , Bathila Sollu!</h4>
                                <p>Who rules the world of cinema? Prove you're the Cine Raja or Rani! <br />This round brings dialogues, scenes, and songs under one roof. <br />Only the true king or queen of films will rise above the rest!</p>
                                <h2>Round 2:</h2>
                                <h4>BGM-a Kelu, Title-a Thedu!</h4>
                                <p> It's the ultimate Title Track Chase! Listen to the BGM, grab the right <br />movie card, and dash to victory. The clock is ticking, <br />and only the quickest team will take the spotlight. Ready… set… groove!</p>
                                <h2>Round 3:</h2>
                                <h4>Solli Adi</h4>
                                <p>Get ready for a battle of quick thinking and movie knowledge in Solli Adi! <br />This exciting round tests how well you can recall movies, <br />songs, or other film-related facts under pressure.</p>
                                <h2>Round 4:</h2>
                                <h4>Match Ka Batch</h4>
                                <p>Get ready to put your movie knowledge to the test in Match Ka Batch! <br />This fun-filled non-tech event challenges participants to guess <br />the movie based on a series of clues</p>
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