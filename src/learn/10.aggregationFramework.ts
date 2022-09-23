import { log, delimeterMsg, logF } from '../util';

function aggregationFramework() {
  log(
    `Aggregation framework in MongoDB:

    Aggregate method:
    - use the "aggregate([{...}, {...}])" method to apply rutrthe aggregations steps (pipeline)
    - method receives an array of steps. Each one of them receives the output of the previuos step and narrows the output.
    
    Operators:
    - use $match to match a specific condition, e.g. "db.coll.aggregate({$match: {gender: "female"}})"
    - use $group to group by, e.g. "db.coll.aggregate({$group: {_id: {state: "$location.state"}, totalPersons: {$sum: 1}}})"
    - $group operators: $avg, $first, $last, $min, $max, $sum, $addToSet, $stdDevPop, $stdDevAmp
    - pipeline:
      db.persons.aggregate([ {$match: {"dob.age": {$gt: 50}}}, {$group: {_id: {gender: "$gender"}, total: {$sum: 1}, average: {$avg: "$dob.age"} }} ])

    Projections:
    - Projections are similar to projections we used in the find method, to narrow the fields of the resulting object
    - Projections are used to transform and prepare data for the further ($group) usage. there can be multiple $project stages in a single query
    - We can also add a new fields, in addition to narrowing fields
    - db.persons.aggregate([ {$project: {_id: 0, gender: 1, fullName: {$concat: [{$toUpper: "$name.first"}, " ", {$toUpper: "$name.last"}]} }} ])
    - db.persons.aggregate([
      {
        $project: {
          _id: 0,
          name: 1,
          email: 1,
          birthdate: { $toDate: '$dob.date' },
          age: "$dob.age",
          location: {
            type: 'Point',
            coordinates: [
              {
                $convert: {
                  input: '$location.coordinates.longitude',
                  to: 'double',
                  onError: 0.0,
                  onNull: 0.0
                }
              },
              {
                $convert: {
                  input: '$location.coordinates.latitude',
                  to: 'double',
                  onError: 0.0,
                  onNull: 0.0
                }
              }
            ]
          }
        }
      },
      {
        $project: {
          gender: 1,
          email: 1,
          location: 1,
          birthdate: 1,
          age: 1,
          fullName: {
            $concat: [
              { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
              {
                $substrCP: [
                  '$name.first',
                  1,
                  { $subtract: [{ $strLenCP: '$name.first' }, 1] }
                ]
              },
              ' ',
              { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
              {
                $substrCP: [
                  '$name.last',
                  1,
                  { $subtract: [{ $strLenCP: '$name.last' }, 1] }
                ]
              }
            ]
          }
        }
      },
      { $group: { _id: { birthYear: { $isoWeekYear: "$birthdate" } }, numPersons: { $sum: 1 } } },
      { $sort: { numPersons: -1 } }
    ]).pretty();  
    
    - use $push (or $addToSet) and $unwind (make flat - split an array to single documents) to create a new array from every element's existing array
      db.coll.aggregate([
        {$unwind: {"$coordinates"}},
        {$group: { _id: "$age", allCoordinates: {$push: {"$coordinates"}} }}
      ])

    - use $slice in projection to get only specific array elements 
      db.coll.aggregate([
        {$project: { _id: "0", examScore: {$slice: {"$examScores", 1}} }}
      ])

    - use $filter to filter the projection results
      db.friends.aggregate([
        { $project: { _id: 0, scores: { $filter: { input: '$examScores', as: 'sc', cond: { $gt: ["$$sc.score", 60] } } } } }
      ]).pretty();

    - apply multilpe operations on arrays
      db.friends.aggregate([
        { $unwind: "$examScores" },
        { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
        { $sort: { score: -1 } },
        { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
        { $sort: { maxScore: -1 } }
      ]).pretty();

    - working with buckets (group into predefined categories)
      db.persons.aggregate([
          {
            $bucket: {
              groupBy: '$dob.age',
              boundaries: [18, 30, 40, 50, 60, 120],
              output: {
                numPersons: { $sum: 1 },
                averageAge: { $avg: '$dob.age' }
              }
            }
          }
        ])
      .pretty();
      db.persons.aggregate([
        {
          $bucketAuto: {
            groupBy: '$dob.age',
            buckets: 5,
            output: {
              numPersons: { $sum: 1 },
              averageAge: { $avg: '$dob.age' }
            }
          }
        }
      ]).pretty();

    - Pupeline: matching, projecting, sorting, skipping and limiting (order matters)
      db.persons.aggregate([
        { $match: { gender: "male" } },
        { $project: { _id: 0, gender: 1, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: { $toDate: "$dob.date" } } },
        { $sort: { birthdate: 1 } },
        { $skip: 10 },
        { $limit: 10 }
      ]).pretty();

    - writing the results to a new collection
      {$out: "transformedPersons"}

    - working with $geoNear stage
      db.transformedPersons.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [-18.4, -42.8]
            },
            maxDistance: 1000000,
            num: 10,
            query: { age: { $gt: 30 } },
            distanceField: "distance"
          }
        }
      ]).pretty();
    `,
  );
}

export default function aggregation() {
  delimeterMsg('AGGREGATION FRAMEWORK');
  logF(aggregationFramework);
}
