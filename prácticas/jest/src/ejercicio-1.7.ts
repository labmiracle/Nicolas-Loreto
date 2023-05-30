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

interface User {
    login: string;
    firstName: string;
    lastName: string;
    likes: string[];
}

export const lookup = (login: string, property: string): string | string[] => {

    for (const element of users) {

        if (element.login === login) {

            if (element[property as keyof User]) {
                return element[property as keyof User];
            } else if (!element[property as keyof User]) {
                throw new Error('Could not find property');
            }
        }

    } throw new Error("Could not find user");
};