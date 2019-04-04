import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Web from './components/Web';
import Graphics from './components/Graphics'
import Videos from './components/Videos';
import Contact from './components/Contact';
// import React, { useCallback, useEffect, useState } from 'react';
import React from 'react';
import './App.scss';

function App() {
  // const [message, setMessage] = useState(null);
  // const [isFetching, setIsFetching] = useState(false);
  // const [url, setUrl] = useState('/api');

  // const fetchData = useCallback(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       setMessage(json.message);
  //       setIsFetching(false);
  //     }).catch(e => {
  //       setMessage(`API call failed: ${e}`);
  //       setIsFetching(false);
  //     })
  // }, [url]);

  // useEffect(() => {
  //   setIsFetching(true);
  //   fetchData();
  // }, [fetchData]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     { process.env.NODE_ENV === 'production' ?
    //         <p>
    //           THIS FOR THE Fourth COMMIT BUILD .
    //         </p>
    //       : <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //     }
    //     <p>{'« '}<strong>
    //       {isFetching
    //         ? 'Fetching message from API'
    //         : message}
    //     </strong>{' »'}</p>
    //     <p><a
    //       className="App-link"
    //       href="https://github.com/mars/heroku-cra-node"
    //     >
    //       React + Node deployment on Heroku
    //     </a></p>
    //     <p><a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a></p>
    //   </header>
    // </div>

    <BrowserRouter>
          <div id="app">
          <Route path='/' component={Header} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/portfolio/videos' component={Videos} />
          <Route path='/portfolio/web' component={Web} />
          <Route path='/portfolio/graphics' component={Graphics} />
          <Route path='/contact' component={Contact} />
          </div>
    </BrowserRouter>
  );

}

export default App;
