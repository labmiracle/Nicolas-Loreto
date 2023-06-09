import { useState } from "react";

export function ButtonsStringsComponent ()
{
    const [ string, setString ] = useState<string[]>( [] );

    const arr = [ 'M', 'i', 'r', 'a', 'c', 'l', 'e', '_', 'L', 'a', 'b' ];

    return <>
        <h1>String { string }</h1>

        <button onClick={ () => setString( [ ...string, arr[ string.length++ ] ] ) }>

            + string
        </button>

        <button onClick={ () => setString( [ ...string.slice( 0, string.length - 1 ) ] ) }>
            -string
        </button>
    </>;
}