import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plansItem: [],
  addOne: [],
  totalAdd: 0,
  isYear: false,
  activePlane: [],
  activeAdd: [],
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    addPlane: (state, action) => {
      state.plansItem = [];

      const planItem = state.plansItem.find(
        (plan) => plan.id === action.payload.id
      );
      state.plansItem = [];

      if (state.isYear) {
        state.plansItem = [];
        state.plansItem?.indexOf(planItem)
          ? (state.plansItem[0] = { ...action.payload, costPerMonth: 0 })
          : "";
      }
      if (!state.isYear) {
        state.plansItem = [];
        state.plansItem?.indexOf(planItem)
          ? (state.plansItem[0] = { ...action.payload, costPerYear: 0 })
          : "";
      }
    },

    toggleYear: (state) => {
      state.isYear = !state.isYear;
      state.plansItem = [];
    },

    toggleActive: (state, action) => {
      const index = state.plansItem?.find((i) => i.id === action.payload.id);
      state.activePlane.indexOf(index) === -1
        ? (state.activePlane[0] = action.payload.id)
        : "";
    },

    resetActive: (state) => {
      state.activePlane = [];
    },
    //===================================================================

    addAddOns: (state, action) => {
      const addOnsItem = state.addOne.find(
        (addOne) => addOne.id === action.payload.id
      );
      if (state.isYear) {
        state.addOne?.indexOf(addOnsItem) === -1
          ? state.addOne.push({ ...action.payload, costPerMonth: 0 })
          : "";
      } else if (!state.isYear) {
        state.addOne?.indexOf(addOnsItem) === -1
          ? state.addOne.push({ ...action.payload, costPerYear: 0 })
          : "";
      }
      let total = 0;
      if (state.addOne.length) {
        state.addOne.forEach((add) => {
          state.isYear
            ? (total += add.costPerYear)
            : (total += add.costPerMonth);
        });
      } else {
        state.totalAdd = 0;
      }

      state.totalAdd = total;
    },

    removeAddOns: (state, action) => {
      state.addOne.map((add) => {
        if (add.id === action.payload.id) {
          state.addOne = state.addOne.filter((item) => item.id !== add.id);
        }

        let total = 0;
        if (state.addOne.length) {
          state.addOne.forEach((add) => {
            state.isYear
              ? (total += add.costPerYear)
              : (total += add.costPerMonth);
          });
        } else {
          state.totalAdd = 0;
        }
      });
    },

    toggleActiveAddOne: (state, action) => {
      const id = action.payload;
      if (state.activeAdd.includes(id)) {
        state.activeAdd.splice(state.activeAdd.indexOf(id), 1);
        let total = 0;
        if (state.addOne.length) {
          state.addOne.forEach((add) => {
            state.isYear
              ? (total += add.costPerYear)
              : (total += add.costPerMonth);
          });
        } else {
          state.totalAdd = 0;
        }

        state.totalAdd = total;
      } else {
        state.activeAdd.push(id);
        let total = 0;
        if (state.addOne.length) {
          state.addOne.forEach((add) => {
            state.isYear
              ? (total += add.costPerYear)
              : (total += add.costPerMonth);
          });
        } else {
          state.totalAdd = 0;
        }

        state.totalAdd = total;
      }
    },
  },
});
export const planItemState = (state) => state.plans.plansItem;
export const isYearState = (state) => state.plans.isYear;
export const activePlaneState = (state) => state.plans.activePlane;
export const activeAddState = (state) => state.plans.activeAdd;
export const addOneState = (state) => state.plans.addOne;
export const totalState = (state) => state.plans.totalAdd;

export const {
  addPlane,
  toggleYear,
  toggleActive,
  resetActive,
  addAddOns,
  removeAddOns,
  toggleActiveAddOne,
} = plansSlice.actions;

export default plansSlice.reducer;
