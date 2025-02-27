- Warum brauchen wir Java?
- Was ist Firebase? (nicht mehr nur eine realtime database)
- Welche zwei Geschäfstteile hat Firebase? (auf der website sind es drei)
- Was ist serverless?
- Firebase vs. Traditionell

- JAMStack works great with serverless
- JAMStack try to make everything simple as possible, trying to do stuff static as much as possible

- Firebase latency compensation / optimistic concurrency control Feature, In Firebase never:

  - we will assume something will work, and will revert it if it's failed. but we do not await for the sucess
  - Update your state after setDoc
  - Firebase will trigger get operiations when data changes in frontend

- Firebase has auth Anonymous (which is a guest user which can be linked to a profile later)

- Firebase Ids oder so wenn man `doc(collection)` called werden client side generiert

- Firebase Services
- Firebase SDK
- Firebase CLI
- Staging Staten

- Realtime Database => Via web sockets
- Firestore => HTTP2 long live connections, with delta of changes
- Firestore => uses index db to cache everything, use Pending Writes to update server

- initializeApp uses "dependency injection", will not recreate it self if it's already called

- Firebase Hosting Deploy: You can use collaborative envoirment / preview channels

- Server/Admin SDK has more features than the Firebase SDK
- Seed data for local env: `firebase emulators:start --import=./local --export-on-exit`

- Firestore is a NoSQL database with realtime and offline

- SQL vs NoSQL
- NoSQL prefers Reads instead of writes (think of usage of users)
- Firestore has h. scaling
- Verically scaling: Better machines
- Horizontally scaling: Distributed across several machines

- Firestore hierarchy => /collection/document/collection/document
- Document has keys

- In Firestore, if you are using onSnapshot, do not await actions (if it fails, it will try to solve the problem by it's own)
- When you use only REST: https://firebase.google.com/docs/firestore/solutions/firestore-lite
- setDoc -> set data
- updateDoc -> merge only if exists
- setDoc with merge: true -> combined // <= recommended in most cases

- `serverTimestamp()` set server time
- `increment()` will increment a number, also `decrement()`

- enable multi tab persisence

  - will work with multiple tabs offline in realtime

- hasPendingWrite will tell you if it's synced with the server

- simple and composite queries
- Goal from firebase: all queries super fast (document scan will not increase with the amount of documents)
- simple query
  - operate on one field
  - several operators: "==", "in", "not-in", "user.city", "=<", "=>", "!=", orderBy
- composite queries (composite indexes)

  - require to set index in production (emulator it works)
  - sort with combined fields

- auto generated ids are not ordered (random order)
- `array-contains` and `array-contains-any`map query

- Range Queries & Cursoring (for pagination)

- Join query

  - put data into the fetch when data is not changing much

- Denormalization // LEARNING
- Normalization

- use Hierarchy to find data / query data
- `collectionGroup` will use also root (will use all collection ids)

- Atomicity

  - if one operation fails, rollback the entire process.
  - Firebase: Batch writes and transactions

- Firebase Authentication

  - Serverless fully managed

- Authentication (Who?)
- Authorization (What they can do?)

- do not await the auth methods

- Security Rules

  - Centralized (only at one place) // LEARNING
  - Security at multiple points can be difficult (client side validation is not security)
  - Custom language (to be as fast as possible)
  - Matching
  - Document level matching (collections can be protected using wildcards)
  - How to ensure if they work? Rules Playground, Tests
  - Rules can be put into own files and tested (recommended way)
  - You can get data from your firestore

- Testing

  - Integrated tests sind manchmal besser weil dann die unit tests nicht komplett geändert werden müssen

- Cloud functions (serverless and event driven) (v2)
  - allows you write server code in events within firebase
  - action in client, trigger event on the server
  - Functions are trusted environment, you can use Admin SDK (service account)
  - Cold start (time it takes to run your code)
  - do not use deps or modules that much (reduces cold start)
  - min instances (will life without coldstart, but pay them)
  - Has caching with ssr
