import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            image: "",
            authUser: false
        }
    },
    reducers: {
        signIn(state, action) {
            const userId = action.payload;
            const userValidation =
                /^[0-9A-Za-z]{6,16}$/i.test(userId.name);
            const passwordValidation =
                /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/i.test(userId.password);

            state.user = userId;
            if (!userValidation || !passwordValidation) {
                state.user.authUser = false;
            } else {
                state.user.authUser = true;
                const saveState = JSON.stringify(userId);
                sessionStorage.setItem("authUser", saveState)
            }
        },
        signOut(state) {
            state.user = {
                name: "",
                password: "",
                image: "",
                authUser: false
            };
            sessionStorage.clear();
        }
    }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;