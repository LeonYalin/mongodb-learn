import { log, delimeterMsg, logF } from '../util';

function workingWithIndexes() {
  log(
    `Working with indexes in MongoDB:

    - Indexes are ordered collections of indexed keys -> values
    - Indexes speed up read operations, but slow down the inserts, because they need to update the index.
    - We can see the mongodb detailed info by using "db.coll.explain().find({...});
    - This will show us the "winningPlan" strategy: "COLLSCAN->filter" or "IXSCAN->FETCH", and "rejectedPlans" 
    - To get even more details, we can use "db.coll.explain("executionStats").find({...})"
    - We can drop the index, e.g. "db.contacts.dropIndex({"dob.age": 1})"
    - For small collections or queries that return all elements, using indexes might slow down the search(extra step)
    - Indexes can also help with sorting
    - MongoDB has a threshold of 32mb of memory to hold the fetched documents
    - Use "db.coll.getIndexes()" to show all indexes for a colltion
    - A covered query is query that requests only for keys in the index, therefore not scanning documents

    Index types:
    - Single field index: e,g, "db.contacts.createIndex({"dob.age": 1})" (1/-1 for changing order)
    - Compound index: e,g, "db.contacts.createIndex({"dob.age": 1, gender: 1})"
    - Default index is always created for a collection, by "_id"
    - Unique index: e,g, "db.contacts.createIndex({"dob.age": 1}, {unique: 1})"
      * unique indexes help validating the data. It will throw an error in case of inserted data has duplications
    - Partial index: e,g, "db.contacts.createIndex({"dob.age": 1}, {partialFilterExpression: {gender: "male"}})"
      * partial index help defining smaller indexes, under a particular condition
      * use partial filterExpression fotgether with unique to be able to insert unique data with no required field:
        db.coll.createIndex({email:1, {unique: true, partialFilterExpression: {email: {$exists: true}}}})
    - TTL (Time-to-live) index: e,g, "db.sessions.createIndex({createdAt: 1}, {expireAfterSeconds: 10})"
      * the TTL index is only working on single field indexes and on date values
    - Multikey index for arrays: e.g. "db.contacts.createIndex({"hobbies": 1})"
      * multikey index is used on arrays, stores every array element as a separate key. This costs performance.
    - Text index for sentenses: e.g. "db.contacts.createIndex({"description": "text"})"
      * text index breaks a text to an array of words and then stores them as an multikey index. This costs performance.
      * we can have only one text index for a collection
      * use "db.coll.find({$text: {$search: {"book"}}})"to search for text
      * use "db.coll.find({$text: {$search: {"book"}}, {score: {$meta: "textScore"}}})" to order by matches score
      * use "db.contacts.createIndex({"description": "text", "title": "text"})" for combined text index
      * use "db.coll.find({$text: {$search: {"book -text-to-exclude"}}, {score: {$meta: "textScore"}}})" exclude worrds with "-" sign
      * use "db.coll.createIndex({"description": "text", "title": "text"}, {default_language: "german"}})" to set language for text search
      * use "db.coll.createIndex({"description": "text", "title": "text"}, {weights: {title: 1, description: 10}}})" to set weights for multi-key text search
      * additional options for find(): "db.coll.find({$text: {$caseSensitive: true, $language: "german"}})"

    Query diagnosis:
    - explain("queryPlanner"): show summary for executed query + winning plan
    - explain("executionStats"): show detailed summary for executed query + winning plan + rejected plans
    - explain("allPlansExecution"): show detailed summary for executed query + winning plan + winning plan decision process

    Winning plans approaches: (in case that multiple indexes can fulfill the query)
    - The fastest index to give the first 100 documents
    - The winning plan is stored in cache then, and cleared after index rebuild/db restart ect...

    Building indexes:
    - Foreground: Collection is locked during index creation, faster, e.g. with "mongoimport"
    - Background: Collection is accessible during index creation, slower, with running a js file "mongo files/credit-rating.js" or "db.coll.createIndex({}, {background: true})"
    `,
  );
}

export default function indexes() {
  delimeterMsg('WORKING WITH INDEXES');
  logF(workingWithIndexes);
}
