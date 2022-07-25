import { log, delimeterMsg, logF } from '../util';

function readOperations() {
  log(
    `Read operations in MongoDB:

    - Main create methods are "find(filter)" and "findOne(filter)"

    Operators:
    - Can be divided into Query selectors & Projection operatiors

    - "Query" filters narrow the results by applying a filter on them.
        * Comparation
          - $eq: Equals
          - $ne: Not equals
          - $lt/$lte: Lower than/Lower than equals
          - $gt/$gte: Greater than/greater than equals
          - $in/$nin: Included/Not included in provided array, e.g. "db.coll.find({ rating: {$in: [30, 42]} })"
  
        * Logical
          - $or/nor: like || and !||, e.g. "db.coll.find({ $or: [{ rating: {$gt: 9.3}}, rating: {$lt: 4.5} }}] })
          - $and/$not: like && and !&&, e.g. similar to "or". We can also just specify several keys in the filter
  
        * Element
          - $exists: checks if a property exists in a document, e.g. "db.coll.find({ age: {$exists: true, $ne: null} })"
          - $type: allows to check a property type, , e.g. "db.coll.find({ number: {$type: "number"} })"

        * Evaluations
          - $regex: search using regex, e.g. "db.coll.find({ summary: {$regex: /musical/} })" (not performant)
          - $expr: compare using condition expression,e.g.
            db.coll.find({ $expr: {$gt: [{$cond: {if: {$gte: {["$field", 190]}, then: {$subtract: ["$field", 10]}, else: "$field"}}, "$another_field"]} })
          - $jsonSchema: find an element that has a certin json schema
          - $mod: modulo operator
        * Array
          - $size: search for specific array size, e.g. "db.coll.find({ hobbies: {$size: 3} })"
          - $elemMatch: search for array element match, e.g. "db.coll.find({ $elemMatch: {title: "Sports", frequency: {$gt: 3}} })"
          - $all: search for all values of some field, e.g. "db.coll.find({ genre: {$all: ["action", "drama"]} })"
        * Comments

    - Cursor
        * Store cursor in a variable: "const cursor = db.coll.find()"
        * Count: "cursor.count()"
        * Next: "cursor.next()"
        * Has next: "cursor.hasNext()"
        * ForEach: "cursor.forEach(doc => { printjson(doc) })"
        * Sort: "cursor.sort({ "rating.average": 1, runtime: -1 })"
        * Skip & Limit: "cursor.skip(10).limit(100)"

    - "Projections" filters allow to narrow the data output
        * The second parameter of the "find" operation allows returning only the relevant fields, to reduce db & network load and fetch time
          db.coll.find({}, {name: 1, "meta.rating", 1, _id: 0} })
        * $: in arrays, show the specific match, e.g. "db.coll.find({ genres: "drama"}, {"genres.$": 1} })"
        * $elemMatch: match the specific array element, e.g. "db.coll.find({ genres: "drama"}, {genres: {$elemMatch: {$eq: "Horror"}}} })"
        * $slice: slice the array to search only on sliced elements, e.g. "db.coll.find({ genres: "drama"}, {genres: {$slice: [1, 2], name: 1}} })"
    `,
  );
}

export default function read() {
  delimeterMsg('READ OPERATIONS');
  logF(readOperations);
}
