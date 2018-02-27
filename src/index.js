import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// Create a new component. this should produce some HTML

// Youtube API Key
const API_KEY = 'AIzaSyDUP91_T6XL6FgGODXzz3zeFwkqYcbmDEI';

const App = () => {
  return (
    <div>
        <SearchBar/>
    </div>
  );
}

//Take this component's generated HTML and put it on page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
