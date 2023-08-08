import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from  "../../assets/5.png"
import img2 from  "../../assets/6.png"
import img3 from  "../../assets/client2.png"
import img4 from  "../../assets/cofounder.png"
import img5 from  "../../assets/advisory2.png"
const Testimonial = () => {
    return (

        <div className="App my-20">
        <header className="App-header">
          <h1 className='text-3xl font2 text-black'>Testimonials</h1>
          <Carousel
        
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3100}
      
      >
        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
            I rented a house from this website and I was very satisfied with the service. The house was clean, spacious and well-equipped. The landlord was friendly and helpful. I would recommend this website to anyone looking for a house to rent.
            </p>
          </div>
        </div>
        <div>
          <img src={img} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
            I rented a house from this website and I was very satisfied with the service. The house was clean, spacious and well-equipped. The landlord was friendly and helpful. I would recommend this website to anyone looking for a house to rent.
            </p>
          </div>
        </div><div>
          <img src={img4} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
            I rented a house from this website and I was very satisfied with the service. The house was clean, spacious and well-equipped. The landlord was friendly and helpful. I would recommend this website to anyone looking for a house to rent.
            </p>
          </div>
        </div><div>
          <img src={img5} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
            I rented a house from this website and I was very satisfied with the service. The house was clean, spacious and well-equipped. The landlord was friendly and helpful. I would recommend this website to anyone looking for a house to rent.
            </p>
          </div>
        </div>

        <div>
          <img src={img} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            This website made my house hunting easy and convenient. I found a house that matched my budget and preferences in no time. The website was user-friendly and secure
            </p>
          </div>
        </div>

        <div>
          <img src={img2}/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Banker</h4>
            <p>
            This website is the best place to find a house to rent. The website offers a wide range of houses to choose from, with detailed descriptions and photos. 
            </p>
          </div>
        </div>
      </Carousel>
        </header>
      </div>
      
    );
};

export default Testimonial;