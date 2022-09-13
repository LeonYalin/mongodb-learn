import { log, delimeterMsg, logF } from '../util';

function schemasAndRelations() {
  log(
    `Structuring documents in MongoDB:

    Schemas:
    - MongoDB does not enforce us to have a schema, but it is a good thing to have one
        * We can go with all different data (No schema)
        * Wata using common fields and omit missing fields (Partial schema)
        * Use common fields and put "null" in place of missing values (Full schema)
    
    Data types:
    - Text
    - Boolean
    - Numbers: Integer(int32), NumberLong(int64), Float(default for shell - JavaScript), NumberDecimal(special float)
    - ObjectId (sorted id generation)
    - ISODate
    - Timestamp
    - Embedded document: {...}
    - Array: [...]

    Relations:
    - Options
        * Embedded documents: simplier, 1 query, data duplication, need to update in all places
        * References - no duplication, increase complexity: 2 queries
    - What to use
        * For One-to-one relations, it is better to use embedding, unless we want to do something with the nested data (e.g. statistics)
        * For One-to-many, we can use embedding if all the elements are related only to the specific document, otherwise we can move it to its own collection.
        * In addition, we need to remember that max size of the document is 16mb, so don't store too much nested documents
        * For many-to-many, it is better to use references, unless we don't care if duplicated data changes in the future (e.g. if a price changes after a purchase)
        * We have a "$lookup" aggregate operator, which acts like a "join" operation and will join the neccessary document by object id
        * For example, "db.books.aggregate([$lookup: {from: "authors", localField: "authors", foreignField: "_id", as: "creators"}])"
    
    Schema validation:
    - Validation levels: strict (all inserts and updates) or moderate (all inserts and updates to correct documents only)
    - Validation actions: error (throw error and deny insert/update) or warning (log but proceed)
      db.createCollection('posts', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
              title: {
                bsonType: 'string',
                description: 'must be a string and is required'
              },
              creator: {
                bsonType: 'objectId',
                description: 'must be an objectId and is required'
              },
              comments: {
                bsonType: 'array',
                description: 'must be an array and is required',
                items: {
                  bsonType: 'object',
                  required: ['text', 'author'],
                  properties: {
                    text: {
                      bsonType: 'string',
                      description: 'must be a string and is required'
                    },
                    author: {
                      bsonType: 'objectId',
                      description: 'must be an objectId and is required'
                    }
                  }
                }
              },
            }
          }
        },
        validationAction: 'warn'
      })

      - On order to modify a already existing collection, use the command below:
      db.runCommand(collMod: "posts", {validator:{...same validator as above...}, validationAction: 'warn'})
    `,
  );
}

export default function structuringDocuments() {
  delimeterMsg('STRUCTURING DOCUMENTS');
  logF(schemasAndRelations);
}
