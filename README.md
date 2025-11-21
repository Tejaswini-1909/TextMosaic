🧩 TextMosaic – Advanced Text Utility Web App

TextMosaic is a modern, fast, and responsive React-based text utility website that allows users to transform, analyze, format, and export text with ease.
Designed for developers, writers, and students, TextMosaic brings all essential text tools into one clean interface — no need to rely on multiple external websites.<br/>
🌟 Features
🔧 Basic Editing

Convert text to UPPERCASE

Convert text to lowercase

Clear text instantly

Copy text to clipboard

Remove extra spaces

Capitalize each word

Convert sentences case-wise

Reverse text

Text sorting (A → Z or Z → A)

🎨 Advanced Tools
Word counter, character counter

Estimated read time

Text preview section

Dark & light mode toggle

Export tools (convert to .txt, .pdf, .json, .md etc.)

📁 Export Utilities

Download text as a file

Export formatted text

One-click copy functionality<br/>
📊 Project Flowchart
             ┌──────────────────┐
             │   User Inputs     │
             └────────┬─────────┘
                      │
                      ▼
          ┌─────────────────────────┐
          │  TextMosaic TextForm    │
          │ (Handles all operations)│
          └─────────┬──────────────┘
                    │
     ┌──────────────┼──────────────────┐
     ▼              ▼                  ▼
┌───────────┐ ┌──────────────┐ ┌──────────────────┐
│ Basic Edit│ │ Advanced Tools│ │ Export Utilities │
└─────┬─────┘ └──────┬───────┘ └─────────┬────────┘
      │               │                  │
      ▼               ▼                  ▼
  UPPERCASE     Text Analytics       Download File
  lowercase     Word Count           Copy Output
  Clear Text    Reading Time         Export Formats
  Remove Spaces Preview Area         (txt, pdf, json)
      │               │                  │
      └───────────────┴──────────────────┘
                      ▼
            ┌──────────────────┐
            │  Output Display  │
            └──────────────────┘
<br/>
📂 Folder Structure
TextMosaic/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── TextForm.js
│   │   └── About.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── reportWebVitals.js
│
├── package.json
├── README.md
└── .gitignore
