import { useState } from "react";
import { ButtonSubtractComponent } from "./ButtonSubtractComponent";
import { ButtonSumComponent } from "./ButtonSumComponent";

export function ButtonsCounterComponent ()
{

    const [ count, setCount ] = useState( 0 );

    const subt = () => setCount( count - 1 );

    const sum = () => setCount( count + 1 );

    return (
        <>
            <ButtonSubtractComponent text={ count } action={ subt } />
            <ButtonSumComponent action={ sum } />
        </>
    );
}