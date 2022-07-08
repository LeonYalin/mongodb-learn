import { log, delimeterMsg, logF } from '../util';

function whatIsMongoDB() {
  log(
    `What is mongoDB:

    - A NoSQL database
    - Has collections(a.k.a tables in SQL), documents (a.k.a rows in SQL)
    - Schemaless, no/few relations
    - uses JSON (BSON) to store objects

    MongoDB Ecosystem
    - MongoDB datrabase self-managed/enterprice
    - CloudManager/OpsManager
    - Atlas(Cloud)
    - Mobile solution
    - Compass(UI)
    - BI connectors
    - MongoDB Charts
    - Stitch(Serverless Query API, Serverless funcitions, Database triggers, Real-time sync)

    Files in mongo installation:
    - 'mongod' is a mongodb server
    - 'mongo' is a mongodb shell
    - 'mongosh' is a newer mongodb javacript shell
    - 'mongoimport' is a tool for importing data to mongodb

    First steps:
    - use "show dbs" to show available databases
    - use "use <db_name> to switch or create the db if not exists
    - use "db.products.insertOne({name: "Leon"})" to insert one document to colloction & create it if not exists
    - use "db.products.find()" or "db.products.find().pretty()" to view the collection contents
    `,
  );
}

export default function introduction() {
  delimeterMsg('INTRODUCTION');
  logF(whatIsMongoDB);
}
