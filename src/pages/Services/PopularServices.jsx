import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            }
            )

    }, [])


    return (
        <div className="mt-28 mb-10 ">
            <div className="m-5 mb-16  ">
                <h3 className="text-3xl font-bold text-center text-black">Popular Services</h3>
            </div>
            <div className="grid grid-cols-1 mb-10 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <PopularServiceCard
                        key={service.title}
                        service={service}
                    ></PopularServiceCard>)
                }
            </div>
        </div>
    );
};

export default PopularServices;