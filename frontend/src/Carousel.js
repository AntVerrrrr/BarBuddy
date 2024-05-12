import React, { useState } from 'react';
import './assets/css/style.css';
import LoginModal from './Login/LoginModal';

import backgroundImage1 from './assets/img/slide/slide-1.jpg';
import backgroundImage2 from './assets/img/slide/slide-2.jpg';
import backgroundImage3 from './assets/img/slide/slide-3.jpg';

import './assets/vendor/animate.css/animate.min.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';

import './assets/vendor/bootstrap-icons/bootstrap-icons.css';

import './assets/vendor/boxicons/css/boxicons.min.css';

import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/glightbox/js/glightbox.min.js';

import './assets/vendor/isotope-layout/isotope.pkgd.min.js';

import './assets/vendor/php-email-form/validate.js';

import './assets/vendor/purecounter/purecounter_vanilla.js';

import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/swiper/swiper-bundle.min.js';



function Carousel() {

  const [activeSlide, setActiveSlide] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const slides = [
    {
      title: "우아한 향연, 술의 세계",
      description: "여기서는 품격 있고 세련된 주류 문화를 만끽하세요. 다양한 종류의 양주와 칵테일에 대한 정보를 공유하고, 새로운 맛을 탐험하는 여정을 함께 떠나보세요.",
      image: backgroundImage1
    },
    {
      title: "향취와 맛의 여행, Bar-Buddy",
      description: "여기서는 주류의 다채로운 맛과 향을 탐험하는 여정에 초대합니다. 새로운 음료에 대한 경험을 나누고, 집에서 만들 수 있는 다채로운 칵테일 레시피를 공유합니다.",
      image: backgroundImage2
    },
    {
      title: "함께 즐기는 주류 여행",
      description: "우리는 술을 좋아하고, 더 많이 알고 싶어하는 사람들의 모임입니다. 위스키의 깊은 풍미, 진의 특별한 향, 보드카의 깨끗한 맛. 우리는 이 모든 것을 사랑합니다. 새로운 음료에 대한 경험을 나누고, 함께 성장해 나가는 커뮤니티입니다.",
      image: backgroundImage3
    }
  ];

  const goToSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a>BAR-BUDDY</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" onClick={scrollToTop}>
                  Home
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" style={{ textDecoration: 'none' }} onClick={() => setShowLogin(true)}>
                  Get Started
                </a>
              </li>
              

            </ul>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              {slides.map((slide, index) => (
                <li
                  key={index}
                  className={index === activeSlide ? "active" : ""}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </ol>
            <div className="carousel-inner" role="listbox">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">{slide.title}</h2>
                      <p className="animate__animated animate__fadeInUp">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              role="button"
              onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
            >
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              role="button"
              onClick={() => goToSlide((activeSlide + 1) % slides.length)}
            >
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
              <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3>술꾼들의 놀이터, Bar-Buddy</h3>
                  <p>
                    당신의 양주와 칵테일 여정을 함께하는 이 공간은, 다양한 위스키, 진, 보드카 등과 함께 집에서 만들 수 있는 다채로운 칵테일 레시피를 공유하며, 함께 성장하는 주류 커뮤니티입니다.
                  </p>
                  <div className="row">
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-receipt" />
                      <h4>양주 정보 공유</h4>
                      <p>
                        위스키, 진, 보드카 등 다양한 양주에 대한 정보와 즐기는 방법을 나눕니다.
                      </p>
                    </div>
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-cube-alt" />
                      <h4>칵테일 레시피 공유</h4>
                      <p>
                        집에서 만들 수 있는 다양한 칵테일 레시피와 재료에 대한 이야기를 나눕니다.

                      </p>
                    </div>
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-images" />
                      <h4>바 정보 공유</h4>
                      <p>
                        세계 각지의 바와 술집 정보를 소개하고 추천합니다.
                      </p>
                    </div>
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-shield" />
                      <h4>자유로운 커뮤니티 주제</h4>
                      <p>
                        양주와 칵테일 이야기 외에도 자유롭게 토론할 수 있는 공간을 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-briefcase" />
                </div>
                <h4 className="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-card-checklist" />
                </div>
                <h4 className="title">
                  <a href="">Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-bar-chart" />
                </div>
                <h4 className="title">
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-binoculars" />
                </div>
                <h4 className="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-brightness-high" />
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-calendar4-week" />
                </div>
                <h4 className="title">
                  <a href="">Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                      volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                      magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec ultrices.
                      Fringilla phasellus faucibus scelerisque eleifend donec
                      pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                      ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Dolor sit amet consectetur adipiscing elit?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                      nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                      pellentesque eu tincidunt. Lectus urna duis convallis
                      convallis tellus. Urna molestie at elementum eu facilisis sed
                      odio morbi quis
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing commodo.
                      Dignissim suspendisse in est ante in. Nunc vel risus commodo
                      viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                      bibendum est. Purus gravida quis blandit turpis cursus in.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={400}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                      vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                      nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                      sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Frequently Asked Questions Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Groovin</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA
                    <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam noster
                  magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Groovin</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by Andong
          </div>
        </div>
      </footer>
      {/* End Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>

  );
}

export default Carousel;
