import { log, delimeterMsg, logF } from '../util';

function createOperations() {
  log(
    `Create operations in MongoDB:

    - Main create methods are "insertOne(data)" and "insertMany(data)"
    - There is one more "insert" method, but it is not recommended, because it is not clear if it is one or many, and no feedback returned
    

    Ordered insert
    - The default insert behavior, the ordered insert is insert everything until it fails (No rollback!), and then stop.
    - We can override this, e.g. "db.coll.insertMany([{...}, {...}], {ordered: false})"
    - In this case, the insertion will not stop even after a document fails (will insert the documents after that one)
    - db.companies.insertMany([{_id: 1, name: "Agent", size: 100}, {name: "Iris", size: 100}], {ordered: false})

    Write concern
    - Another option we can customize our write operation is specifying the write concern.
    - The defaults are: {w:1, journal: undefined, wtimeout: undefined}.
    - w:1 means we get ack back, together with an objectId
    - journal means we'll store operations log to journal file. In case of server fail, we will be able to resume and write what's left.
    - wtimeout means the write operation timeout
    - db.companies.insertOne({name: "Google", size: 10000}}, {journal: true})

    Atomicity
    - We can specify the option for atomicity, which will make a write operation a transaction. (With rollback!)
    - Atomicity works on a document level

    Import
    - To import a JSON file we can use mongoimport, e.g, "mongoimport /app/tv-shows.json -d tvshowsDb -c tvshows --jsonArray --authenticationDatabase admin --username root --password example"
    `,
  );
}

export default function create() {
  delimeterMsg('CREATE OPERATIONS');
  logF(createOperations);
}
