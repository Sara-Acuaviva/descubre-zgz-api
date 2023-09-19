import express from "express"

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    console.log("pio champiñon");
    res.json({data:"pio champiñon"})
}); 

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });