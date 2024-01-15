import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        FilteredProducts:
            JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleProduct:
            JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter(
                    (product) => product.type === action.payload
                );
                state.filteredProducts = filter;
                console.log("filter", filter)
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", saveState)
            } catch (err) {
                console.error(err);
            };
        },
        singleProduct(state, action) {
            try {
                const oneProduct = storeData.filter(
                    (product) => product.id === action.payload
                );
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct", saveState);
                console.log("oneProduct", oneProduct)
            } catch (err) {
                console.error(err);
            };
        },
        colorFilter(state, action) {
            try {
                console.log("Action Payload:", action.payload);

                const color = state.filteredProducts.filter((product) =>
                    product.color.includes(action.payload)
                );

                console.log("FilteredProducts:", color);

                state.filteredProducts = color.length > 0 ? color : [];
                const saveState = JSON.stringify(color);
                sessionStorage.setItem("filterData", saveState);
            } catch (err) {
                console.error(err);
                return state;
            };
        },
        sizeFilter(state, action) {
            try {
                const size = state.filteredProducts.filter((product) =>
                    product.size.includes(action.payload)
                );
                state.filteredProducts = size;
                if (size.length <= 0) {
                    state.filteredProducts = [];

                } else {
                    state.filteredProducts = size;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem("filterData", saveState);
                }
            } catch (err) {
                console.error(err);
            };
        },
        sortByPriceFilter(state, action) {
            try {
                const price = state.filteredProducts.sort((a, b) => {
                    return a.price - b.price;
                });
                state.filteredProducts = price;
                let count = price.length;
                if (count > 1) {
                    const noError = false;
                    state.error = noError;
                    if (noError) {
                        const saveState = JSON.stringify(price);
                        sessionStorage.setItem("filterData", saveState);
                    } else {

                    }
                } else {
                    state.error = true;
                }

            } catch (err) {
                console.error(err);
            };
        }
    }
});

export const { filterProducts, singleProduct, colorFilter, sizeFilter, sortByPriceFilter } = productsSlice.actions;
export default productsSlice.reducer;
