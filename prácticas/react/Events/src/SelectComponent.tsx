import { useState } from "react";

export const SelectComponent = () =>
{

    const [ value, setvalue ] = useState( 'Tu instrumento irá aquí' );

    const handleSelectedValue = ( event: React.ChangeEvent<HTMLSelectElement> ) =>
    {
        setvalue( event.target.value );
    };


    return (
        <div className="select">
            <h2>¿Cuál es tu instrumento favorito?</h2>
            <select
                className="selectElement"
                onChange={ handleSelectedValue }>
                <option value="Piano">Piano</option>
                <option value="Guitarra">Guitarra</option>
                <option value="Bajo">Bajo</option>
                <option value="Batería">Batería</option>
            </select>
            <div className="selectedValue">
                { value }
            </div>
        </div>
    );
};
