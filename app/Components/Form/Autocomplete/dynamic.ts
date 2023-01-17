import dynamic from 'next/dynamic';

export const DynamicAutocomplete = dynamic(() =>
  import('./Autocomplete').then((mod) => mod.Autocomplete)
);
