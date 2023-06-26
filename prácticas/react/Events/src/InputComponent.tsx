export const InputComponent = ( { value, onChange }: { value: string; onChange: ( value: string ) => void; } ) =>
{


    const inputChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        onChange( event.target.value );
    };

    return (
        <>
            <h1>Ingrese a continuación:</h1>
            <form>
                <input type="text" value={ value } onChange={ inputChange } />
            </form>
        </>
    );
};


