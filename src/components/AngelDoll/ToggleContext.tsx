"use client";

/* eslint-disable react/jsx-no-constructed-context-values */
// ToggleContext.tsx
import React, { createContext, FC, useContext, useState } from "react";

interface ToggleContextProps {
  isHiddenText: boolean;
  toggleHandler: () => void;
}

const ToggleContext = createContext<ToggleContextProps | undefined>(undefined);

interface ToggleProviderProps {
  children: React.ReactNode;
}

export const ToggleProvider: FC<ToggleProviderProps> = ({ children }) => {
  const [isHiddenText, setIsHiddenText] = useState(true);

  const toggleHandler = () => {
    setIsHiddenText((prev) => !prev);
  };

  return (
    <ToggleContext.Provider value={{ isHiddenText, toggleHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
