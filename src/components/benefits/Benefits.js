import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPath from "gsap/MotionPathPlugin"
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax, TweenLite, Power1 } from "gsap/all";
import ScrollMagic from 'scrollmagic';
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BenefitsImg_1 from '../../assets/images/img-4.jpg';
import './Benefits.css';
import $ from 'jquery';

export const Benefits = () => {
    const benefits = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const controller_3 = new ScrollMagic.Controller();
        var t2 = new gsap.timeline();
        var t3 = new gsap.timeline();

        var t4 = new TimelineMax();
        var t5 = new TimelineMax();

        
        gsap.from("#b_c_1",{
            scrollTrigger:"#b_c_1",
            x:-300,
            opacity:0,
            duration: 2,
            stagger: 0.25,
            autoAlpha:0,
            
        });
        gsap.from("#b_c_2",{
            scrollTrigger:"#b_c_2",
            x:300,
            opacity:0,
            duration: 2,
            stagger: 0.25,
            autoAlpha:0,
        });
        gsap.from("#b_c_3",{
            scrollTrigger:"#b_c_3",
            x:-300,
            opacity:0,
            duration: 2,
            stagger: 0.25,
            autoAlpha:0,     
        });
    
    },[])


    return (
        <section className="benefits" id="benefits">
            <Container>
                <Row>
                    <Col md={12}  className="benefits__col" id="b_c_1">
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                                <Col md={4}>
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                                <Col md={8}>
                                    <h2>Benefits Genesis Holders</h2>
                                    <ul>
                                        <li>1,000 generation genesis Cyber hippoz</li>
                                        <li>Ultra-rare characters and utilities</li>
                                        <li>Yield rewards Legendary genesis – 10 CHPG tokens daily</li>
                                        <li>Yield rewards genesis – 6 CHPG tokens daily</li>
                                        <li>Free cyberhippoz airdropped to holders (during public mint)</li>
                                        <li>Vip access and free membership to future events and clubhouses (physical and virtual)</li>
                                        <li>White list guarantee for future related projects</li>
                                        <li>Exclusive merchandise only for genesis holders</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={12}  className="benefits__col" id='b_c_2'>
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                            <Col md={4} className="mobile-only">
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                            <Col md={8}>
                                    <h2>Benefits Holders Emperors</h2>
                                    <ul>
                                        <li>1,000 Generation Emperors Cyberhippoz</li>
                                        <li>Rare characters and utilities</li>
                                        <li>Exclusive merchandise only for emperors holders</li>
                                        <li>Vip access and free membership to future events and clubhouses (physical and virtual)</li>
                                        <li>NFT airdrops for Random emperor holders</li>
                                        <li>Whitelist opportunities into projects from partners and collabs</li>
                                    </ul>
                                </Col>
                                <Col md={4} className="desktop-only">
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>

                    <Col md={12}  className="benefits__col" id='b_c_3'>
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                            <Col md={4}>
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                            <Col md={8}>
                                    <h2>Benefits Holders Communers</h2>
                                    <ul>
                                        <li>7,000 generation communers cyberhippoz</li>
                                        <li>Still really dope characters with nice gadgets</li>
                                        <li>Free membership and access to all upcoming clubhouses and events (virtual and physical)</li>
                                        <li>First priority for merchandise orders and</li>
                                        <li>Whitelist opportunities into projects from partners and collabs</li>
                                    </ul>
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="overlay overlay-2"></div>
        </section>
    )
}
