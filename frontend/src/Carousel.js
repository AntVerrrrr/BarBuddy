import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/style.css';
import LoginModal from './Login/LoginModal';
import Navbar from './Components/Navbar.js'

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
  const navigate = useNavigate();
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

  const navigateToSpirits = () => {
    navigate('/spirits'); // '/spirits'는 양주 페이지의 경로입니다.
  };

  const navigateToCocktails = () => {
    navigate('/cocktails'); // '/cocktails'는 칵테일 조리법 페이지의 경로입니다.
  };

  const navigateToBars = () => {
    navigate('/bars'); // '/bars'는 술집 페이지의 경로입니다.
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
   
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
              Bar Buddy는 양주와 칵테일을 사랑하는 이들을 위한 온라인 플랫폼입니다.
              우리는 위스키, 진, 보드카 등의 다양한 양주에 관한 정보를 제공하고, 
              집에서 손쉽게 만들 수 있는 다양한 칵테일 레시피를 공유합니다.
              또한 커뮤니티를 통해 양주와 칵테일에 대한 이야기를 자유롭게 나눌 수 있는 공간을 제공하여,
              주류 문화를 즐기는 이들끼리의 소통과 교류를 이끌어냅니다. 
              우리의 서비스를 통해 여러분의 주류 여정이 더욱 풍부하고 즐거워지길 바랍니다.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-briefcase" />
                </div>
                <h4 className="title">
                  <a href="">다양한 양주의 정보</a>
                </h4>
                <p className="description">
                  각종 주류의 알콜도수, 바디감, 향과 맛 등등 정보들을 제공합니다
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-card-checklist" />
                </div>
                <h4 className="title">
                  <a href="">각종 칵테일 레시피 공유</a>
                </h4>
                <p className="description">
                  집에서 간단하게 먹을 수 있는 칵테일 부터, 난이도가 어려운 칵테일까지
                  여러가지 칵테일의 레시피를 공유하고 경험해보세요
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-bar-chart" />
                </div>
                <h4 className="title">
                  <a href="">자유로운 평가</a>
                </h4>
                <p className="description">
                  각종 양주와 칵테일 레시피들에 대한 개인의 자유로운 평가를 해보세요
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-binoculars" />
                </div>
                <h4 className="title">
                  <a href="">주류 구매 정보 공유</a>
                </h4>
                <p className="description">
                  다양한 지역에서 값싸게 주류를 구매할 수 있는 정보 공유해보세요
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-brightness-high" />
                </div>
                <h4 className="title">
                  <a href="">적극적인 의견 교환</a>
                </h4>
                <p className="description">
                  주류, 칵테일 정보 글에서 다른 사람들과의 의견을 댓글로 교류해보세요ㄴ
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-calendar4-week" />
                </div>
                <h4 className="title">
                  <a href="">자유로운 커뮤니티</a>
                </h4>
                <p className="description">
                  주류 이야기 말고 다른 자유로운 주제로 커뮤니티를 이용해보세요
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
              자주 묻는 질문(FAQ) 파트에서는 사용자들이 자주 문의하는 내용에 대한 답변을 제공합니다.
              이 곳에서는 양주와 칵테일에 관한 정보, 서비스 이용 방법, 커뮤니티 참여 방법 등 
              다양한 주제에 대해 답변하고 있습니다.
              여기서 답을 찾지 못한 궁금한 사항이 있다면 언제든지 문의해 주세요.
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
                    이 웹사이트는 무엇을 제공하나요?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    저희 웹사이트는 양주와 칵테일을 사랑하는 이들을 위한 정보 및 커뮤니티 플랫폼입니다.
                    다양한 양주 정보, 칵테일 레시피 등의 정보를 제공하여 사용자들의 주류 문화 경험을 풍부하게 만들어 줍니다.
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
                    어떻게 칵테일을 만들 수 있나요?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    저희 웹사이트에는 집에서 손쉽게 만들 수 있는 다양한 칵테일 레시피가 있습니다.
                    각 레시피에는 필요한 재료와 조리법이 자세히 안내되어 있습니다.
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
                    양주와 칵테일 외에 다른 주제에 대해 토론할 수 있나요?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    네, 물론입니다! Bar Buddy는 주류와 칵테일 이야기뿐만 아니라 
                    자유롭게 다양한 주제에 대해 토론하고 이야기할 수 있는 공간입니다.
                    생활 팁, 취미 활동, 일상 이야기 등 다양한 주제를 다루며 
                    사용자들끼리의 소통과 교류를 즐기는 곳입니다.
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
                    어떻게 커뮤니티에 참여할 수 있나요?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    저희 커뮤니티는 누구나 자유롭게 참여할 수 있습니다. 
                    회원 가입 후, 양주 및 칵테일에 대한 이야기를 나누거나 
                    다른 사용자와 의견을 공유할 수 있습니다.
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
                    웹사이트에 관련된 문의사항이나 제안사항이 있을 때 어떻게 연락할 수 있나요?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    웹사이트에 관련된 모든 문의사항이나 제안사항은 연락 페이지를 통해 보내주시면 신속하게 처리해 드리겠습니다.
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
                  <h3>BarBuddy</h3>
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
