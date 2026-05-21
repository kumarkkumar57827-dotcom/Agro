import { MongoClient } from 'mongodb';

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb://admin:agrovision@ac-ahvbjcu-shard-00-00.y18kjs6.mongodb.net:27017,ac-ahvbjcu-shard-00-01.y18kjs6.mongodb.net:27017,ac-ahvbjcu-shard-00-02.y18kjs6.mongodb.net:27017/?ssl=true&replicaSet=atlas-12ipyf-shard-0&authSource=admin&appName=Agrovision';
  const client = new MongoClient(uri);

  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
