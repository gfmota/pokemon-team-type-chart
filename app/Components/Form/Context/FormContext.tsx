import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const FormContext = React.createContext<any>({});

const FormContextProvider = ({ children }: PropsWithChildren) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!inputRef.current) return;
      if (!(inputRef.current as any).contains(event.target)) {
        setShowAutocomplete(false);
        return;
      }
      setShowAutocomplete(true);
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setShowAutocomplete]);

  return (
    <FormContext.Provider
      value={{ inputValue, setInputValue, inputRef, showAutocomplete }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);

export default FormContextProvider;
