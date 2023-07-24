const express = require("express");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact.route");

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/carnet-adresses");

app.use("/contacts", contactRoutes);

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Erreur interne du serveur");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
