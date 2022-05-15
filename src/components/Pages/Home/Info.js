import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Assests/icons/clock.svg';
import marker from '../../Assests/icons/marker.svg';
import phone from '../../Assests/icons/phone.svg'

const Info = () => {
  return (
    <section className="text-gray-600 body-font px-12">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
          <InfoCard cardTitle="Opening Hours" bgClass="bg-accent" img={marker}></InfoCard>
          <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
      </div>
    </section>
  );
};

export default Info;