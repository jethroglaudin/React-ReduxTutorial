import React from 'react'
import Rainbow from './HigherOrderComponent/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sint, quaerat tenetur voluptatum perspiciatis praesentium ipsum error. Quod sequi aliquid reprehenderit perspiciatis laudantium temporibus, pariatur dignissimos provident ratione eius placeat.</p>
        </div>
    );
};

export default Rainbow(About);