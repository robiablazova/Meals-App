import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { mealData } from "./utils/constants";

export const ContextStore = createContext();

const initialState = {
  meals: mealData,
};

const reduser = (state, action) => {
  switch (action.type) {
    case "ADD_MEAL":
      return {
        ...state,
        meals: state.meals.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "INC_MEAL":
      return {
        ...state,
        meals: state.meals.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "DEC_MEAL":
      return {
        ...state,
        meals: state.meals.map((item) => {
          if (item.id === action.payload && item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.staticPrice,
            };
          }
          return item;
        }),
      };
      case "INITIALIZE_MEALS":
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return state;
  }
};
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // useEffect(() => {
  //   localStorage.setItem("meal", JSON.stringify(state.meals));
  // }, [state.meals]);

  useEffect(() => {
    const savedMeals = localStorage.getItem("meal");
    if (savedMeals) {
      dispatch({ type: "INITIALIZE_MEALS", payload: JSON.parse(savedMeals) });
    }
  }, []);

  const incMeal = (id) => {
    dispatch({ type: "INC_MEAL", payload: id });
  };
  const decMeal = (id) => {
    dispatch({ type: "DEC_MEAL", payload: id });
  };

  const addMeal = (id) => {
    dispatch({ type: "ADD_MEAL", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const value = {
    isModalOpen,
    state,
    incMeal,
    decMeal,
    addMeal,
    openModal,
    closeModal
  };

  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
};

export const useContextStore = () => useContext(ContextStore);
