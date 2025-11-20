
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { LeadData } from '../types';

interface FunnelContextType {
  leadData: LeadData | null;
  setLeadData: (data: LeadData) => void;
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export const FunnelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [leadData, setLeadDataState] = useState<LeadData | null>(null);

  const setLeadData = (data: LeadData) => {
    setLeadDataState(data);
  };

  return (
    <FunnelContext.Provider value={{ leadData, setLeadData }}>
      {children}
    </FunnelContext.Provider>
  );
};

export const useFunnel = (): FunnelContextType => {
  const context = useContext(FunnelContext);
  if (!context) {
    throw new Error('useFunnel must be used within a FunnelProvider');
  }
  return context;
};
