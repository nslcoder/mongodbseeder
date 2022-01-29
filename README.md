# MongoDB Seeder

A simple seeding program that populates a local MongoDB database with fake data generated from Mockaroo.

## How to run it

1. Clone the repo:

   ```
   git clone https://github.com/nslcoder/mongodbseeder
   ```

2. Go inside the folder:

   ```
   cd mongodbseeder
   ```

3. Install the dependencies (There is only one, which is `mongoose`):

   ```
   npm install
   ```

4. Change the database name:

   ```
   // Line 8 in seeder.js
   await mongoose.connect('mongodb://127.0.0.1:27017/<yourdbname>');
   ```

5. Run the script:

   ```
   npm run seed
   ```

