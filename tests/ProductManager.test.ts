import {describe, it, expect, vi, beforeEach} from "vitest";
import {ProductManager} from "../src/API/implementations/ProductManager";

describe("ProductManager", async () => {
    global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
            {
                id: 13,
                title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                price: 599,
                description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
                category: "electronics",
                image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
                rating: {
                    rate: 2.9,
                    count: 250,
                }
            }
        ]
    } as any);

    const productManager: ProductManager = new ProductManager();
    const products = await productManager.getAllProducts();
    it('check length', () => {
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBe(1);
    });
})
