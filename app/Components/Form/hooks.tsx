import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useTeamContext } from '../../Context/hook';
import { getPokemon } from '../../Services';
import { useFormContext } from './Context/FormContext';

export function usePokemonInput() {
  const { inputValue, setInputValue, inputRef } = useFormContext();
  const { addPokemon } = useTeamContext();
  const [error, setError] = useState<string | null>(null);
  const { refetch, isLoading } = useQuery(
    'GET_POKEMON',
    () => getPokemon(inputValue),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      onSuccess: (data) => {
        try {
          addPokemon(data);
          setError(null);
        } catch (e: any) {
          setError(e.message);
        }
      },
      onError: () => setError(`${inputValue} not found`),
      onSettled: () => setInputValue(''),
    }
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isLoading) return;

      setInputValue(e.target.value);
    },
    [isLoading, setInputValue]
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isLoading) return;
      refetch();
    },
    [isLoading, refetch, setInputValue]
  );

  return {
    onChange,
    onSubmit,
    error,
    inputValue,
    inputRef,
    isLoading,
  };
}
