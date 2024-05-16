import React from 'react';
import profilePic from './images/IMG_2405.jpg';
import utrechtPic from './images/utrecht.jpg';

function Home() {
  return (
    <div className="App">
      <div className="content">
        <p className="description">My name is Eleni Fovaki. I am the software engineer of this site and many others.
You can check my Github account, via the github icon on the right front of this page, to get a glimpse of my projects. 
        </p>
        <div className="line">
          <p>
            I am currently available for collaborations.
          </p>
        </div>
        <div className="line2">
          <p>
            My time is divided between the Netherlands and in Greece, but most likely in a window seat of an airplane.
            Or in a court playing tennis.
          </p>
        </div>
        <img src={profilePic} alt="Profile" />
        <p className="additional-info">After graduating from the Technological Institute of Crete, I moved to Athens, which is my hometown, to pursue a carreer in web-development.
After 3 years of learning and developing my programming skills, I moved to the Netherlands, to explore what the country had to offer for us programmers.
It did not dissapoint me. But most importantly, as the Dutch say, the point is to not disappoint yourself.</p>
      </div>
      <img src={utrechtPic} alt="Utrecht" />
      <div className="line3">
          <p>
            First iphone image of Utrecht.
          </p>
        </div>
    </div>
  );
}

export default Home;
