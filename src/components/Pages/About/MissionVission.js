import React from 'react';
import mission from '../../Assests/icons/mission.png';
import vision from '../../Assests/icons/vision.png';
import values from '../../Assests/icons/values.png';

const MissionVission = () => {
    return (
        <section class="text-gray-600 body-font  px-12 bg-gray-100">
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className='mx-auto w-40 pt-8' src={mission} alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-accent text-2xl title-font font-bold mb-3">OUR MISSION</h2>
                                <p className="leading-relaxed text-base">To refine and redefine healthcare standards through consistent quality enhancement endeavors aiming at winning and retaining excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className='mx-auto w-40 pt-8' src={vision} alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-2xl title-font font-bold mb-3">OUR VISION</h2>
                                <p className="leading-relaxed text-base">To achieve global preference in healthcare through our distinctive services based on excellence and reliability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className='mx-auto w-40 pt-8' src={values} alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-2xl title-font mb-3 font-bold">OUR VALUES</h2>
                                <p className="leading-relaxed text-base">Providing the highest quality of services constantly, being maximal in reliability and thus becoming the benchmark in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVission;