
require('dotenv').config();
// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore();

async function quickstart() {
  // The kind for the new entity
  const kind = 'Users';

  // The name/ID for the new entity
  const name = 'u3fCE01Q5GtIBDbbiVH1';

  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key([kind, name]);

  // Prepares the new entity
  const task = {
    key: taskKey,
    data: {
      Name: 'Sheya',
      Email: "sheya@gmail.com"
    },
  };

  // Saves the entity
  await datastore.save(task);
  console.log(`Saved ${task.key.name}: ${task.data.description}`);
}

quickstart();