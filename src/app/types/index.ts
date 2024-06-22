
export type FixedArray<T, L extends number> = L extends L ? [...T[]] & { length: L } : never;

export interface UserProps {
    id: number;
    username: string;
    balance: number;
}

export interface JobProps {
    id: number
    attributes: {
        name: string;
        price: number;
        description: string;
        createdAt: string;
        minSalary: number;
        maxSalary: number;
        locationName: string;
        locationCoordinates: {
            address: string;
            coordinates: {
                lat: number;
                lng: number;
            },
            geohash: string;
        },
        slug: string;
        employer: {
            data: EmployerProps
        },
        city: {
            data: {
                id: number;
                attributes: {
                    name: string;
                }
            }
        },
        category: {
            data: {
                id: number;
                attributes: {
                    name: string;
                }
            }
        }
        contacts: ContactsProps[];
    }
}

export interface EmployerProps {
    id: number;
    attributes: {
        name: string;
        description: string;
        rating: number;
        locationName: string;
        isScammer: boolean;
    }
}

export interface PaginationProps {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ContactsProps {
    id: number;
    type: string;
    value: string;
}

export interface ImageProps {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: string | null;
            url: string;
        }
    }
}
