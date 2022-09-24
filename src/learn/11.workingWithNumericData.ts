import { log, delimeterMsg, logF } from '../util';

function workingWithNumericData() {
  log(
    `Working with numeric data in MongoDB:

    In MongoDB, we have the following number types:
    - Integers (int32)
    - Longs (int64)
    - Doubles (64bit)
    - High precision doubles (128bit)
    
    The mongo shell is based on JavaScript, therefore all numbers will be converted to doubles by default, with some possible imprecision.

    To convert the number to desired type, use the following. We should use the "" marks around the number to avoid automatic conversion to double
    - db.coll.insertOne({ a: NumberInt("29") })
    - db.coll.insertOne({ a: NumberLong("5000000000") })
    - there is no double converter, because this is the default
    - db.coll.insertOne({ a: NumberDecimal("5000000000") }) // high precision value
    `,
  );
}

export default function numericData() {
  delimeterMsg('WORKING WITH NUMERIC DATA');
  logF(workingWithNumericData);
}
