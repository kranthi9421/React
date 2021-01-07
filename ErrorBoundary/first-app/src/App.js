import React from 'react';
import Hero from './Hero';
import Error from './Error';

function App() {
    return (
        <div>
           <Error>
             <Hero heroName="Kranthi"/>
           </Error>
           <Error>
             <Hero heroName="Mounica"/>
          </Error>
          <Error>
             <Hero heroName="tyson"/>
         </Error>
        </div>
    )
}

export default App
