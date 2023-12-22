import { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

export function useList() {
  return useContext(ListContext);
}
