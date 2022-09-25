import { log, delimeterMsg, logF } from '../util';

function securityAndAuth() {
  log(
    `Security and authentication in MongoDB:

    Security checklist:
    - Authentication & Authorization
      Authentication - log in the user, Authorization - what is the user's role
      Role Based Access Control (RBAC) - Priveleges (Resources + actions), grouped in roles (Admin, User, Analyst ect..)
    - Transport Encryption
    - Encryption at Rest
    - Auditing
    - Server & Network config and setup
    - Backup & Software updates
    
    Users
    - use createUser(Roles, priveleges) or updateUser() to manage users
    - start the server with the "sudo mongod --auth" to enable authentication
    - connect using "mongo -u username -p password --authenticationDatabase admin", or "db.auth('username', 'password')"
    - In case there is still no users, Mongo allows creating the first admin user with a special role, that will be responsible for creating other users
    - db.createUser({user: "leon", pwd: "yalin", roles: ["userAdminAnyDatabase"]})

    Built-in roles:
      Database User - "read", "readWrite"
      Database Admin - "dbAdmin", "userAdmin", "dbOwner"
      All Database Roles - "readAnyDatabase", "readWriteAnyDatabase", "userAdminAnyDatabase", "dbAdminAnyDatabase"
      Cluster Admin - "clusterManager", "clusterMonitor", "clusterAdmin", "hostManager"
      Backup/Restore - "backup", "restore"
      Superuser - "dbOwner" (admin), "userAdmin" (admin), "userAdminAnyDatabase" root

    Changing a role"
    - use db.getUser("username") to view user roles
    - use db.updateUser("username", roles: ["readWrite", {role: "readWrite", db: "blog"}]) to change a role in other database

    Transport Encryption
    - We'll need to encrypt using TLS/SSL, with a private/public key pair
    - use openssl to generate these
    - There are instructions of the process on the mongodb website
    - use "mongod --sslMode requireSSL --sslPEMKeyFile mongodb.pem" to run mongo server with ssh
    - "mongo --ssl --sslCAFile mongodb.pem --host localhost" to connect to mongo server with ssh
    - in production, use a SSL certificate from CA, instead of self-signed one

    Rest Encryption
    - we can encrypt both the files that hold the data and the values inside the documents
    `,
  );
}

export default function security() {
  delimeterMsg('SECURITY IN MONGODB');
  logF(securityAndAuth);
}
