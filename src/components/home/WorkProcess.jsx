import React, { useEffect, useState } from 'react';
import { MdArrowDownward } from 'react-icons/md';
import WorkCard from '../WorkCard';

const WorkProcess = () => {
    const [works, setWorks] = useState([])


    useEffect(()=>{
        fetch("/process.json")
        .then(res=> res.json())
        .then(data=>{
            setWorks(data)
        })
    },[])
    return (
         <div className='bg-[#141414] text-white px-20 py-10  rounded-2xl'>
            <div className='flex items-center py-10 '>
                <div className='flex items-center'>
                    <div className='py-2 px-2 border rounded-full flex  items-center'><MdArrowDownward className='text-2xl' /></div>
                <button className='py-2 px-4 border rounded-full '>Work Process</button>
                </div>
                <div className='mx-auto'><h1 className='text-3 md:text-4xl lg:text-6xl font-bold '>My Work Process</h1></div>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 '>
                {
                   works.map(work=> <WorkCard key={work?.id} work={work}></WorkCard>)
                }
            </div>
        </div>
    );
};

export default WorkProcess;