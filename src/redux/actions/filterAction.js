import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const toggleBrand = (brandName) => ({
  type: TOGGLE_BRAND,
  payload: brandName,
});

export const toggleStock = () => ({ type: TOGGLE_STOCK });
