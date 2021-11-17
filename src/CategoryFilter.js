import React, { useState } from "react";

export default function CategoryFilter(props) {

    function handleCategoryChange(event) {
        var val = event.target.value;
        props.handleCategoryChange(val);
    }

    return (
        <div>
            <label>
                Category
            </label>
            <select
                value={props.category}
                onChange={handleCategoryChange}
            >
                <option value="shoes">Shoes</option>
                <option value="shirts">Shirts</option>
            </select>
        </div>
    )
}
