import { useLoaderData } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phones = () => {

const phones = useLoaderData()
// console.log(phones)



    return (
        <div>
            <h1 className="text-center text-2xl p-4">All Categories Phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    phones.map((phone, idx)=> <PhoneCard key={idx} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;