// File: components/UserTierContext.jsx

import { createContext, useContext, useState } from "react";

const UserTierContext = createContext("free");

export function UserTierProvider({ children, initialTier = "free" }) {
  const [tier, setTier] = useState(initialTier);

  return (
    <UserTierContext.Provider value={{ tier, setTier }}>
      {children}
    </UserTierContext.Provider>
  );
}

export function useUserTier() {
  const context = useContext(UserTierContext);
  if (typeof context === "string") return context; // fallback for default
  return context.tier;
}
