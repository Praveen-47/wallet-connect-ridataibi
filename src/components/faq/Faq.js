import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Faq.css';
import { ExpandMore } from '@mui/icons-material';
import $ from 'jquery';
import { IconButton } from '@mui/material';

export const Faq = () => {
    
    

    const expandMoreHandler =  (e) => {
        let id = e.target.id;

    let buttons = [...$(".expandButton")];
    let answers = [...$(".faq__answer")];
    let answer = answers.find(el=>el.id===id);
    let questions = [...$(".faq__question")]
    let button = buttons.find(el=>el.id===id);
    let question = questions.find(el=>el.id===id);

    $(question).toggleClass('mg-b');
    $(button).toggleClass("expandButtonAnimation");
    $(answer).toggleClass("expand");

    console.log(button,answer,question);
        
    }



    return (
        <section className="faq" id="faq">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="uppercase h2">Frequently asked questions</h2>
                    </Col>
                    <Col md={12} className="faq__container">
                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="1">How can I buy a Cyber Hippoz?</h4>
                            <IconButton >
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="1"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="1">
                            <p>
                            The mint page will be launched when the sales start. Official dates are released on the announcement pages in discord.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="2">What is the difference between the genesis, emperors and commoners Cyber Hippoz?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="2"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="2">
                            <p>
                            Genesis are the most specials collection with special traits. This collection is  manually created NFT. And have special benefits like royalties and whitelist guarantee of upcoming event. The emperors and commoners Cyber Hippoz collection are computer generated. Emperors have special benefits like exclusive privilege’s to merchandise.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="3">What are the rarities?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="3"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="3">
                            <p>
                            All the Cyber Hippoz rarities will be revealed after the Open Sea listing.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="4">What is the mint price?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="4"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="4">
                            <p>
                            	0.07 for genesis holders private sale <br/>
                            	0.1 for pre sale emperors <br/>
                            	0.15 for public sale commoners collection <br/>

                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="5">When is the reveal?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="5"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="5">
                            <p>
                            24 hours after the mint

                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="6">What are the royalties?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="6"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="6">
                            <p>
                            We charge 4 % royalties for the team development, 3,5 % royalties are distributed to genesis holders and  Open Sea charges 2.5 commission on alle sales. In total 10% commission.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="7">How many Cyber Hippoz are reserved?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="7"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="7">
                            <p>
                            100 Cyber Hippoz are reserved for Genesis holders, and 150 Cyber Hippoz are reserved for marketing events, collabs and giveaways
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question" >
                            <h4 onClick={expandMoreHandler} id="8">What are the benefits of owning a Cyber Hippo?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="8"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="8">
                            <p>
                            Owning a Cyber Hippo NFT granting access as a membership token to our club. Holders will have benefits to merchandise, future projects, raffles, lotteries and much more. Holders will be investing in a project that will be a catalyst in the NFT space for projects. The Cyber Hippo project will create more and more utilities along the way like staking, creating an own token for the ecosystem and much more. We will create an NFT brand with news websites, marketplaces, clubhouses.  This is your ticket in to a dope project
                            </p>
                        </div>
                        <hr />
                    </Col>
    
                </Row>
            </Container>
        </section>
    )
}
