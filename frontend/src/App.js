import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);

    useEffect(() => {
        axios.get('http://owu.linkpc.net/carsAPI/v1/cars').then(({data}) => setCars(data));
    }, [trigger]);


    const handleDelete = async (id) => {
        await axios.delete(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`).catch();
        setTrigger(prev => !prev);
    };

    return (
        <div>
            {cars.map(car => <div key={car.id}>
                <p>Brand: {car.id}</p>
                <p>Brand: {car.brand}</p>
                <p>Price: {car.price}</p>
                <p>Year: {car.year}</p>
                <button onClick={() => handleDelete(car.id)}>Delete</button>
                <hr/>
            </div>)}
        </div>
    );
};

export {App};
