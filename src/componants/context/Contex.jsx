import React, { createContext, useState } from 'react';

// Create the context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0);

    return (
        <GlobalContext.Provider value={{ quantity, setQuantity }}>
            {children}
        </GlobalContext.Provider>
    );
};
