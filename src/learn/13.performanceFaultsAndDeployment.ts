import { log, delimeterMsg, logF } from '../util';

function performanceFaultsAndDeployment() {
  log(
    `Performance, Fault tolerance and deployment in MongoDB:

    Performance factors:
    - Efficient queries
    - Indexes
    - Fitting Data Schema
    - Hardware and Network
    - Sharding
    - Replica Sets

    Capped collections:
    - Capped collection is a special type of collection that has a fixed size. 
    - Best used as a cache or for logs. We can specify max number of documents in the collection as well.
    - Any insertion of additional data that exceeds the size limit will delete the old data (FIFO).
    - db.createCollection("users", {capped: true, size: 10000, max: 3})

    Replica Sets
    - mongod server is also called a primary node
    - we can declare additional secondary nodes. After an insert/update to the primary node, its content will ve asynchronously copied to all secondary nodes
    - together, primary and secondary nodes form a Replica Set
    - if the primary node goes down, one of the secondary nodes takes its place
    + Backup / Fault Tolerance, improved read performance

    Sharding (Horizontal Scaling)
    - Sharding is a way of distributing the DB over several mashines (chunks of data to each mashine)
    - Queries are run across all shards.
    - mongos (Router) is responcible for navigaring to the right shard and managing the shard keys
    - We can specify the shard key in the query to speed up the query

    Deploynig a MongoDB server. Points to take care:
    - Manage shards
    - Manage replica sets
    - Encryption (transportation/Rest)
    - Backups
    - Software updates
    - Secure User Auth/Setup
    - Protect Web Server / Network
    
    There is a managed solution from MongoDB, MongoDB Atlas which has a free tier
    - MongoDB Atlas is a database as as service. or cloud db
    `,
  );
}

export default function performance() {
  delimeterMsg('PERFORMANCE, FAULT TOLERANCE AND DEPLOYMENT');
  logF(performanceFaultsAndDeployment);
}
