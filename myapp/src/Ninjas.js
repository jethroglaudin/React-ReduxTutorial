import React, { Component } from 'react';

//functional component 
// don't need the state anymore
 
// you could also destructure right inside the () with ({})
const Ninjas = ({ninjas}) =>  {
        //destructuring or store the props in a variable
        // const { ninjas } = props;
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className ="ninja" key={ninja.id}> 
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>

            )
        })
        return (
          <div className="ninja-list">
              { ninjaList }
          </div>
        )
    
}

export default Ninjas