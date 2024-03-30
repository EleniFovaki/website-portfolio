import React from 'react';
import './css/App.css';
import profilePic from '../src/images/IMG_2405.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <div className="content">
        <p className="description">Hello world! My name is Eleni Fovaki and I am a software engineer.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet risus tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at dui ac metus volutpat ultrices sed sit amet mi. Morbi aliquam aliquet ipsum, non dapibus turpis fringilla nec. Curabitur mollis ex sit amet nisl convallis, vitae commodo nisl pharetra. Donec elit enim, imperdiet non elit at, elementum mattis lectus. Morbi ut purus feugiat, hendrerit dui quis, commodo velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Phasellus eu porttitor urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt tincidunt dui, cursus scelerisque dolor dapibus tincidunt. Nulla faucibus risus sed hendrerit mattis. Sed placerat molestie dolor ornare ultricies. Proin placerat vitae quam sed sagittis.
        </p>
        <img src={profilePic} alt="Profile" />
        <p className="additional-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat magna id lorem dictum, et consequat nisi efficitur.</p>
      </div>
    </div>
  );
}

export default App;



