 import React from 'react'
 import '../styles/home.css'

 import { Container, Row, Col } from 'reactstrap';
 import heroImg from '../assets/images/hero-img01.jpg'
 import heroImg02 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from "../assets/images/experience.png";


import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
     
    {/*==========hero section start==========*/}

    <section>
            <Container>
               <Row>
                  <Col lg='6'>
                    <div className="hero_content">
                        <div className="hero_subtitle d-flex align-items-center ">
                             <Subtitle subtitle={'Explore. Dream. Discover.'}/>
                             <img src={worldImg} alt=""/>
                        </div>
                        <h1>
                        Explore the world, create memories, and live the{" "}
                          <span className="highlight">adventure</span>
                        </h1>

                        <p>
                        Embark on unforgettable journeys with us! Whether you're seeking serene beach getaways, thrilling adventures in the mountains, or immersive city explorations, we have tailored travel experiences just for you. Our mission is to provide you with the best destinations, handpicked deals, and expert travel tips to make your next trip extraordinary.
                        </p>
                    </div>
                  </Col>

      <Col ld='2'>
           <div className="hero__img-box">
           <img src={heroImg} alt=''/>

           </div>

      </Col>
      <Col ld='2'>
           <div className="hero__img-box hero__video-box mt-4">
           <video src={heroVideo} alt='' controls/>

           </div>

      </Col>
      <Col ld='2'>
           <div className="hero__img-box mt-5"> {/*mt-4 mt5 eken wenne photo ek tikk pllehnt wenv*/}
           <img src={heroImg02} alt=''/>

           </div>

      </Col>

      <SearchBar/>{/*searchBar.jsx file wenm hduw it psse methnt import krl enn one thanta <search/> dmm*/}
               </Row>
            </Container>
    </section>
  {/*==========hero section start==========*/}
<section>
    <Container>
        <Row>
             <Col lg='3'>
                 <h5 className="services__subtitle">What we serve</h5>
                 <h5 className="services__title">We offer our best services</h5>
             
             </Col>

        <ServiceList/>   {/*servicelist ek methnt dld tiyenne udin import krla*/}

        </Row>
    </Container>
</section>

{/* =========feature tour section start======== */}
 <section>
     <Container>
        <Row>
          <Col lg="12" className='mb-5'>
             <Subtitle subtitle={"Explore"}/>
             <h2 className='featured__tour-title'>Our featured tours</h2>
          </Col>

   <FeaturedTourList/>  {/*  tourdata eken gththdata tik featureList ekt gihin home ekt pass krnv home eken gnnv wge wdk wenne */}

        </Row>
     </Container>
 </section>
  
{/* =========feature tour section end======== */}

{/*========experience section start=========== */}
            <section>
                 <Container>
                   <Row>
                       <Col lg='6'>
                          <div className="experience__content">
                              <Subtitle subtitle={'Experience'}/>
                               <h2>With our all experience<br/>we will serve you</h2>
                          
                          <p>
                             Your best choice.
                            <br/>
                            Best Experinces.
                          </p>
                          </div>

                          <div className="counter__wrapper d-flex align-items-center gap-5">

                            <div className="counter__box">
                              <span>12k+</span>
                              <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                              <span>2k+</span>
                              <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                              <span>15</span>
                              <h6>Years experience</h6>
                            </div>

                          </div>
                       </Col>
                       <Col lg="6">
                          <div className="experience__img">

                              <img src={experienceImg} alt=''/>
                          </div>
                       </Col>
                   </Row>
                 </Container>
            </section>
{/*========experience section endm=========== */}


{/* ==========gallery section start========= */}

         <section>
            <Container>
                <Row>
                  <Col lg="12">
                     <Subtitle subtitle={"Gallery"}/>
                     <h2 className="gallery__title">
                      Visit our customers tour gallery
                     </h2>
                  </Col>

                  <Col lg ='12'>
                      <MasonryImagesGallery/> {/**Galler photo== */}
                  </Col>
                </Row>
            </Container>
         </section>
{/** =============gallery section end======== */}
{/** =============testimotial section start======== */}
        <section>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Fans Love'}/>
                  <h2 className="testimonial__title">What our fand say about us</h2>
               </Col>

               <Col lg='12'>
                   <Testimonials/>
               </Col>
            </Row>
        </section>
{/** =============testimotial section end======== */}
  <Newsletter/>
  </>
}
export default Home
;