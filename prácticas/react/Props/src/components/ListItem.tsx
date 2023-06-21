export type MyList = {
    li: string;
};

export function ListItemComponent ()
{
    const myList: MyList[] = [
        { li: "Observar el HTML" },
        { li: "Pensar en cómo puedo extraer cada parte en componentes" },
        { li: "Usarlos, o mejor dicho, reusarlos en React" },

    ];
    return myList.map( ( element ) => <li>{ element.li }</li> );
}