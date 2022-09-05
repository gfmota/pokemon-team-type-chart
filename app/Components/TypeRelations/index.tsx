import React from "react";
import { useTypeRelations } from "./hooks";

const TypeRelations = () => {
  const { typeRelations, renderTypesList } = useTypeRelations();

  return (
    <div style={{display: 'flex', gap: 20}} >
      <div>4x {renderTypesList(typeRelations.x4)}</div>
      <div>2x {renderTypesList(typeRelations.x2)}</div>
      <div>0x {renderTypesList(typeRelations.x0)}</div>
      <div>0.5x {renderTypesList(typeRelations.x05)}</div>
      <div>0.25x {renderTypesList(typeRelations.x025)}</div>
    </div>
  );
};

export default TypeRelations;
