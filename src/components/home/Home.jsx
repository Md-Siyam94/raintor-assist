
import React from 'react';
import Hero from './Hero';
import ListofSkills from './ListofSkills';
import DevelopingSince from './DevelopingSince';
import WorkProcess from './WorkProcess';
import WorkTogether from './WorkTogether';

const Home = () => {
    return (
        <div className='mt-20'>
            <section>
                <Hero></Hero>
            </section>
            <section className='px-4'>
                <ListofSkills></ListofSkills>
            </section>
            <section className='py-20 '>
                <DevelopingSince></DevelopingSince>
            </section>
            <section className='px-4'>
                <WorkProcess></WorkProcess>
            </section>
            <section className='py-20 '>
                <WorkTogether></WorkTogether>
            </section>
        </div>
    );
};

export default Home;