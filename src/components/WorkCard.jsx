import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const WorkCard = ({ work }) => {
    // console.log(work);
    const { title, subtitle } = work || {}
    return (
        <div className="card bg-black text-white hover:bg-[#C5FF41] hover:text-black hover:rotate-3 rounded-2xl shadow-sm">
            <div className="card-body ">
                <div className='flex justify-between'>
                    <h2 className='py-1 px-4 border rounded-full card-title  bg-[#C5FFEE] text-black hover:bg-black hover:text-white mb-6'>{title}</h2>
                    <div className='flex items-center gap-1 '>
                        <GoArrowRight className='text-xl' />
                        <button className='underline'> Read More</button>

                    </div>

                </div>
                <p className='font-semibold'>{subtitle}</p>

            </div>
        </div>
    );
};

export default WorkCard;