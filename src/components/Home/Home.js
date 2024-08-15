import React from 'react';
import hometaxi from '../images/hometaxi.jpg';
import safety from '../images/homebg.png';
import group1 from '../images/group1.jpg';
import group2 from '../images/group2.jpg';
import group3 from '../images/group4.jpg';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import driver1 from '../images/driver1.png';
import driver2 from '../images/driver2.jpg';
import driver3 from '../images/driver3.jpg';

const Home = () => {
    return (
        <div className="home-body-container">
            <div className="home-body-div">
                <div className="home-carousel-container">
                    <Carousel
                        className="home-carousel"
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                        showIndicators={false}
                    >
                        
                        <div>
                            <img src={group1} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={group2} alt="Slide 2" />
                        </div>
                        <div>
                            <img src={group3} alt="Slide 3" />
                        </div>
                    </Carousel>
                </div>
                
                <div className="home-transparent-layer"></div>
                <div className="home-text-overlay">
                    <h1><b>Jobs @ Share Ride</b></h1>
                    <p>Join us in exploring a world of endless opportunities. Let's find a spot for you.</p>
                    <h2>We pursue that "Seamless Speed and Convenience – Experience ShareRide!"</h2>
                </div>
            </div>

            <div className="home-second">
                <div className="home-row">
                    <div className="home-column">
                        <img className="home-taxi" src={safety} alt="Home Taxi" />
                    </div>
                    <div className="home-column-home">
                        <h2>Quick, Reliable, and On Time – That’s ShareRide for You!</h2>
                        <h1 className="home-heading">India’s largest bike<br></br> taxi service</h1><br></br>
                        <p className="home-paras">
                            Share Ride, India's pioneering bike taxi app, boasts over 25 million app downloads, making it the fastest-growing platform in its category. With operations expanding across more than 100 cities, ShareRide offers a convenient and efficient mode of transportation for millions. Users can quickly book a ride via the app, enjoying affordable fares and swift commutes. The company's innovative approach has revolutionized urban mobility, reducing traffic congestion and providing an alternative to traditional taxi services. Share Ride's success reflects its commitment to customer satisfaction and its ability to adapt to the dynamic needs of modern commuters. With a focus on safety and reliability, ShareRide continues to lead the way in the bike taxi industry in India.
                        </p>
                    </div>
                </div>
            </div>

            <div className="home-third">
                <div className="home-row">
                    <div className="home-column">
                        <h1 className="home-headings">Safety for all</h1>
                        <p className="home-para">
                            Ensuring safety while driving a bike or car involves a blend of proper gear, vehicle maintenance, and adherence to traffic rules. For bikers, wearing a helmet, gloves, and protective clothing is essential, alongside regular maintenance of tires, brakes, and lights. Visibility is crucial; thus, reflective gear and functional lights should be used, and defensive riding techniques, such as anticipating traffic and maintaining safe distances, are vital. Avoiding distractions like phone use is also important. For car drivers, wearing seatbelts is fundamental, and regular vehicle maintenance, including checking brakes, tires, and lights, is necessary.
                        </p>
                    </div>
                    <div className="home-column">
                        <img className="home-taxii" src={hometaxi} alt="Safety" />
                    </div>
                </div>
            </div>

            <div className="home-specific_list">
                <ul>
                    <li>Per kilometer Charge @ ₹12</li>
                    <li>
                        24 / 7 Services
                    </li>
                    <li>
                        <img width="36" height="36" src="https://servizman.com/assets/icons/trust-white.svg" alt="Trusted Technicians"/>
                        Expert Motorists
                    </li>
                </ul>
            </div>

            <div className="home-soon">
                <div className="home-man">
                    <img src={driver3} alt="Image 2" height="200" width="180"/>
                    <h4 className="home-hel">Doorstep Pick-Up</h4>
                    <p>We will pick you up from where you are and drop you exactly where you need to be.</p>
                </div>
                
                <div className="home-man">
                    <img src={driver2} alt="Image 3" height="200" width="180"/>
                    <h4 className="home-hel">Affordability</h4>
                    <p>No more latent prices and shocked reactions after seeing the final ride cost. We're here with the most affordable rides for all.</p>
                </div>

                <div className="home-man">
                    <img src={driver1} alt="Image 4" height="200" width="180"/>
                    <h4 className="home-hel">Quick Ride</h4>
                    <p>Trend setters of smart commute be it traffic or rush hours</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
