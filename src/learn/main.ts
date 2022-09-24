import introduction from './1.introduction';
import basicCRUD from './2.basicCRUD';
import create from './4.createOperations';
import deleteOp from './7.deleteOperations';
import read from './5.readOperations';
import structuringDocuments from './3.structuringDocuments';
import update from './6.updateOperations';
import geospatial from './9.workingWithGeospatialData';
import indexes from './8.workingWithIndexes';
import aggregation from './10.aggregationFramework';
import numericData from './11.workingWithNumericData';

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
  aggregation();
  numericData();
}
