import { log, delimeterMsg, logF } from '../util';

function workingWithGeospatialData() {
  log(
    `Working with geospatial data in MongoDB:

    - MongoDB supports GeoJSON objects standart, which specification can be found in the internet
    - The location should be an embedded document and look like this:
      db.coll.insertOne({name: "Tel Aviv", {location: {type: "Point", coordinates: [32.0879267,34.7622266]}}})
    - to work with geo data, we have to have a GeoIndex: "db.coll.createIndex({location: "2dsphere"})"
    - use this query to find a place near another place:
      db.coll.find({location: {$near: {$geometry: {type: "Point", coordinates: [32.0879267,34.7622266]}, $maxDistance: 500, $minDistance: 10}}})
    - use this query to find all places within an area:
    - use this query to find if the user's place is within an area:
      db.coll.find({ area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [x, y]}} })
    - use this query to find all the places what are within an area around the user's place:
      db.coll.find({location: {$geoWithin: {$centerSphere: [[userX, userY], 1/6]} }}) - (1/6 is ~ 1km radius)
    `,
  );
}

export default function geospatial() {
  delimeterMsg('WORKING WITH GEOSPATIAL DATA');
  logF(workingWithGeospatialData);
}
