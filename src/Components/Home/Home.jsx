import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h2>THis is Home: {tshirts.length}</h2>
        </div>
    );
};

export default Home;