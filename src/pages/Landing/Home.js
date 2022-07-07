import React, { useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import Footer from "../../shared/layouts/Footer";
import phoneGroup from "../../shared/assets/icon/phones-group.svg";
import phone from "../../shared/assets/icon/iPhone.svg";
import stepone from "../../shared/assets/icon/step1.svg";
import steptwo from "../../shared/assets/icon/step-2.svg";
import stepthree from "../../shared/assets/icon/step3.svg";
import car from "../../shared/assets/icon/car.svg";
import clock from "../../shared/assets/icon/clock.svg";
import settings from "../../shared/assets/icon/settings.svg";
import check from "../../shared/assets/icon/check.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Container>
        <div className="container_wrapper">
          <Row>
            <Col lg={6} md={6}>
              <div
                className="hero_section-wrapper"
                data-aos="flip-right"
                data-aos-duration="3000"
              >
                <div>
                  <h3 className="hero_section-wrapper-h3">
                    Compare & book ride-hailing providers{" "}
                  </h3>
                </div>
                <div>
                  <p className="hero_section-wrapper-para paragraph">
                    Save money and time with WhichrRide. Think Compare the
                    market but for taxis.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} data-aos="flip-left">
              <div className="hero_section-wrapper">
                <img src={phoneGroup} className="hero_section-right" />
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col
            lg={12}
            className="about_section"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <Col lg={12}>
              <div className="about_section-inner">
                <h3 className="about_section-inner-h3">
                  Whichride brings together multiple ride hailing providers and
                  local taxi firms in one app
                </h3>
                <p
                  className="default_font about_section-inner-para"
                  id="paragraph-2"
                >
                  Allowing riders to select the provider that offers the best
                  price, service or travel time, then seamlessly book within the
                  app
                </p>
              </div>
            </Col>
            <section
              className="howitworks-section"
              data-aos="flip-down"
              data-aos-duration="3000"
            >
              <Row>
                <Col lg={5} md={4}>
                  <div className="howitworks-section_image-container">
                    <img src={phone} />
                  </div>
                </Col>
                <Col lg={6} md={8} className="about_section-inner-steps-list">
                  <div className="about_section-inner-steps">
                    <ul className="about_section-inner-ul">
                      <li className="about_section-inner-list">
                        <div className="about_section-inner-list-icon_wrap">
                          <img src={stepone} className="icons" />
                        </div>
                        <div className="about_section-inner-list-wrap">
                          <h3 className="about_section-inner-list-h3s">
                            Enter Location
                          </h3>
                          <h5 className="about_section-inner-list-h5s default_font">
                            Enter your destination to see a list of taxi
                            providers near you.
                          </h5>
                        </div>
                      </li>
                      <li className="about_section-inner-list">
                        <div className="about_section-inner-list-icon_wrap">
                          <img src={steptwo} className="icons" />
                        </div>
                        <div className="about_section-inner-list-wrap">
                          <h3 className="about_section-inner-list-h3s">
                            Find the perfect ride
                          </h3>
                          <h5 className="about_section-inner-list-h5s default_font">
                            Filter results by driver rating, driver sex, waiting
                            times, price or speed. Reduce carbon footprint by
                            only showing hybrid or electric cars.
                          </h5>
                        </div>
                      </li>
                      <li className="about_section-inner-list">
                        <div className="about_section-inner-list-icon_wrap">
                          <img src={stepthree} className="icons" />
                        </div>
                        <div className="about_section-inner-list-wrap">
                          <h3 className="about_section-inner-list-h3s">
                            Pay and Save
                          </h3>
                          <h5 className="about_section-inner-list-h5s default_font">
                            Once you select a ride, we search the web for
                            coupons to get you an even better deal, then book
                            seemlessly within our app and earn points while you
                            ride.
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
        <section className="nudge_section-main">
          <Row>
            <Col lg={12} sm={12} className="nudge_section">
              <header className="nudge_section-header" data-aos="zoom-in">
                Why WhichRide
              </header>
              <Row className="nudge_row">
                <Col
                  lg={6}
                  sm={12}
                  className="nudge_section-left"
                  data-aos="zoom-out"
                  data-aos-duration="3000"
                >
                  <div className="nudge_section-left-inner">
                    <div className="nudge_section-wrapper">
                      <img src={car} className="icons" />
                      <h5 className="nudge_section-h5s">More choices</h5>
                      <p className="nudge_section-paragraphs">
                        WhichRide lets you compare pricing across the major
                        rideshares so you can save money on every ride.
                      </p>
                    </div>
                    <div className="nudge_section-wrapper">
                      <img src={clock} className="icons" />
                      <h5 className="nudge_section-h5s">More choices</h5>
                      <p className="nudge_section-paragraphs">
                        WhichRide lets you compare pricing across the major
                        rideshares so you can save money on every ride.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={6}
                  sm={12}
                  className="nudge_section-right"
                  data-aos="zoom-out"
                  data-aos-duration="3000"
                >
                  <div className="nudge_section-right-inner">
                    <div className="nudge_section-wrapper">
                      <img src={settings} className="icons" />
                      <h5 className="nudge_section-h5s">More choices</h5>
                      <p className="nudge_section-paragraphs">
                        WhichRide lets you compare pricing across the major
                        rideshares so you can save money on every ride.
                      </p>
                    </div>
                    <div className="nudge_section-wrapper">
                      <img src={check} className="icons" />
                      <h5 className="nudge_section-h5s">More choices</h5>
                      <p className="nudge_section-paragraphs">
                        WhichRide lets you compare pricing across the major
                        rideshares so you can save money on every ride.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
