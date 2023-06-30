import './App.css';
import NavigationBar from './components/NavigationBar';
import LatestRelease from './components/LatestRelease';
import { useState } from 'react';
import scifi from "./data/scifi.json"
import { nanoid } from 'nanoid';

function App() {
  
  const [books, setBooks] = useState(scifi);


  function searchEngine(e){
    setBooks(scifi);
    const filterdBooks = books.filter((el)=>{return el.title.toLowerCase().includes(e.target.value.toLowerCase())});
    console.log("funziono");
    console.log(e.target.value);
    console.log(filterdBooks);
    setBooks(filterdBooks)
  }

  return (
    <>
      <NavigationBar setCategory={setBooks} searchEngine={searchEngine}/>
      <LatestRelease myBooks={books}/>
    </>
  );
}

export default App;
