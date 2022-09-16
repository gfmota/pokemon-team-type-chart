import React, { PropsWithChildren, useContext, useState } from 'react';

const FormContext = React.createContext<any>({});

const FormContextProvider = ({ children }: PropsWithChildren) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <FormContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext);

export default FormContextProvider
