import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className="my-20">
            <div className=" ">
                <h3 className="text-2xl mb-5 text-[#FF3811] text-center font-semibold">Service</h3>
                <h2 className="text-5xl text-black font-bold text-center">Our Service Area</h2>
                <p className="text-center text-[#737373] font-bold my-7">The Majority Have Suffered Alteration In Some Form, by injected humour, or randomised <br /> Words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                   ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;