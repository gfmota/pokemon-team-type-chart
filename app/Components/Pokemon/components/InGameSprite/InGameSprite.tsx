import React from 'react';

interface InGameSpriteProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  pokemonName: string;
}

export const InGameSprite = ({ pokemonName, ...props }: InGameSpriteProps) => (
  <img
    src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonName}.gif`}
    alt="in game sprite"
    style={{ maxWidth: '100%', maxHeight: '100%' }}
    {...props}
  />
);
