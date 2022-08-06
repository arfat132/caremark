import React from 'react';
import { FaClinicMedical } from "@react-icons/all-files/fa/FaClinicMedical";
import { FaFileMedicalAlt } from "@react-icons/all-files/fa/FaFileMedicalAlt";
import { FaBriefcaseMedical } from "@react-icons/all-files/fa/FaBriefcaseMedical";
import { GiMedicinePills } from "@react-icons/all-files/gi/GiMedicinePills";
const Info = () => {
  return (
    <section className="text-gray-600 body-font px-12 bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4">
            <div className='h-[160px] card card-side bg-base-100 shadow-lg border-l-4 border-l-secondary rounded-none'>
              <FaClinicMedical className='text-8xl text-secondary ml-4 mt-8'/>
              <div className="card-body">
                <h2 className="card-title">Personalized Healthcare</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className='h-[160px] card card-side bg-base-100 shadow-lg border-l-4 border-l-secondary rounded-none'>
              <GiMedicinePills className='text-8xl text-secondary ml-4 mt-8'/>
              <div className="card-body">
                <h2 className="card-title">Drug Store</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className='h-[160px] card card-side bg-base-100 shadow-lg border-l-4 border-l-secondary rounded-none'>
             <FaFileMedicalAlt className='text-8xl text-secondary ml-4 mt-8'/>
              <div className="card-body">
                <h2 className="card-title">Nuclear Stress Testing</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className='h-[160px] card card-side bg-base-100 shadow-lg border-l-4 border-l-secondary rounded-none'>
            <FaBriefcaseMedical className='text-8xl text-secondary ml-4 mt-8'/>
              <div className="card-body">
                <h2 className="card-title">Regularly Checkup</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;