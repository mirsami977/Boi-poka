import React from 'react';
import Banner from '../../components/Banner/Banner';
import Book from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
   const data = useLoaderData();
   console.log(data)
    return (
        <div>
                hellow ami home
                <Banner></Banner>
                <Book data={data}></Book>
        </div>
    );
};

export default Home;