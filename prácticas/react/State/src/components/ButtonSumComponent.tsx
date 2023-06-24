export const ButtonSumComponent = ( { action }: { action: () => void; } ) =>
{
    return (
        <>

            <button onClick={ action } >
                +1
            </button>
        </>

    );
};