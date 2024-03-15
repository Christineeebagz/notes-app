// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => console.log('Server is running on port ' + PORT));
import React from 'react';
import ReactDOM from 'react-dom';
import express from 'express';
import './index.css';
import App from './App';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from public directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve your React app's HTML file
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

