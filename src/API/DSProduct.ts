export interface DSProduct {
    id: number;
    title: string;
    price: number,
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number,
        count: number
    }
}