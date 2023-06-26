export const InputComponent = ( { value, onChange }: { value: string; onChange: ( value: string ) => void; } ) =>
{


    const inputChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        onChange( event.target.value );
    };

    return (
        <div className="input">
            <h2>Ingrese a continuación:</h2>
            <form>
                <input type="text" value={ value } onChange={ inputChange } />
            </form>
        </div>
    );
};


