export const FetchComponent = () =>
{

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const petition = async () =>
    {
        try
        {

            const resp = await fetch( url );

            const json = await resp.json();

            const data = JSON.stringify( json );

            const div = document.getElementById( 'resp' );

            div?.append( data );

        }
        catch {

            const err = document.createElement( 'div' );

            document.body.append(
                err.textContent = 'Ha habido un error'
            );
            throw Error( `Ocurrió un error en la petición` );
        }
    };

    return (
        <>
            <button onClick={ petition }>Petición</button>
            <code id="resp">

            </code>
        </>
    );
};
