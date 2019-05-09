import React, { Component } from 'react';

//functional component 
// don't need the state anymore

// you could also destructure right inside the () with ({})
const Ninjas = ({ ninjas }) => {
    //destructuring or store the props in a variable
    // const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20){
    //     return (
    //         <div className ="ninja" key={ninja.id}> 
    //         <div>Name: { ninja.name }</div>
    //         <div>Age: { ninja.age }</div>
    //         <div>Belt: { ninja.belt }</div>
    //     </div>

    //     )
    //     } else {
    //         return null
    //     }
    // })
    // const ninjaList = ninjas.map(ninja => {
    //     //ternary operator condition ? then first return value () : if true then the second () if false
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ninja.id}>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //     ) : null;
    // })
    return (
        <div className="ninja-list">
            {/* you may also place the logic inside the template */}
            {
                ninjas.map(ninja => {
                    //ternary operator condition ? then first return value () : if true then the second () if false
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id}>
                            <div>Name: {ninja.name}</div>
                            <div>Age: {ninja.age}</div>
                            <div>Belt: {ninja.belt}</div>
                        </div>
                    ) : null;
                })
            }
        </div>
    )

}

export default Ninjas