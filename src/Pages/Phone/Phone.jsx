import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhnCard from "./PhnCard";


const Phone = () => {

    const [phone, setPhone] = useState({});

const {id} = useParams()
// console.log(id)

const phones = useLoaderData();
// console.log(phones)



useEffect(()=>{
    const findPhone = phones ?.find(phone=> phone.id === id)
    // console.log(findPhone)
    setPhone(findPhone)
}
    ,[id, phones])

console.log(phone)





    return (
        <div className="flex justify-center items-center">
            
             <PhnCard phone={phone}></PhnCard>
        </div>
    );
};

export default Phone;