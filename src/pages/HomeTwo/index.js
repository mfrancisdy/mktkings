import React, { useState } from 'react';
import SliderAvatar from '../../assets/Images/Hometwo/image01.svg';
import ImgTwo from '../../assets/Images/Hometwo/_0001.svg'
import Imgthree from '../../assets/Images/Hometwo/_0006.svg'
import TimelineObserver from "react-timeline-animation";
import Timeline from "../../components/timeline";
import { Link } from '@reach/router';
import Tabs from "../../components/tabs";
import Accordion from "../../components/accordion";
import Modal from 'react-bootstrap/Modal';


export default function Home() {

    const [show, setShow] = useState(false);
    const [heading, SetHeading] = useState(false);
    const [bodytext, SetBodytext] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onCallback = () => {
    };

    const Setcontent = (props) => {
        if (props === "TL") {
            SetHeading("Telegram")
            SetBodytext("Our founders work with top tier call channels and can arrange discounted posts leading up to your launch. Organising calls with MarketKings™ is more effective than trying to organise them yourselves as we know the right telegrams to target.")
        } else if (props === "CMC") {
            SetHeading("Coinmarketcap")
            SetBodytext(`We can handle CMC/CG listings for projects incubated by us at the lowest rates on market. 
            We have handled CEX listings on Bitmart & CoinTiger and have connections with many major CEXs`);
        } else if (props === "DM") {
            SetHeading("Twitch")
            SetBodytext(`One of our most successful ways of marketing is through Mass dms. We go the extra mile by writing your content for you, and choosing the most effective telgrams for you to target. This includes recently successful Pinksale launches from the Pinksale leaderboard as well as telegrams within your tokens brand identity/niche.`)
        } else if (props === "TIK") {
            SetHeading("Tik tok")
            SetBodytext(`Over our work with some meme / fan tokens we have established relationships with some of the top, real finance TikTokers. These influencers have audiences that know how to contribute to presales / trade on PancakeSwap and with posts on TikTok your project has the potential to reach unlimited people with the right traction and promotion.`)
        } else if (props === "AMA") {
            SetHeading("AMAs")
            SetBodytext(`At the moment, AMA’s are only solid for community spirit. They don’t bring any buys / ROI so while we can help organise them for your project at discounted rates, we do not recommend them.`)
        } else if (props === "SHL") {
            SetHeading("Shilling")
            SetBodytext(`MKTKings has a shill army of over 100+ people who take time to understand the project and shill in the most effective way. This does not mean spamming the same shill message to chats where there are no investors, but targeting specific and relevant tweets and helping the project trend across all socials as well as reach parts of telegram where investors are waiting for the next gem.`)
        } else if (props === "TWITT") {
            SetHeading("Twitter")
            SetBodytext(`Twitter influencers are notoriously ineffective. We would only recommend working with the top, top influencers which we can connect large budget projects with. We recommend you avoid all ‘Giveaway’ twitter channels which are only beneficial if you care about member count.`)
        } else if (props === "YOUTUBE") {
            SetHeading("Youtube")
            SetBodytext(`We have connections with YouTube influencers that can make reviews on their projects no matter what your budget.`)
        }
        handleShow()
    }

    const Projects = () => {
        var elmntToView = document.getElementById("discover");
        elmntToView.scrollIntoView();
    }


    return (
        <>
            <section className='scroll1 hometop-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='scroll1Text'>
                                <h1>BEAR Market or BULL Market</h1>
                                <p>MarketKings™ is a development and marketing suite dedicated to helping EVM projects raise capital and provide utility to their token holders.</p>
                                <div className="row scroll1Count">
                                    <div className="col-md-6">
                                        <h5>$969,880</h5>
                                        <p>Money raised</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>45+</h5>
                                        <p> Contracts completed</p>
                                    </div>
                                </div>
                                <div className='row scroll1Btn'>
                                    <div className="col-6 col-md-6 p-0">
                                        <Link to="">
                                            <button onClick={Projects} className='btn btn-block exploreBtn'>Explore</button>
                                        </Link>

                                    </div>
                                    <div className="col-6 col-md-6 p-0">
                                        <a href="http://T.me/MKTKing" target="_blank">
                                            <button className='btn btn-block contactBtn'>Contact Us</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='scroll1Img'>
                                <img src={SliderAvatar} alt='img1' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='scroll2' id="discover">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='text-center' style={{ fontWeight: '700', lineHeight: '86px' }}>Marketing from MarketKings™</h2>
                            <p className='text-center'>MarketKings™ is a development and marketing suite dedicated to helping EVM projects raise capital and provide utility to their token holders.</p>
                        </div>
                    </div>

                    <div className='row socialIcons'>
                        <div className='col-md-12'>
                            <div className="row" style={{ justifyContent: 'center' }}>

                                <div onClick={() => Setcontent("TL")} className='iconBoxContainer col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/tgram.png' alt='telegram' />
                                    </div>
                                    <div className='iconBoxText'>Telegram</div>
                                </div>
                                <div onClick={() => Setcontent("CMC")} className='iconBoxContainer text-center col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/cmcap.png' alt='coinmarketcap' />
                                    </div>
                                    <div className='iconBoxText'>CoinMarketCap</div>
                                </div>
                                <div onClick={() => Setcontent("CMC")} className='iconBoxContainer text-center col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/coingecko.png' alt='coingecko' />
                                    </div>
                                    <div className='iconBoxText'>CoinGecko</div>
                                </div>
                                <div onClick={() => Setcontent("DM")} className='iconBoxContainer text-center col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/mass.png' alt='twitch' />
                                    </div>
                                    <div className='iconBoxText'>Mass dms</div>
                                </div>
                                <div onClick={() => Setcontent("TIK")} className='iconBoxContainer col-6 col-md-2 tiktok'>
                                    <div className='iconBox'>
                                        <img src='./img/tiktok.png' alt='tiktok' />
                                    </div>
                                    <div className='iconBoxText'>TIKTOK</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row socialIcons">
                        <div className="col-md-12">
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <div onClick={() => Setcontent("AMA")} className='iconBoxContainer text-center col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/question.png' alt='twitch' />
                                    </div>
                                    <div className='iconBoxText'>AMA's</div>
                                </div>

                                <div onClick={() => Setcontent("SHL")} className='iconBoxContainer text-center col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/shilling.png' alt='instgram' />
                                    </div>
                                    <div className='iconBoxText'>shilling</div>
                                </div>
                                <div onClick={() => Setcontent("TWITT")} className='iconBoxContainer col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/twitter.png' alt='twitter' />
                                    </div>
                                    <div className='iconBoxText'>Twitter</div>
                                </div>
                                <div onClick={() => Setcontent("YOUTUBE")} className='iconBoxContainer col-6 col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/youtube.png' alt='youtube' />
                                    </div>
                                    <div className='iconBoxText'>Youtube</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="scroll3" id="about">
                <div className="container">
                    <div className="row scroll3Row">
                        <div className='col-md-6 scroll3Img'>
                            <img src={ImgTwo} alt='img3' />
                        </div>
                        <div className='col-md-6 scroll3Col2'>
                            <h2 className='scroll3title'>Marketing Tactics we don’t employ, but could:</h2>
                            <p className='scroll3-p'>At the moment, AMA’s are only solid for community spirit. They don’t bring any buys / ROI so while we can help organise them for your project at discounted rates, we do not recommend them.
                                <br /><br />Twitter influencers are notoriously ineffective. We would only recommend working with the top, top influencers which we can connect large budget projects with. We recommend you avoid all ‘Giveaway’ twitter channels which are only beneficial if you care about member count.</p>
                        </div>
                    </div>
                    <div className="row scroll3Row" id="abouttwo">
                        <div className='col-md-6 scroll3Img only-mobile'>
                            <img src={Imgthree} alt='img3' />
                        </div>
                        <div className='col-md-6 scroll3Col2'>
                            <h2 className='scroll3title'>We turn your ideas into a reality within DeFi</h2>
                            <p className='scroll3-p'>We at MKTKings have our very own full-time development team. We are able to offer the most competitive rates and quickest turnover times in the space when it comes to creating DAPPs.</p>
                            <button className='btn scrollBtn'>Explore</button>
                        </div>
                        <div className='col-md-6 scroll3Img only-desktop'>
                            <img src={Imgthree} alt='img3' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='scroll4' id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center py-4 title'>Our Services</h2>
                            <p className='text-center'>These are some services we offer to both budding and existing projects. If you would like examples of each service just send us over an email, as we have plenty of examples!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <TimelineObserver
                                initialColor="#e5e5e5"
                                fillColor="linear-gradient(90deg, #D29449 31.64%, #FFD693 99.97%)"
                                handleObserve={(setObserver) => (
                                    <Timeline
                                        callback={onCallback}
                                        className="timeline"
                                        setObserver={setObserver}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='scroll5' id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center py-4 title'>DAPPs created from scratch</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Tabs />
                        </div>
                    </div>
                </div>
            </section>
            <section className='scroll6' id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center py-4 title faq'>Frequently asked questions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-layout"
            >
                <div className="modal-body-content">
                    <Modal.Header closeButton>
                        <Modal.Title><center>{heading}</center></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {bodytext}
                    </Modal.Body>
                </div>
            </Modal>

            {/* <section className="getmoreupdate-section">
                <div className="container">
                    <h1>Get More Updates</h1>
                    <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks </p>
                    <div className="row d-flex justify-content-center align-items-center subscribe">
                        <div className="col-md-8">
                            <div className="search position-relative">
                                <input className="form-control text-area" placeholder="Your Email" />
                                <button className="btn btn-primary position-absolute">I'm In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}