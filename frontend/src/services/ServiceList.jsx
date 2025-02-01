import React from 'react'
import ServiceCard from './ServiceCard';

import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServicesData =[
    {                    //methn enter krn details tik ServiceCard eke display karnva
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc:"Get Real-Time Weather Updates for Your Destination.Update your tour weather and best.",

    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc:"Experience the best with expert recommendations and seamless travel planning.",

    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc:"Experience the best with expert recommendations and seamless travel planning.",

    },
    
]
const ServiceList = () => {
  return (
    <>
             {ServicesData.map((item,index) =>(
                <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
                    <ServiceCard item={item}  />
                </Col>
             ))}
  </>
  )
}

export default ServiceList







//ServiceList.jsx import krnn oni home page ekt