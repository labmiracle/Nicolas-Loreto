export const FetchComponent = () =>
{

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const petition = () =>
    {

        const http = fetch( url );

        http.then( ( resp ) => resp.json()
            .then( ( resp ) =>
            {
                const element = document.createElement( 'code' );
                document.body.append( element.textContent = JSON.stringify( resp ) );
            } ) );


    };




    return (
        <>
            <button onClick={ petition }>Petición</button></>
    );
};
