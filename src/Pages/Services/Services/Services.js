import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {


    const [services] = useServices();
    return (


        <div className='my-8'>
            <h1 className="text-center  text-warning my-5  text-5xl">Inventory Items</h1>
            <div className="services grid lg:grid-cols-3 sm:grid-cols-1 gap-5 ">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;