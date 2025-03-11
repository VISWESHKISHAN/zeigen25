import '../styles/FooterInfo.css'
import Logo from '../images/zeigen.png'
export default function FooterInfo(){
    return (
        <section>
            <div className='Footer-info'>
                <div className='Footer-Grid'>
                    <div className='Event-Logo'>
                        <img src={Logo} alt="" />
                        <div className='Events-Title'>
                            <h1>KLNCE</h1>
                            <p>ZEIGEN <span>'25</span></p>
                        </div>
                    </div>
                    <div className='Events-Link'>
                        <div className='Events-grid'> 
                            <p>Quick Link</p>
                            <ul>
                                <li> <a href="#home-section">Home</a></li>
                                <li> <a href="#about-section">About</a></li>
                                <li> <a href="#events-section">Events</a></li>
                                <li> <a href="#event-lineup-section">Event lineup</a></li>
                            </ul>
                        </div>
                        <div className='Events-grid'> 
                            <p>EXTERNAL LINK</p>
                            <ul>
                                <li> <a href="https://www.google.com/maps?q=9.836167,78.163222" target="_blank" >KLNCE</a></li>
                                <li> <a href="mailto:zeigen2k25@gmail.com" target="_blank">Email</a></li>
                                <li> <a href="https://www.instagram.com/zeigen_2k25/?utm_source=qr&igsh=bWgybHdib2ExdHIy#" target="_blank">Instagram</a></li>
                                <li> <a href="#">Whatsapp</a></li>
                            </ul>
                        </div>
                        <div className='Events-CO-ORDINATORS'> 
                            <p className='name' >CO-ORDINATORS</p>
                            <ul>
                                <li> 
                                    <p className='Co-ordinators-Name' >Mr.Thiravidan PM</p>
                                    <p className='Co-ordinators-Number'>9123563645</p>
                                </li>
                                <li> 
                                    <p className='Co-ordinators-Name'>Mr.Murugesh S</p>
                                    <p className='Co-ordinators-Number'>9345634014</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DevelpedBy'>
                <p>Developed By</p>
            </div>
        </section>
    )
}