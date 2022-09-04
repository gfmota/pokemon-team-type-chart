import React from "react";
import { usePokemonInput } from "./hooks";

const Input = () => {
  const {error, setInputValue, onSubmit} = usePokemonInput();

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">enviar</button>
      </form>
      {error && 'ID ou nome não encontrado'}
    </>
  )
}

export default Input
