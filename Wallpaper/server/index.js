const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sankebhavana1:Sonusanke8@cluster0.wojhsvl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const WallpaperCollection = client.db("WallpaperStore").collection("Wallpapers");

    app.post('/add-wallpaper', async(req, res) => {
      try {
        const data = req.body;
        const result = await WallpaperCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });


    app.post('/add-wallpaper-many', async(req, res) => {
        try {
          const data = req.body;
          const result = await WallpaperCollection.insertMany(data);
          res.send(result);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      });

    app.get("/all-wallpapers", async(req, res) => {
      try {
        const wallpapers = await WallpaperCollection.find().toArray();
        res.send(wallpapers);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });

    app.get("/wallpaper/:id", async(req, res) => {
      try {
        const id = req.params.id;
        const wallpaper = await WallpaperCollection.findOne({ _id: new ObjectId(id) });
        res.send(wallpaper);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });


    app.delete("/wallpaper-delete/:id", async (req, res) => {
        try {
          const id = req.params.id;
          const result = await WallpaperCollection.deleteOne({ _id: new ObjectId(id) });
      
          if (result.deletedCount === 1) {
            // Document successfully deleted
            res.send({ message: "Wallpaper deleted successfully" });
          } else {
            // Document with the specified ID was not found
            res.status(404).send({ message: "Wallpaper not found" });
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      });
      

    // Additional routes and CRUD operations can be added similarly

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Wallpaper app listening on port ${port}`);
});
