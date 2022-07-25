import basicCRUD from './basicCRUD';
import create from './createOperations';
import introduction from './introduction';
import read from './readOperations';
import structuringDocuments from './structuringDocuments';

export function main() {
  introduction();
  basicCRUD();
  structuringDocuments();
  create();
  read();
}
