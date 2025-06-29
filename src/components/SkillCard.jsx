import React from 'react';

const SkillCard = ({ skill }) => {
    // console.log(skill);
    const {  image, title, subtitle } = skill || {}
    return (
        <div className="bg-[oklch(43.9% 0 0)] w-96 shadow-sm">
            <figure>
                <img
                className='h-20 w-20 ml-6'
                    src={image}
                    alt="stack logo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{subtitle}</p>
               
            </div>
        </div>
    );
};

export default SkillCard;