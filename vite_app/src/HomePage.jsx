
import './style.css'

import img3 from './img/Slider-1.png' 
import img4 from './img/Desktop - 4.png'
import img5 from './img/Desktop - 5.png'
import img6 from './img/Desktop - 6.png'
import img7 from './img/Desktop - 7.png'
import img8 from './img/Insta.png'
import img9 from './img/googleplay.png'
import img10 from './img/appstore.png'
import img11 from './img/porter_logo_v3.png'
import img12 from  './img/arrow-icon.png'
import img13 from './img/party-popper-svgrepo-com.svg'
import img14 from './img/right_arrow.svg'


function HomePage() {

  return (            
    <>
 

   <div className="nav">
        <div className="nav1">
            <img className="logo"
                src="https://dom-website-prod-cdn-web.porter.in/public/images/common/10-year-logo.svg" alt=""></img>
        </div>
       


        <div className="nav1 nav3">
            <div className="nav2">
                <p className="p1">For Enterprise</p>
            </div>
            <div className="nav2">
                <p className="p2">Delivery Partners</p>
            </div>
        </div>


        <div className="nav1" style={{margintop: "2.5vh"}}>
            <div className="p3">Support</div>
        </div>

        </div>

        <div className="bg">
        
    </div>
    <span className="head">
        <div className="logo2">
            <img src="https://dom-website-prod-cdn-web.porter.in/public/images/common/10-year-banner.svg" alt=""></img>
        </div>

        <div className="button">
            <div className="button2">
                <p style={{margintop: "-2vh",paddingtop: "1.2vh",fontfamily: "Titillium Web sans-serif",fontweight: "600",fontsize: "1rem"}}>Read our story</p>
            </div>
      </div>

    </span>
      
    <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/common/location/location-picker-v2.svg"
        alt="" className="location"></img>
    <div className="container">
        <div className="child"><img src="https://dom-website-prod-cdn-cms.porter.in/2_wheelers_274869b2af_7262e4dde4.webp"
                alt="" className="two_wheelers"></img>
            <p className="two">Two Wheelers</p>
        </div>
        <div className="child"><img src="https://dom-website-prod-cdn-cms.porter.in/trucks_293a94a860_cc4b2d6d06.webp"
                alt="" className="two_wheelers"></img>
            <p className="trucks">Trucks</p>
        </div>
        <div className="child"><img src="https://dom-website-prod-cdn-cms.porter.in/Pn_M_56aa8e7af2_4b05aeef37.webp" alt=""
                className="two_wheelers"></img>
            <p className="packers">Packers & Movers</p>
        </div>
        <div className="child"><img
                src="https://dom-website-prod-cdn-cms.porter.in/all_india_courier_service_3b0f4df07f.webp" alt=""
                className="two_wheelers"></img>
            <p className="all">All India <br></br> Parcel</p>
        </div>
        <div className="child1">
            <p className="get">Get an<br></br>estimate</p>
            <p className="take">(takes ~2 mins)</p><img src={img14} alt="" className="arrow"></img>
        </div>
    </div>
     <div className="ser">
        <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/home/section-header-wave.svg" alt=""
            className="design"></img>
        <span className="services">OUR SERVICES</span>
        <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/home/section-header-wave.svg" alt=""
            className="design2"></img>
    </div>
    <div className="container2">
        <div className="child2 b1">
            <div className="b11">
                <p className="api">API Integrations</p>
            </div>
            <p className="auto">Automate your <br></br> deliveries by<br></br> Integrating our APIs</p>
            <div className="arrow">
                <img src={img14} alt="" className="arr"></img>
            </div>
        </div>

        <div className="child2 b2">
            <div className="b12">
                <p className="api">2 Wheelers</p>
            </div>
            <p className="instant">Instant delivery for<br></br> up to 20 kgs</p>
            <div className="arrow">
                <img src={img14} alt="" className="arr"></img>
            </div>
        </div>

        <div className="child2 b3">
            <div className="b13">
                <p className="api">Trucks</p>
            </div>
            <p className="auto">Hassle-free goods delivery up to 2500 <br/> kgs.</p>
            <div className="arrow">
                <img src={img14} alt="" className="arr"></img>
            </div>
        </div>

        <div className="child2 b4">
            <div className="b14">
                <p className="api">Packers & Movers</p>
            </div>
            <p className="house">House shifting hai?<br></br> Ho Jayega</p>
            <div className="arrow">
                <img src={img14} alt="" className="arr"></img>
            </div>
        </div>

        <div className="child2 b5">
            <div className="b15">
                <p className="api">Porter for enterprice</p>
            </div>
            <p className="auto">Streamlining <br></br> logistics to drive<br></br>business growth</p>
            <div className="arrow">
                <img src={img14} alt="" className="arr"></img>
            </div>
        </div>

        <div className="child2 b6">
            <div className="b16">
                <p className="api">Courier Service</p>
            </div>
            <p className="auto">Guaranteed<br></br> Doorstep Pickup & <br></br> Delivery</p>
            <div className="arrow">
                <img src={img14} alt="" className="arr"></img>
            </div>
        </div>
    </div>

   <div className="container3">
        <div className="child31">
            <p className="and">And thanks to you, we are growing each &<br/> every day!</p>
        </div>

        <div className="child32">
            <img src={img13} alt="" className="celebration"></img>
            <p className="marhaba">Marhaba Dubai! We're now live & ready to take care of all your logisitical needs.</p>
        </div>
        <div className="container31">
            <div className="child33">
                <p className="plus">20+</p>
                <p className="cities">Cities</p>
            </div>

            <div className="child33 temp">
                <p className="plus">5 Lakh+</p>
                <p className="cities">Driver Partners</p>
            </div>

            <div className="child33 temp1">
                <p className="plus">1 Crore+</p>
                <p className="cities">Customers</p>
            </div>

            <div className="child33">
                <p className="plus">10 Crore+</p>
                <p className="cities">Trips</p>
            </div>
        </div>
        <img src="https://dom-website-prod-cdn-cms.porter.in/porter_india_v3_847f077bba_639cd5ce3a.webp" alt=""
            className="map"></img>

        <p className="we2">We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata,
            Surat, Chennai, Coimbatore, Indore,<br></br> Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, Nashik and
            Kanpur.
        </p>
        <div className="ser">
            <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/home/section-header-wave-light.svg"
                alt="" className="design3"></img>
            <span className="some">SOME WORDS FROM OUR HAPPY CUSTOMERS!</span>
            <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/home/section-header-wave-light.svg"
                alt="" className="design2"></img>
        </div>
        <div className="container32">
            <div className="child34">
                <div className="child341">
                    <img src="https://dom-website-prod-cdn-cms.porter.in/profile_pic_1_d8dfbc2a0e_1b31c25460.png" alt=""
                        className="photo"></img>
                    <p className="vinay">Vinay</p>
                    <p className="vinay2">Trucks,5.0 <img
                          src="https://dom-website-prod-cdn-web.porter.in/public/images/common/rating_star.svg" alt=""
                            className="star"></img><br></br> Nagpur</p>
                </div>
                <p className="way">“Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can
                    now safely focus on my business growth. Amazing service!”</p>
            </div>

            <div className="child34">
                <div className="child341">
                    <img src="https://dom-website-prod-cdn-cms.porter.in/profile_pic_2_b5211b5ba2_781bcaf609.png" alt=""
                        className="photo"></img>
                    <p className="vinay">Dinesh</p>
                    <p className="dinesh2">Trucks,4.0 <img
                            src="https://dom-website-prod-cdn-web.porter.in/public/images/common/rating_star.svg" alt=""
                            className="star"> </img><br></br> Mumbai</p>
                </div>
                <p className="way">“Excellent service by multiple drivers. I own a business and do multiple shiftings.
                    Rather than ask local drivers and bargain every time, I use porter which fulfils all my need. Thanks
                    a lot!”</p>
            </div>

            <div className="child34">
                <div className="child341">
                    <img src="https://dom-website-prod-cdn-cms.porter.in/profile_pic_3_a7a672e59c_70d87cc5ed.png" alt=""
                        className="photo"></img>
                    <p className="vinay">Ashok</p>
                    <p className="dinesh2">Trucks,5.0 <img
                            src="https://dom-website-prod-cdn-web.porter.in/public/images/common/rating_star.svg" alt=""
                            className="star"></img> <br /> Delhi NCR</p>
                </div>
                <p className="way">“Have had an amazing experience. Had three successful deliveries where it's a struggle to
                    arrange a tempo service for your desired pickup and drop off. Must try this app!”</p>
            </div>

            <div className="child34">
                <div className="child341">
                    <img src="https://dom-website-prod-cdn-cms.porter.in/S_26200ce58f.svg" alt="" className="photo"></img>
                    <p className="vinay">Syamantak Mitra</p>
                    <p className="Syamantak_Mitra2">Trucks,5.0 <img
                            src="https://dom-website-prod-cdn-web.porter.in/public/images/common/rating_star.svg" alt=""
                            className="star"></img> <br/> Delhi NCR</p>
                </div>
                <p className="way">“Smooth experience with Porter's packers and movers! The team was fantastic, handling
                    every detail. Highly recommend their services!“</p>
            </div>

        </div>


        <div className="slide1">
            <div className="slide1">
                <section className="img-slider5">
                    <div className="slider-container5">
                        <div className="slide5">
                            <img src={img3} alt=""></img>
                        </div>
                        <div className="slide5">
                            <img src={img4} alt=""></img>
                        </div>
                        <div className="slide5">
                            <img src={img5} alt=""></img>
                        </div>
                        <div className="slide5">
                            <img src={img6} alt=""></img>
                        </div>
                        <div className="slide5">
                            <img src={img7} alt=""></img>
                        </div>
                    </div>
                </section>
            </div>
        </div>


        <br/><br/><br /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="container33">
            <p className="faqs">Frequently Asked Questions</p>
            <p className="in">In case you have more questions, feel free to reach out to us.</p>

            <p className="what">What is Porter App? <img src={img12} alt="" className="arrow2"></img></p>
            <p className="what">How do I use Porter App? <img src={img12} alt="" className="arrow3"></img> </p>
            <p className="what">How do I book a tempo/mini truck/bike or intercity courier services online from the Porter
                app?<img src={img12} alt="" className="arrow4"></img></p>
            <p className="what">Does Porter provide intercity or interstate service?<img src={img12} alt=""
                    className="arrow5"></img></p>
            <p className="what">What are the charges for a Porter truck and Porter bike delivery service? <img
                    src={img12} alt="" className="arrow6"></img></p>
            <p className="what">Does Porter provide Packers and Movers services?<img src={img12} alt=""
                    className="arrow7"></img></p>
            <p className="what">What does Porter deliver?<img src={img12} alt="" className="arrow8"></img></p>
            <p className="what">How long does it take to deliver?<img src={img12} alt="" className="arrow9"></img></p>
            <p className="what">Does Porter provide mini trucks like tata ace on monthly contract?<img
                    src={img12} alt="" className="arrow10"></img></p>
            <p className="what">How does an API Integration with Porter work?<img src={img12} alt=""
                    className="arrow11"></img></p>
            <p className="what">How does an API integration solve business problems?<img src={img12} alt=""
                    className="arrow12"></img></p>
            <p className="what">What vehicle categories are available via the APIs?<img src={img12} alt=""
                    className="arrow13"></img></p>
        </div>
        <div className="footer">
            <div className="container34"><img src={img11} alt="" className="logof"></img>
                <p className="send">Send anything,<br/>anywhere, <br/>anytime</p>
            </div>
            <div className="container34">
                <p className="company">Company</p>
                <p className="about">About Us <br/>Careers <br/>Blog</p>
            </div>
            <div className="container34">
                <p className="quick">Quick Links</p>
                <p className="tools">Services <br/>Tools <br/>API Integrations <br/>Courier <br/>Packers & Movers <br/>Two
                    Wheelers <br/>Trucks <br/>Porter For Enterprise</p>
            </div>
            <div className="container34">
                <p className="support">Support</p>
                <p className="contact">Contact Us <br/> Privacy Policy<br/>Terms of Service <br/> Insurance FAQs<br/> Driver
                    Partner Terms & Conditions <br/> Zero Tolerance Policy</p>
            </div>
            <div className="container34"><img src={img9} alt="" className="google"></img><img src={img10} alt=""
                    className="app"></img></div>
        </div>
        <p className="we">We are here</p>
        <div className="footer2">
            <div className="container35">
                <p className="delhi">Delhi NCR <br/> Chandigarh <br/> Ahmedabad <br/> Coimbatore</p>
            </div>
            <div className="container35">
                <p className="delhi">Hyderabad <br/> Jaipur <br/> Surat <br/> Ludhiana</p>
            </div>
            <div className="container35">
                <p className="delhi">Bangalore <br/> Cheenai <br/> Nagpur <br/> Kochi</p>
            </div>
            <div className="container35">
                <p className="delhi">Mumbai <br/> Kolkata <br/> Lucknow <br/> Nashik</p>
            </div>
            <div className="container35">
                <p className="delhi">Vadodara <br/> Indore<br/> Pune <br/>Kanpur</p>
            </div>
        </div>
        <div className="footer3">
            <div className="icons"><img src={img8} alt="" className="insta"></img></div>
            <div className="icon">
                <p className="copy"> 2024 SmartShift Logistics Solutions Pvt. Ltd. | CIN: U74999MH2014PTC306120</p>
            </div>
        </div>
    </div>
          
   
 
        
    </>   
  )
}

export default HomePage
