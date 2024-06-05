import React from 'react';
import profilePic from './images/IMG_2405.jpg';
import utrechtPic from './images/utrecht.jpg';
import { Link } from 'react-router-dom'; // Import Link component

function Home() {
  return (
    <div className="App">
      <div className="content">
        <p className="description">My name is Eleni Fovaki. I am the software engineer of this site and many others.
You can check my work from my Github account, via the github icon on the right front of this page, to get a glimpse of my projects. 
        </p>
        <div className="line1">
          <p>
            I am currently available for collaborations.
          </p>
        </div>
        <div className="line2">
          
            My time is divided between the Netherlands and in Greece, but most likely in a window seat of an airplane.
            Or in a court playing tennis.
          
        </div>
        <img src={profilePic} alt="Profile" />
        <p className="additional-info">After graduating from the Technological Institute of Crete, I moved back to Athens, which is my hometown, to pursue a carreer in web-development.
After 3 years of learning and developing my programming skills, I moved to the Netherlands, to explore what the country had to offer for us programmers.
It did not dissapoint me. But most importantly, as the Dutch say, the point is to not disappoint yourself.</p>
      </div>
      <img src={utrechtPic} className="second-image" alt="Utrecht" />
      <div className="line3">
          <p>
            First iphone image of Utrecht.
          </p>
        </div>
        <div className="line4">
          <p>
            Questions? <Link to="/contact">Say hi.</Link>
          </p>
        </div>
    </div>
  );
}

export default Home;
