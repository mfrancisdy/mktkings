import React from "react";
import SliderAvatar from '../assets/Images/slider-avatar.svg'

export default function Home() {
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
                                        <p> Projects Done</p>
                                    </div>
                                </div>
                                <div className='row scroll1Btn'>
                                    <div className="col-md-6 p-0">
                                        <button className='btn btn-block exploreBtn'>Explore</button>
                                    </div>
                                    <div className="col-md-6 p-0">
                                        <button className='btn btn-block contactBtn'>Contact Us</button>
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
            <section className='scroll2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='text-center' style={{ fontWeight: '700', lineHeight: '86px' }}>Marketing from MarketKings™</h2>
                            <p className='text-center px-5'>MarketKings™ is a development and marketing suite dedicated to helping EVM projects raise capital and provide utility to their token holders.</p>
                        </div>
                    </div>
                    <div className='row socialIcons'>
                        <div className='col-md-12'>
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <div className='iconBoxContainer col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/insta.png' alt='instgram' />
                                    </div>
                                    <div className='iconBoxText'>Instagram</div>
                                </div>
                                <div className='iconBoxContainer col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/tgram.png' alt='telegram' />
                                    </div>
                                    <div className='iconBoxText'>Telegram</div>
                                </div>
                                <div className='iconBoxContainer col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/twitter.png' alt='twitter' />
                                    </div>
                                    <div className='iconBoxText'>Twitter</div>
                                </div>
                                <div className='iconBoxContainer col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/youtube.png' alt='youtube' />
                                    </div>
                                    <div className='iconBoxText'>Youtube</div>
                                </div>
                                <div className='iconBoxContainer col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/tiktok.png' alt='tiktok' />
                                    </div>
                                    <div className='iconBoxText'>Tiktok</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row socialIcons">
                        <div className="col-md-12">
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <div className='iconBoxContainer text-center col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/twitch.png' alt='twitch' />
                                    </div>
                                    <div className='iconBoxText'>Twitch</div>
                                </div>
                                <div className='iconBoxContainer text-center col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/cmcap.png' alt='coinmarketcap' />
                                    </div>
                                    <div className='iconBoxText'>Coinmarketcap</div>
                                </div>
                                <div className='iconBoxContainer text-center col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/coingecko.png' alt='coingecko' />
                                    </div>
                                    <div className='iconBoxText'>Coingecko</div>
                                </div>
                                <div className='iconBoxContainer text-center col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/insta.png' alt='instgram' />
                                    </div>
                                    <div className='iconBoxText'>Instagram</div>
                                </div>
                                <div className='iconBoxContainer text-center col-md-2'>
                                    <div className='iconBox'>
                                        <img src='./img/insta.png' alt='instgram' />
                                    </div>
                                    <div className='iconBoxText'>Instagram</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll3">
                <div className="container">
                    <div className="row scroll3Row">
                        <div className='col-md-6 scroll3Img'>
                            <img src='./img/scroll3.png' alt='img3' />
                        </div>
                        <div className='col-md-6 scroll3Col2'>
                            <h2 className='scroll3title'>Marketing Tactics we don’t employ, but could:</h2>
                            <p className='scroll3-p'>At the moment, AMA’s are only solid for community spirit. They don’t bring any buys / ROI so while we can help organise them for your project at discounted rates, we do not recommend them.
                                <br /><br />Twitter influencers are notoriously ineffective. We would only recommend working with the top, top influencers which we can connect large budget projects with. We recommend you avoid all ‘Giveaway’ twitter channels which are only beneficial if you care about member count.</p>
                        </div>
                    </div>
                    <div className="row scroll3Row">
                        <div className='col-md-6 scroll3Col2'>
                            <h2 className='scroll3title'>We turn your ideas into a reality within DeFi</h2>
                            <p className='scroll3-p'>We offer the most competitive rates and quickest turnover times when it comes to development- be it forking a token, creating a DEX or a staking protocol. Development is just 50% of what we offer as we also offer tried and tested marketing services within small to large budgets, and the best website and whitepaper creation in the crypto niche.</p>
                            <button className='btn scrollBtn'>Explore</button>
                        </div>
                        <div className='col-md-6 scroll3Img'>
                            <img src='./img/scroll302.png' alt='img3' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}