const users = [
    {
        login: 'knuth',
        firstName: 'Donald',
        lastName: 'Knuth',
        likes: ['C', 'Unix'],
    },
    {
        login: 'norvig',
        firstName: 'Peter',
        lastName: 'Norvig',
        likes: ['AI', 'Search', 'NASA', 'Mars'],
    },
    {
        login: 'mfowler',
        firstName: 'Martin',
        lastName: 'Fowler',
        likes: ['Design Patterns', 'Refactoring'],
    },
    {
        login: 'kent',
        firstName: 'Kent',
        lastName: 'Beck',
        likes: ['TDD', 'wikis', 'Design Patterns'],
    },
];
export const lookup = (login, property) => {
    for (const element of users) {
        if (element.login === login) {
            if (element[property]) {
                return element[property];
            }
            else if (!element[property]) {
                throw new Error('Could not find property');
            }
        }
    }
    throw new Error("Could not find user");
};
