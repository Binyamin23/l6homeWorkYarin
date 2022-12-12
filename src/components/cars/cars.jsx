import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Car from './car'


const Cars = () => {
    const [cars, setCars] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('All');
    const selectRef = useRef();

    const getCategories = (_data) => {
        const cat = [];
        cat.push("All")
        _data.forEach(item => {
            if (!cat.includes(item.category)) {
                cat.push(item.category);
            }
        })
        setCategories(cat);
        console.log(cat);
    }

    
    const doApi = async () => {
        try {
            let url = `https://cars-otdf.onrender.com/cars?perPage=99`
            const { data } = await axios(url)  // ניגש ישר לתוך המידע שיש ברספ על ידי הברקט 
            //    const data = resp.data
            console.log(data)
            getCategories(data)

            let carFilter = [...data];
            if ( category !='All'  && selectRef.current.value) {
                carFilter = data.filter(item => item.category === selectRef.current.value)
            }
            else{
                carFilter=[...data];
            }

            setCars(carFilter)
        }
        catch (err) {
            console.log(err.resp)
        }
    }

    useEffect(() => {
        doApi();

    }, [category])   // מאזין לשינויים בסטייט ומרנדר אותו מחדש

    return (
        <div>
            <h1 className='display-3 text-center'>cars</h1>
            <div style={{ color: 'blue' }} className='container'>
                <div className='col-10 col-lg-3 mx-auto'>
                    <select ref={selectRef} onChange={() => {
                        setCategory(selectRef.current.value);
                    }} className='form-select'>
                        {categories?.map((item, i) => {
                            return (
                                <option key={i} value={item}> {item.toUpperCase()}</option> //עושה אותיות גדולות
                            )
                        })}
                    </select>
                </div>

                <div className='row'>
                    {cars?.map((item, i) => (    // ?=> אם המידע לא הגיע אל תציג

                        <Car key={i} car={item} number={i} />



                    ))}
                </div>
            </div>

            {/* {cars[0]?.model ?   
                <div>
                    <p>{cars[0].model}</p>
                    <p>{cars[1].model}</p>
                    <p>{cars[2].model}</p>
                    <p>{cars[3].model}</p>

                </div>
                : <p>Loading</p>} */}

        </div>
    )
}

export default Cars