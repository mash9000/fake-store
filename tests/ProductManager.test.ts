import { describe, it, expect, vi, beforeEach } from "vitest";
import { ProductManager } from "../src/API/implementations/ProductManager";

describe("ProductManager", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("возвращает массив IProduct, преобразованный из DSProduct", async () => {
        // 1. Мокаем ответ сервера
        const mockResponse = [
            {
                id: 10,
                title: "Test product",
                category: "Category",
                price: 99.99,
                rating: { rate: 4.5, count: 100 },
                image: "https://example.com/img.png"
            }
        ];

        // 2. Мокаем fetch
        global.fetch = vi.fn().mockResolvedValue({
            json: () => Promise.resolve(mockResponse)
        });

        const pm = new ProductManager();

        // 3. Вызываем метод
        const products = await pm.getAllProducts();

        // 4. Проверяем, что это массив
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBe(1);

        const p = products[0];

        // 5. Проверяем, что объект соответствует интерфейсу IProduct
        expect(p).toEqual(
            expect.objectContaining({
                getId: expect.any(Function),
                getTitle: expect.any(Function),
                getCategory: expect.any(Function),
                getPrice: expect.any(Function),
                getRate: expect.any(Function),
                getImageUrl: expect.any(Function)
            })
        );

        // 6. Проверяем корректность данных
        expect(p.getId()).toBe(10);
        expect(p.getTitle()).toBe("Test product");
        expect(p.getCategory()).toBe("Category");
        expect(p.getPrice().getValue()).toBe(99.99);
        expect(p.getRate().getValue()).toBe(4.5);
        expect(p.getImageUrl()).toBe("https://example.com/img.png");
    });
});
