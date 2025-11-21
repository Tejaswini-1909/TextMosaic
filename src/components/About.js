import React from 'react';
import './About.css';

export default function About() {

  return (
    <div className='container'>
      <h1 className='my-4'>About Us</h1>

      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              <b>About This Website</b>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body text-dark">
              <strong>Welcome to our Text Utility Website!</strong>
               <br /><br />
              This website is designed to help users analyze and format text quickly and efficiently. 
              You can perform various text operations like converting to uppercase/lowercase, 
              removing extra spaces, and much more.  
              <br /><br />
              The goal of this tool is to provide a simple, fast, and user-friendly interface for 
              students, writers, developers, and anyone who works with text regularly.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
             <b>Website Features & Tools</b> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body text-dark">
              <strong>This website provides a complete set of text-editing and formatting tools designed to save your time and improve productivity.</strong>
             <br /><br />

      <h5 className="heading-dark">🔧 Basic Editing</h5>
      <ul>
        <li>🗑 <b>Clear</b> – Instantly remove all text.</li>
        <li>📋 <b>Copy</b> – Copy text to clipboard with one click.</li>
        <li>🔠 <b>Uppercase</b> – Convert text to UPPERCASE.</li>
        <li>🔡 <b>Lowercase</b> – Convert text to lowercase.</li>
      </ul>

      <h5 className="heading-dark">🎨 Formatting Tools</h5>
       <ul>
        <li>🔤 <b>Capitalize Words</b> – Capitalizes first letter of every word.</li>
        <li>📝 <b>Sentence Case</b> – Converts text to proper sentence format.</li>
        <li>🚫 <b>Remove Extra Spaces</b> – Cleans unnecessary spaces.</li>
        <li>🔁 <b>Reverse Text</b> – Reverses the entire text.</li>
      </ul>

      <h5 className="heading-dark">⚙️ Advanced Tools</h5>
      <ul>
        <li>🔀 <b>Sort Words</b> – Alphabetically sorts words.</li>
        <li>🔢 <b>Remove Numbers</b> – Deletes all numeric characters.</li>
        <li>🔣 <b>Remove Symbols</b> – Removes punctuation & symbols.</li>
        <li>🧹 <b>Unique Words</b> – Removes duplicate words.</li>
        <li>📄 <b>Unique Lines</b> – Removes duplicate lines.</li>
      </ul>
       <h5 className="heading-dark">🎧 Voice Tools</h5>
      <ul>
        <li>🔊 <b>Speak</b> – Reads your text aloud using speech synthesis.</li>
        <li>🎤 <b>Voice Input</b> – Convert your speech into text.</li>
      </ul>

      <h5 className="heading-dark">📂 Export Tools</h5>
      <ul>
        <li>⬇ <b>Download</b> – Save your text as a file.</li>
      </ul>

      <br />
      <p>
        These features make the website a powerful all-in-one text utility tool—perfect for students, writers, developers, and content creators.
      </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
               <b>About the Developer</b>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body "style={{ color: "#0A1A2F" }}>
               <h5 className="heading-dark">👩‍💻 Developer Information</h5>
      <p style={{ color: "black" }}>
        This Text Utility Website is developed by <b>Tejaswini Sharma</b>, a passionate
        learner and aspiring web developer. The goal behind this project is to build
        a clean, fast, and useful tool for everyone who works with text daily.
      </p>

      <h5 className="heading-dark">🚀 Skills & Technologies Used</h5>
      <ul>
        <li>⚛️ <b>React.js</b> – For building the user interface</li>
        <li>🎨 <b>Bootstrap</b> – For responsive layout and UI styling</li>
        <li>💻 <b>JavaScript</b> – For text processing & logic</li>
        <li>⚡ <b>HTML / CSS</b></li>
      </ul>
        <h5 className="heading-dark" >🎯 Developer's Vision</h5>
      <p style={{ color: "black" }}>
        My aim is to create tools that are simple, powerful, and help users save
        time. This website is just the beginning—many new features and improvements
        are on the way!
      </p>
        <p style={{ color: "black" }}>
        Thank you for using this website! Your feedback helps improve the project. 💙
      </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
