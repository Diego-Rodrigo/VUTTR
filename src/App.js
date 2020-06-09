import React from "react";
import AddToolForm from './components/AddTool';
import SearchTools from './components/Search';
import ListTools from './components/List';

import './styles.css';


 

function App(){
  return(
    <div>
      <header className="header-title"> 
        <h1>VUTTR</h1>
        <p>Very Use Tools to Remember</p>
      </header>
      <section className="container-header">
        
        <SearchTools />
        <AddToolForm/>
      </section>
      
      
     
      <ListTools />
    </div>
  )
}

export default App;
