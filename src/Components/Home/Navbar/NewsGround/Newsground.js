import React, { useState, useEffect } from 'react';
import './styless.css'; 
import topic1Image from './shutterstock_568689847.0.webp';
import topic2Image from './download.jpg';
import topic3Image from './download crypto.jpg';
import topic4Image from './Climate Change.jpg';
import topic5Image from './download (1).jpg';

function NewsGround() {
  const [showDiv, setShowDiv] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleClick = (topic) => {
    setShowDiv(true);
    setSelectedTopic(topic);

    // Automatically hide the "check" div after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setShowDiv(false);
    }, 5000);
  };

  useEffect(() => {
    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="grid-container">
      {/* Left Column Container */}
      <div className="container contente">
        <div className="left-column">
          <div className="topic-box" id="topic1" onClick={() => handleClick('Should Government Ever Limit Free Speech?')}>
            <img src={topic1Image} alt="Topic 1 Image" />
            <h3>Should Government Ever Limit Free Speech?</h3>
          </div>
          <div className="topic-box" id="topic2" onClick={() => handleClick('Will Chat GPT Do More Harm Than Good?')}>
            <img src={topic2Image} alt="Topic 2 Image" />
            <h3>Will Chat GPT Do More Harm Than Good?</h3>
          </div>
          <div className="topic-box" id="topic3" onClick={() => handleClick('Will Cryptocurrencies Replace Fiat Currencies?')}>
            <img src={topic3Image} alt="Topic 3 Image" />
            <h3>Will Cryptocurrencies Replace Fiat Currencies?</h3>
          </div>
          <div className="topic-box" id="topic4" onClick={() => handleClick('Will Man-Made Climate Change Cause Human Extinction?')}>
            <img src={topic4Image} alt="Topic 4 Image" />
            <h3>Will Man-Made Climate Change Cause Human Extinction?</h3>
          </div>
          <div className="topic-box" id="topic5" onClick={() => handleClick('Should the US Sell Weapons with Nuclear Capabilities to Ukraine?')}>
            <img src={topic5Image} alt="Topic 5 Image" />
            <h3>Should the US Sell Weapons with Nuclear Capabilities to Ukraine?</h3>
          </div>
          <div className="topic-box" id="topic6" onClick={() => handleClick('Are Video Games the Best Source of Entertainment?')}>
            <img src={topic5Image} alt="Topic 6 Image" />
            <h3>Are Video Games the Best Source of Entertainment?</h3>
          </div>
        </div>
      </div>

      {showDiv && (
        <div id="check">
          <header>
            <h1>{selectedTopic}</h1>
          </header>
          <main>
            <section className="pros-cons">
              <div className="pros">
                <h2>Advantages</h2>
                <section className="box">
                  <div className="box">Free speech is important for the progression of a functioning country's politics and culture.</div>
                  <div>Limiting speech on topics deemed to be offensive or controversial can harm the progression of the causes of vulnerable people and communities.</div>
                  <div>Restrictions on speech are usually determined by privileged individuals who may see it fit to restrict the speech of minority groups that they find offensive.</div>
                </section>
              </div>
              <div className="cons">
                <h2>Disadvantages</h2>
                <section className="boxe">
                  <div>Minority groups have the ability to challenge government restrictions on speech when they oppose the way they are used.</div>
                  <div>These groups do not have the necessary political capital to meaningfully challenge overly restrictive speech bans.</div>
                  <div>If enough people of a minority group together, they can likely put together the resources necessary.</div>
                </section>
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default NewsGround;
