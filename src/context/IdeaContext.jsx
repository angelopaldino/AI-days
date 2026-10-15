import React, { createContext, useContext, useState } from 'react';

const IdeaContext = createContext();

export const IdeaProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [idea, setIdea] = useState("");
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <IdeaContext.Provider value={{ isLoading, setIsLoading, idea, setIdea, analysisData, setAnalysisData }}>
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
