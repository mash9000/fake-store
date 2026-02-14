export class CentreURLRequests {
    public static getAllProducts(): string {
        return 'https://fakestoreapi.com/products/';
    }

    public static addNewProduct(): string {
        // method: 'POST'
        // headers: { 'Content-Type': 'application/json' },
        return 'https://fakestoreapi.com/products/'
    }

    public static getASingleProduct(): string {
        return 'https://fakestoreapi.com/products/'
    }

    public static deleteAProduct(): string {
        // METHOD: DELETE
        return 'https://fakestoreapi.com/products/';
    }
}