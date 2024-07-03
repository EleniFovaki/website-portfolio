import React from 'react';
import profilePic from './images/IMG_2405.jpg';
import utrechtPic from './images/utrecht.jpg';
import { Link } from 'react-router-dom'; // Import Link component

function Home() {
  return (
    <div className="App">
      <div className="content">
        <p className="description">My name is Eleni Fovaki. I am a greek software engineer based in the Netherlands.
You can check my Github account, via the github icon on the right front of this page, to get a glimpse of my projects.
Currently, I am interested in full-stack development and machine learning. I have contributed in large-scale programs that are used by hundreds of users worldwide and developed 
custom-made solutions for several local medium businesses.
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
        <p className="additional-info">After graduating with a bachelor's degree in Computer Science, I spent several years working as a developer. Over time, I became more fascinated with programming and the ability to work abroad and moved to the Netherlands to pursue a carreer in full stack development.</p>
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
