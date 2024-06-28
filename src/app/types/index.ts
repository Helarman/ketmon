
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
            formats?:{
                medium:{ url: string};
                small:{ url: string};
                large:{ url: string};
            }
        }
    }
}
export interface ImagesProps {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: string | null;
            url: string;
        }
    }[]
}


export interface LandlordProps {
    id: number;
    attributes: {
        name: string;
        description: string;
        rating: number;
        locationName: string;
        isScammer: boolean;
        isCompany: boolean;
    }
}

export interface RealEstateProps {
    id: number
    attributes: {
        type: string;
        size: number;
        rooms: number;
        perMonth: number;
        price: number;
        description: string;
        createdAt: string;
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
        landlord: {
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
        contacts: ContactsProps[];
        images: ImagesProps;
    }
}


export interface WalletButtonProps {
    id: number;
    attributes: {
        name: string;
        link: string;
        color: string;
        background: string;
    }
}

export interface ReviewProps {
    id: number;
    attributes: {
        text: string;
        rating: number;
        createdAt: string;
        users_permissions_user: { data: { attributes: { username: string; } } };
        employer: EmployerProps
    }
}

export interface ItemsProps {
    id: number;
    attributes: {
        name: string;
        type: string;
        price: number;
        contacts: ContactsProps[];
        city: {
            data: {
                id: number;
                attributes: {
                    name: string;
                }
            }
        }
        image: ImageProps
    }
}