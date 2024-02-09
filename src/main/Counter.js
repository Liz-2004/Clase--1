import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './css/Counter.css';

function Counter({datos}){
    console.log(datos);
    const [contador, setContador] = useState(0);

    const incrementarContador = () => { 
        setContador(contador + 1);
    };

    return (
        <div>
            <Button variant="outline-light" onClick={incrementarContador}>
                <h3 className='botton'>Click</h3>
            </Button>
            {datos.map((datos, index)=> {
                return(
                    <div key= {index}>
                       <h1>{datos}</h1>
                    </div>

                );
            })}
            <h2>Contador: {contador}</h2>
        </div>
    )
}

export default Counter;