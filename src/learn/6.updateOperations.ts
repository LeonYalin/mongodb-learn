import { log, delimeterMsg, logF } from '../util';

function updateOperations() {
  log(
    `Update operations in MongoDB:

    - Main create methods are "updateOne(data)" and "updateMany(data)"
    - use $set to replace values, e.g. "db.coll.updateOne({"hobbies.title": "Sports"}, {$set: {hobbies: [{title: "Cooking", frequency: 4}, {title: "Sports", frequency: 6}]} })"
    - use $inc to increment/decrement values, e.g. "db.coll.updateOne({}, {$inc: {age: 2}})"
    - use $min, $max & $mul to update values according to the min/max provided, $mul is similar to $inc
    - use $unset to drop a field, e.g. "db.coll.updateOne({}, {$unset: {phone: ""}})"
    - use $rename to rename a field, e.g. "db.coll.updateOne({}, {$rename: {age: "totalAge"}})"
    - use $upsert to update or insert if not exist, e.g. "db.coll.updateOne({}, {}, {upsert: true})"
    - use $ to update an array element, e.g. "db.coll.updateOne({}, {$set: {"hobbies.$.new_field": true}})"
    - use $ to update all array elements, e.g. "db.coll.updateMany({}, {$set: {"hobbies.$[].new_field": true}})"
    - use arrayFilters to filter elements while updating, e.g. "db.coll.updateOne({}, {$set: {"hobbies.$[el].new_field": true}}, {arrayFilters: [{"el.frequency": {$gt: 2}}]})"
    - use $push to add an element to array, e.g. "db.coll.updateOne({}, {$push: {hobbies: {title: "Sports", frequency: 2}}})"
    - we can use an alternate syntax to $push, e.g. "db.coll.updateOne({}, {$push: {hobbies: {$each: [{title: "Sports", frequency: 2}, {title: "Cooking", frequency: 1}], $sort: {frequency: -1}, $slice: 1} }})"
    - use $pull, $pop to remove an element (last for $pop) from array, e.g. "db.coll.updateOne({}, {$pull: {title: "Hiking"}})"
    - use $addToSet to add a unique element to array, similar to $push but unique
    `,
  );
}

export default function update() {
  delimeterMsg('UPDATE OPERATIONS');
  logF(updateOperations);
}
