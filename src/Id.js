import React, { createContext, useEffect, useState } from "react";

export const IdContext = createContext();

export const IdProvider = ({ children }) => {

    const [id, setId] = useState(1);

    return (
        <IdContext.Provider
            value={{
                id,
                setId
            }}>
            {children}
        </IdContext.Provider>
    )
}