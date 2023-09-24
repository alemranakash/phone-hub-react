import { useEffect, useState } from "react";
import PhnCard from "../Phone/PhnCard";


const Favourite = () => {

    const [favourites, setFavourites] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] =  useState(0)

    useEffect(() => {
        const favouriteItem = JSON.parse(localStorage.getItem('favourite'))

        if (favouriteItem) {
            setFavourites(favouriteItem)

            const total = favouriteItem.reduce((preValue, CurrentValue)=>preValue + CurrentValue.price,0)
            setTotalPrice(total)
        }
        else {
            setNoFound('No data found')
        }


    }, [])

    // console.log(favourites)


    const handleRemove = () => {
        localStorage.clear()
        setFavourites([])
        setNoFound('No data found')
    }


    return (
        <div>
            {noFound ? <p className="flex justify-center items-center h-[80vh]">{noFound}</p> :

                <div>
                    {favourites.length > 0 && <button onClick={handleRemove} className="flex justify-center mx-auto bg-gray-300">Delete all Favourite Item</button>}
                    <h1>Total Price = {totalPrice}</h1>
                    <div className="grid grid-cols-2">
                        {
              isShow ? favourites.map(phone => <PhnCard key={phone.id} phone={phone}></PhnCard>)
              :
              favourites.slice(0,2).map(phone => <PhnCard key={phone.id} phone={phone}></PhnCard>)
                        }
                    </div>
                    {favourites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="flex justify-center mx-auto bg-gray-300">{isShow ? "Show less" : "Show More"}</button>}
                </div>

            }
        </div>
    );
};

export default Favourite;