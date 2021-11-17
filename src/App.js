import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

export default function App(props) {

    const [category, setCategory] = useState("shirts");
    const [maxPrice, setMaxPrice] = useState(100.00);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Jordan Shoes",
            category: "shoes"
        },
        {
            id: 2,
            name: "Lebron Shoes",
            category: "shoes"
        },
        {
            id: 3,
            name: "Carter Shoes",
            category: "shoes"
        },
        {
            id: 4,
            name: "Polo Shirt",
            category: "shirts"
        },
        {
            id: 5,
            name: "Roundneck Shirt",
            category: "shirts"
        },
        {
            id: 6,
            name: "Casual Shirt",
            category: "shirts"
        }
    ]);

    function handleCategoryChange(val) {
        setCategory(val);
    }

    function handleMaxPriceChange(event) {
        var val = event.target.value;
        setMaxPrice(val);
    }

    function renderProducts() {
        return (
            <div>
                {
                    products.map(function(product) {
                        if(product.category == category) {
                            return (
                                <div>
                                    <h2>{product.name}</h2>
                                    <h3>{product.category}</h3>
                                </div>
                            )

                        }
                    })
                }
            </div>
        )
    }

    return (
        <div>
            <CategoryFilter
                handleCategoryChange={handleCategoryChange}
                category={category}
            />

            <label>
                Max Price
            </label>
            <input
                value={maxPrice}
                type="number"
                onChange={handleMaxPriceChange}
            />

            <ul>
                <li>Category: {category}</li>
                <li>Max Price: {maxPrice}</li>
            </ul>

            <hr></hr>
            <h1>Products</h1>
            {renderProducts()}
        </div>
    )
}
