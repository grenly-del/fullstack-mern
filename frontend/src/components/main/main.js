import React from 'react'
import './main.css'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);



function Main() {
  return (
    <Swiper spaceBetween={50} pagination={{ clickable: false }} modules={[Autoplay]} autoplay={{delay: 3000}} className="main">
      <SwiperSlide className="main" style={{ backgroundImage: 'url("./bg-1.jpg")' }}>
        <main className="container" data-bg="./bg-3.jpg">
          <div className="content">
            <h1>This is Gallery and Todolist</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur officiis reiciendis, rerum debitis inventore.</p>
            <div className="btn">
              <a href="#">Click details...</a>
            </div>
          </div>
        </main>
      </SwiperSlide>
      <SwiperSlide className="main" style={{ backgroundImage: 'url("./bg-2.jpg")' }}>
        <main className="container" data-bg="./bg-2.jpg">
          <div className="content">
            <h1>This is Gallery and Todolist</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur officiis reiciendis, rerum debitis inventore.</p>
            <div className="btn">
              <a href="#">Click details...</a>
            </div>
          </div>
        </main>
      </SwiperSlide>
      <SwiperSlide className="main" style={{ backgroundImage: 'url("./bg-3.jpg")' }}>
        <main className="container" data-bg="./bg-3.jpg">
          <div className="content">
            <h1>This is Gallery and Todolist</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur officiis reiciendis, rerum debitis inventore.</p>
            <div className="btn">
              <a href="#">Click details...</a>
            </div>
          </div>
        </main>
      </SwiperSlide>
    </Swiper>
  );
}

export default Main