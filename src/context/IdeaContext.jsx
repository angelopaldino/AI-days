import React, { createContext, useContext, useState } from 'react';

const IdeaContext = createContext();

export const IdeaProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [idea, setIdea] = useState("");

  return (
    <IdeaContext.Provider value={{ isLoading, setIsLoading, idea, setIdea }}>
      {children}
    </IdeaContext.Provider>
  );
};

export const useIdea = () => {
  const context = useContext(IdeaContext);
  if (!context) {
    throw new Error('useIdea must be used within an IdeaProvider');
  }
  return context;
};
