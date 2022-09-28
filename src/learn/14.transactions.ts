import { log, delimeterMsg, logF } from '../util';

function workingWithTransactions() {
  log(
    `Working with transactions in MongoDB:

    Transactions in MongoDB:
    - To use transactions, we need at least MongoDB 4.0 and Replica Sets
      const session = db.getMongo.startSession()
      session.startTransaction()
      const usersCol = session.getDatabase("blog").users
      const postsCol = session.getDatabase("blog").posts
      usersCol.deleteOne({ _id: ObjectId("5b2afsdfgsd3gjs6ogi78df") })
      postsCol.deleteMany({ _id: ObjectId("5b2afsdfgsd3gjs6ogi78df") })
      session.commitTransaction() // there is also session.abortTransaction()

      Stitch (MongoDB Realm):
      - stitch is a serverless platform for building applications (similar to Firebase)
      - it gives access to the cloud db from the client side, authentication, rest api, subscriptions & serverless functions
    `,
  );
}

export default function transactions() {
  delimeterMsg('TRANSACTIONS');
  logF(workingWithTransactions);
}
