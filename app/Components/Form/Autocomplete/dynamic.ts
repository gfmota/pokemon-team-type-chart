import dynamic from 'next/dynamic';
import { AutocompleteProps } from './Autocomplete';

export const DynamicAutocomplete = dynamic<AutocompleteProps>(() =>
  import('./Autocomplete').then((mod) => mod.Autocomplete)
);
