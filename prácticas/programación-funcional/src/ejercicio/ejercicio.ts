interface User
{
    firstName: string,
    lastName: string,
    role: string;
}

const users = [
    {
        firstName: "Bradley",
        lastName: "Bouley",
        role: "Full Stack Resident"
    },
    {
        firstName: "Chloe",
        lastName: "Alnaji",
        role: "Full Stack Resident"
    },
    {
        firstName: "Jonathan",
        lastName: "Baughn",
        role: "Enterprise Instructor"
    },
    {
        firstName: "Michael",
        lastName: "Herman",
        role: "Lead Instructor"
    },
    {
        firstName: "Robert",
        lastName: "Hajek",
        role: "Full Stack Resident"
    },
    {
        firstName: "Wes",
        lastName: "Reid",
        role: "Instructor"
    },
    {
        firstName: "Zach",
        lastName: "Klabunde",
        role: "Instructor"
    },
];

// 1. Mapealo a un arreglo de strings: firstName-lastName: role

function map ( arr: User[] )
{
    const maped = arr.map( e =>
    {
        return `${ e.firstName }-${ e.lastName }: ${ e.role }`;
    } );
    return maped;
};

// 2. Filtra aquellos usuarios con role de Full Stack Resident

function filter ( arr: User[] )
{

    const filtered = arr.filter( e =>
    {
        return e.role === 'Full Stack Resident';
    } );

    return filtered;

}

filter( users );

// 3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo
// con los objetos usuarios que tienen dicho role


function reduce ( arr: User[] )
{

    const reduced = arr.reduce( ( obj: Record<string, User[]>, e ) =>
    {
        if ( !obj[ e.role ] )
        {
            obj[ e.role ] = [];
        }
        obj[ e.role ].push( e );

        return obj;

    }, {} );

    return reduced;
}

reduce( users );


// 4. Genera una función de búsqueda de un usuario por firstName con find

function find ( arr: User[] )
{
    const finded = arr.find( e =>
    {
        return e.firstName === 'Zach';
    } );

    return finded;
}
find( users );
