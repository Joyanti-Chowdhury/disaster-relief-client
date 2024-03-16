import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TRelief = {
    id: number;
  _id: string;
  item: string;
  image: string;
  unit: string;
  quantity: number;
  ratings: number;
};
 type TInitialState ={
   reliefData: TRelief[]
 }
const initialState : TInitialState = {
  reliefData: [],
  // selectedItems:0,
  // totalAmount: 0,
  // totalQuantity: 0,
  // shippingCharges: 0,
  // taxAmount: 0,
  // grandTotal: 0,
  // isCartOpen: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.reliefData.push({ ...action.payload });
      console.log(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<TRelief>) => {
      const _id = action.payload;
      state.reliefData = state.reliefData.filter((item) => item !== _id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
