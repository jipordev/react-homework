import React from 'react';
import ProCard from '../cards/ProductCard';
import FBCard from '../cards/FeedbackCard';

const Main = () => {
  return (
    <main className='my-10'>
      <h1 className='text-center text-4xl my-7 text-gray-600 font-semibold'>Products</h1>
      <section className='w-max container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <ProCard/>
        <ProCard/>
        <ProCard/>
        <ProCard/>
        <ProCard/>
        <ProCard/>
        <ProCard/>
        <ProCard/>
      </section>
      <h1 className='text-center text-4xl my-7 text-gray-600 font-semibold'>Feedbacks</h1>
      <section className='w-max container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4'>
        <FBCard/>
        <FBCard/>
        <FBCard/>
        <FBCard/>
        <FBCard/>
      </section>
    </main>
  );
};

export default Main;
