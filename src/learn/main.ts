import basicCRUD from './basicCRUD';
import create from './createOperations';
import deleteOp from './deleteOperations';
import introduction from './introduction';
import read from './readOperations';
import structuringDocuments from './structuringDocuments';
import update from './updateOperations';
import geospatial from './workingWithGeospatialData';
import indexes from './workingWithIndexes';

export function main() {
  introduction();
  basicCRUD();
  structuringDocuments();
  create();
  read();
  update();
  deleteOp();
  indexes();
  geospatial();
}
