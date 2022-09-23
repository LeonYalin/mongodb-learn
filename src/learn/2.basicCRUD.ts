import { log, delimeterMsg, logF } from '../util';

function crudOperations() {
  log(
    `CRUD Operations in MongoDB:

    - Use "insertOne(data, options)" or "insertMany(data, options)" to insert documents.
      db.myCollection.insertMany([
        {
          "departureAirport": "MUC",
          "arrivalAirport": "SFO",
          "aircraft": "Airbus A380",
          "distance": 12000,
          "intercontinental": true
        },
        {
          "departureAirport": "LHR",
          "arrivalAirport": "TXL",
          "aircraft": "Airbus A320",
          "distance": 950,
          "intercontinental": false
        }
      ])
    
    - Use "find(filter, options)" or "findOne(filter, options)" to find/filter documents
      db.myCollection.find({name: "Leon Yalin"})
      db.myCollection.find({distance: {$gt: 10000}})

    - Use "updateOne(filter, data, options)", "updateMany(filter, data, options)" or "replaceOne(filter, data, options)" to update/replace documents
      db.myCollection.updateOne({_id: ObjectId("5b97883ce62da95ae64206av")}, {$set: {delayed: true}})

    - Use "deleteOne(filter, options)" or "deleteMany(filter, options)" to delete documents
      db.myCollection.deleteOne({name: "Leon Yalin"})

    The Cursor object:
    - The find() command uses the Cursor object that allows up to loop through the data.
    - The "db.myCollection.find()" will not show all objects, but only portion of it (20 objects by defult)
    - Use "db.myCollection.find().toArray()" to get all objecs
    - Use "db.myCollection.find().forEach((data) => printjson(data))" to print all the data

    Projection:
    - Use projections to filter the data that is being returned from the DB, to reduce load.
    - Using "db.myCollection.find({}, {name: 1}).pretty()" will only fetch a "name" property from each document
    - By default, the "_id" property is always included. To disable this, use "db.myCollection.find({}, {_id: 0})"

    Embedded documents
    - Embedded documents are like JSON nested properties
    - We can have up to 100 levels of nesting, max document size is 16mb
    - Arrays of documents are also supported, similar to JSON
    - Use "db.myCollection.find({"status.description": "on-time"})" to search for nested objects
    `,
  );
}

export default function basicCRUD() {
  delimeterMsg('BASIC CRUD');
  logF(crudOperations);
}
