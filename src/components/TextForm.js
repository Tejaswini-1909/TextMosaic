import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const [open, setOpen] = useState({
    basic: false,
    formatting: false,
    advanced: false,
    voice: false,
    export: false
  });

  const toggleDropdown = (key) => {
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // All handler functions remain SAME as your code
  // ————————————————
  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText('');
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleOnChange = (e) => setText(e.target.value);
  const handleCapitalizeClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .filter(word => word.length !== 0)
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };
  const handleExtraSpacesClick = () => setText(text.split(/[ ]+/).join(" ").trim());
  const handleReverseClick = () => setText(text.split("").reverse().join(""));
  const handleSentenceCaseClick = () => {
    let newText = text.toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    setText(newText);
  };
  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textutils-output.txt";
    element.click();
  };
  const handleSpeakClick = () => window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  const handleSpeechToText = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (e) => setText(e.results[0][0].transcript);
    recognition.start();
  };
  const handleSortWords = () => setText(text.split(/\s+/).sort().join(" "));
  const handleRemoveNumbers = () => setText(text.replace(/[0-9]/g, ''));
  const handleRemoveSymbols = () => setText(text.replace(/[^a-zA-Z0-9 ]/g, ''));
  const handleRemoveDuplicateWords = () => setText([...new Set(text.split(/\s+/))].join(" "));
  const handleRemoveDuplicateLines = () => {
    let lines = text.split("\n");
    let unique = [...new Set(lines)];
    setText(unique.join("\n"));
  };

  return (
    <>

      <div className="container textform-container">

        <h1>{props.heading}</h1>

        <textarea
          className="form-control my-3 custom-textarea"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>

        {/* BASIC EDITING */}
        <div className="dropdown-header" onClick={() => toggleDropdown("basic")}>
          🔧 Basic Editing ▼
        </div>
        {open.basic && (
          <div className="dropdown-box">
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleClearClick}>🗑 Clear</button>
            <button className={`btn mx-2 ${copied ? 'btn-success' : 'btn-custom-blue'}`} onClick={handleCopyClick}>
              📋 {copied ? 'Copied!' : 'Copy'}
            </button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleUpClick}>🔠 Uppercase</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleLoClick}>🔡 Lowercase</button>
          </div>
        )}

        {/* FORMATTING */}
        <div className="dropdown-header" onClick={() => toggleDropdown("formatting")}>
          🎨 Formatting ▼
        </div>
        {open.formatting && (
          <div className="dropdown-box">
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleCapitalizeClick}>🔤 Capitalize Words</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleSentenceCaseClick}>📝 Sentence Case</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleExtraSpacesClick}>🚫 Extra Spaces</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleReverseClick}>🔁 Reverse</button>
          </div>
        )}

        {/* ADVANCED */}
        <div className="dropdown-header" onClick={() => toggleDropdown("advanced")}>
          ⚙️ Advanced ▼
        </div>
        {open.advanced && (
          <div className="dropdown-box">
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleSortWords}>🔀 Sort Words</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleRemoveNumbers}>🔢 Remove Numbers</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleRemoveSymbols}>🔣 Remove Symbols</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleRemoveDuplicateWords}>🧹 Unique Words</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleRemoveDuplicateLines}>📄 Unique Lines</button>
          </div>
        )}

        {/* VOICE */}
        <div className="dropdown-header" onClick={() => toggleDropdown("voice")}>
          🎧 Voice Tools ▼
        </div>
        {open.voice && (
          <div className="dropdown-box">
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleSpeakClick}>🔊 Speak</button>
            <button className="btn btn-custom-blue mx-2 my-2" onClick={handleSpeechToText}>🎤 Voice Input</button>
          </div>
        )}

        {/* EXPORT */}
        <div className="dropdown-header" onClick={() => toggleDropdown("export")}>
          📂 Export ▼
        </div>
        {open.export && (
          <div className="dropdown-box">
            <button className="btn btn-custom-outline mx-2 my-2" onClick={handleDownloadClick}>⬇ Download</button>
          </div>
        )}

      </div>

      {/* SUMMARY SECTION */}
      <div className="container my-4 summary-section">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter(e => e.length !== 0).length} words • {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(e => e.length !== 0).length} min read</p>

        <h2>Preview</h2>
        <p>{text.length ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
