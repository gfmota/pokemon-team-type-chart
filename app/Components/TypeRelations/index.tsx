import Image from "next/image";
import React from "react";
import { useTypeRelations } from "./hooks";

const TypeRelations = () => {
  const { typeRelations, renderTypesList } = useTypeRelations();
  if (typeRelations === null) return null;

  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '0 25px'}} >
      <div><Image src='/icons/4x.svg' width={64} height={64} alt="it's super effective" /> {renderTypesList(typeRelations.x4)}</div>
      <div><Image src='/icons/2x.svg' width={64} height={64} alt="it's super effective" /> {renderTypesList(typeRelations.x2)}</div>
      <div><Image src='/icons/0x.svg' width={64} height={64} alt="it doesn't affect" /> {renderTypesList(typeRelations.x0)}</div>
      <div><Image src='/icons/1:2x.svg' width={64} height={64} alt=" it's not very effective" /> {renderTypesList(typeRelations.x05)}</div>
      <div><Image src='/icons/1:4x.svg' width={64} height={64} alt=" it's not very effective" /> {renderTypesList(typeRelations.x025)}</div>
    </div>
  );
};

export default TypeRelations;
