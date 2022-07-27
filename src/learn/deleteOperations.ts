import { log, delimeterMsg, logF } from '../util';

function deleteOperations() {
  log(
    `Delete operations in MongoDB:

    - Main create methods are "deleteOne(filter)" and "deleteMany(filter)"
    - use "db.coll.drop()" to delete a collection
    - use "db.dropDatabase()" do drop a currently selected database
    `,
  );
}

export default function deleteOp() {
  delimeterMsg('DELETE OPERATIONS');
  logF(deleteOperations);
}
