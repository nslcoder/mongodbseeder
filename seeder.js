const { readFile } = require('fs/promises');
const mongoose = require('mongoose');
const Person = require('./models/person');
const mockData = require('./MOCK_DATA.json');

const seeder = async () => {
  // Connect to the local MongoDB database
  await mongoose.connect('mongodb://127.0.0.1:27017/mockDB');
  console.log('Database connected');

  // Read the file and store its contents
  const data = await readFile('MOCK_DATA.json', 'utf-8');

  // Deserialize JSON into JS array
  const parsedData = JSON.parse(data);

  // Create all the documents in the database at once
  await Person.create(parsedData);

  console.log('Seeding is completed');
  process.exit();
};

// Call the seeder function
seeder();
