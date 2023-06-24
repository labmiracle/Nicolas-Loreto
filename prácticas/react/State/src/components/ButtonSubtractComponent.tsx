export const ButtonSubtractComponent = ( { text, action }: { text: number, action: () => void; } ) =>
{
    return (
        <>
            <h1>{ text }</h1>
            <button onClick={ action } >
                -1
            </button>
        </>

    );
};
