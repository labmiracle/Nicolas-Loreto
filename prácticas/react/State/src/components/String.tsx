import { useState } from "react";

export function StringComponent ()
{

    const [ string, setString ] = useState<string[]>( [] );

    const random: number = Math.floor( ( Math.random() * 9 ) );

    const arr = [ 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j' ];

    return <>

        <h1>String { string }</h1>

        <button onClick={ () => setString( [ ...string, arr[ random ] ] ) }>

            + string
        </button>

        <button onClick={ () => setString( [ ...string.slice( 0, string.length - 1 ) ] ) }>
            -string
        </button>

    </>;

}