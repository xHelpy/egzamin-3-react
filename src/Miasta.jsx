import React from "react";
import {useState} from "react";



const MiastaDane = [
    {
        id: 1,
        name: 'Tokio',
        country: 'Japonia',
        population: 13960000,
    },
    {
        id: 2,
        name: 'Paryż',
        country: 'Francja',
        population: 2141000,
    },
    {
        id: 3,
        name: 'Londyn',
        country: 'Wielka Brytania',
        population: 8980000,
    },
    {
        id: 4,
        name: 'Warszawa',
        country: 'Polska',
        population: 1795000,
    },
    {
        id: 5,
        name: 'Kair',
        country: 'Egipt',
        population: 985000,
    },
]

function Miasta( {wyszukiwanie,IdMiasta} )
{
    const [szukanie,setSzukanie] = useState("");
    const [idMiasta,setIdMiasta] = useState(0);
    return (
        <div>
            {idMiasta === 0 && <div>
                <h1>Stolice Świata (WEB)</h1>
                <input placeholder="Filtruj miasta po nazwie..." type="text" onChange={(e) => setSzukanie(e.target.value)}  />
            </div>}
            {idMiasta !== 0 &&

                    MiastaDane.map((miasto) =>
                        { return(
                            <>
                                {idMiasta === miasto.id &&
                                    <div>
                                        <h1>Wybrano: {miasto.name}</h1>
                                        <p>Populacja: {miasto.population}</p>
                                        <button onClick={() => setIdMiasta(0)}> powróc do listy </button>
                                    </div>
                                }
                            </>
                        )}
                    )
            }
            {console.log(idMiasta)}
            <div className="Lista">
                {
                    MiastaDane.map((miasto) =>
                        { return(
                            <>
                                {((miasto.name.toLowerCase().includes(szukanie) || miasto.name.includes(szukanie)) && idMiasta === 0)&&
                                    <button   onClick={() => {setIdMiasta(miasto.id); IdMiasta = miasto.id}} key={miasto.id} className="Element">
                                        <h2>{miasto.name}</h2>h      
                                        <p>{miasto.country} - Populacja {miasto.population}</p>
                                    </button>`    
                                }
                            </>
                        )}
                    )
                }
            </div>
        </div>
    )
}
export default  Miasta;
