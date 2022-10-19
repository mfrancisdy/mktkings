import React, { useEffect, useRef, useState } from "react";
import '../assets/scss/timeline.css';

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const step1 = (
    <div className="message">
        <div className="row timelineBox">
            <div className="col-12">
                <h3 className='timelineTitle'>Web development</h3>
                <p className='timelineText'>We create websites for crypto projects and take care of the coding part to the hosting on the domain of your choice.</p>
            </div>
         </div>
    </div>
  )

  const step2 = (
    <div className="message2">
        <div className="row timelineBox">
            <div className="col-12">
                <h3 className='timelineTitle'>DEXs</h3>
                <p className='timelineText'>We can create a DEX on any smart chain with so much flexibility- if you want a PCS fork, we can do that but if you want something truly customized (UI and Backend) we provide this as well. Please reach out and tell us what you are interested in.</p>
            </div>
         </div>
    </div>
  )
  const step3 = (
    <div className="message">
        <div className="row timelineBox">
            <div className="col-12">
                <h3 className='timelineTitle'>white Paper Creation </h3>
                <p className='timelineText'>For 1BNB, we offer a brilliant write-up on your project with Graphics in a whitepaper format. Feel free to contact us for examples.</p>
            </div>
         </div>
    </div>
  )
  const step4 = (
    <div className="message2">
        <div className="row timelineBox">
            <div className="col-12">
                <h3 className='timelineTitle'>Web development</h3>
                <p className='timelineText'>We create websites for crypto projects and take care of the coding part to the hosting on the domain of your choice.</p>
            </div>
         </div>
    </div>
  )
  const step5 = (
    <div className="message">
        <div className="row timelineBox">
            <div className="col-12">
                <h3 className='timelineTitle'>Web development</h3>
                <p className='timelineText'>We create websites for crypto projects and take care of the coding part to the hosting on the domain of your choice.</p>
            </div>
         </div>
    </div>
  )

  const someCallback = () => {
    setMessage1(step1);
    callback();
  };

  const someCallback2 = () => {
    setMessage2(step2);
  };

  const someCallback3 = () => {
    setMessage3(step3);
  };
  
  const someCallback4 = () => {
    setMessage4(step4);
  };

const someCallback5 = () => {
    setMessage5(step5);
};


  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        {message1}
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        {message2}
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        {message3}
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        {message4}
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          5
        </div>
        {message5}
      </div>
    </div>
  );
};

export default Timeline;