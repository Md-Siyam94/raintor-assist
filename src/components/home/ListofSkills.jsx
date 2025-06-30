import React, { useEffect, useState } from 'react';
import { MdArrowDownward } from 'react-icons/md';
import SkillCard from '../SkillCard';

const ListofSkills = () => {

    const [skills, setSkills] = useState([])

    useEffect(()=>{
        fetch("/skills.json")
        .then(res=>res.json())
        .then(data=> setSkills(data))
    },[])
    return (
        <div className='bg-black text-white px-20 py-10  rounded-2xl'>
            <div className='flex py-10 '>
                <div className='py-2 px-2 border rounded-full flex gap-1 items-center'><MdArrowDownward className='text-2xl' /></div>
                <button className='py-2 px-4 border rounded-full '>Why Choose me</button>
            </div>
            <div className='lg:flex justify-between pb-10'>
                <div><h1 className='text-3xl md:text-4xl lg:text-6xl font-bold w-8/12'>My Extensive List of Skills</h1></div>
                <div className=' w-1/4 mt-5 lg:text-end'>
                    <p>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                    <hr className='opacity-50 mt-2'/>

                </div>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 '>
                {
                   skills.map(skill=> <SkillCard key={skill?.id} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default ListofSkills;