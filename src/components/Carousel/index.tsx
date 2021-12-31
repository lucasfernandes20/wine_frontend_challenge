import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const banners = [
  './banner_desconto_wine.png',
  './banner_goodVibes_wine.png',
  './banner_tendencias_wine.png',
  './banner_wine.png'
]

const CarouselBanner: React.FC = () => {
  return (
    <Carousel
      autoPlay={true}
      dynamicHeight={true}
      infiniteLoop={true}
      showThumbs={false}
    >
      {banners.map(banner => (
        <div key={banner}>
          <img src={banner} alt="banner promocional wine" />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselBanner
