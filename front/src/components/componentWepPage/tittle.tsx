import React from 'react';

export interface TitleProps {
  name: string;
  description: string;
}

export default function Tittle({ name, description }: TitleProps) {
  return (
    <div>
      <h1><u>{name}</u></h1>
      <h2>{description}</h2>
    </div>
  );
}
