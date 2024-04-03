import React from 'react';
import profilePic from './images/IMG_2405.jpg';

function Home() {
  return (
    <div className="App">
      <div className="content">
        <p className="description">Hello world! My name is Eleni Fovaki and I am a software engineer.
          Most of my time, you will find me working or travelling.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="line">
          <p>
            I am currently available for collaborations.
          </p>
        </div>
        <img src={profilePic} alt="Profile" />
        <p className="additional-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat magna id lorem dictum, et consequat nisi efficitur.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
}

export default Home;
