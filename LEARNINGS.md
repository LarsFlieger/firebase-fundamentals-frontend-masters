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

- Denormalization
- Normalization

- use Hierarchy to find data / query data
- `collectionGroup` will use also root (will use all collection ids)
