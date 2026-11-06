import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/movieDB").then(() => {
    console.log("mongodb connected");
}).catch(() => {
    console.log("db error");
});

// create Schema
const movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    year: Number
});

// add schema in DB

const movie = mongoose.model("movie", movieSchema);

app.get("/", (req, res) => {
    res.send("home page");
})

app.listen(3000);

//  1. add movies

app.post("/addmovie", async (req, res) => {
    const moviedata = await movie.create(req.body);

    res.json({
        msg: "movie added Successfully",
        data: moviedata
    })
})
//  2. get all movies
app.get("/getmovies", async (req, res) => {
    const moviedata = await movie.find();

    res.json({
        msg: "All movies",
        data: moviedata
    })
})


//  3.get specfic movie

app.get("/getmovie", async (req, res) => {
    const moviedata = await movie.findOne({ title: "Doctor Strange" });

    if (!moviedata) {
        res.json({
            msg: "movie not found",
        })
    }

    res.json({
        msg: "movie",
        data: moviedata
    })
})

//  4.update specific movie

app.put("/updatemovie", async (req, res) => {
    const updatemovie = await movie.findByIdAndUpdate(req.body.id, req.body.newdata);

    if (!updatemovie) {
        res.json({
            msg: "movie not found"
        })
    }

    res.json({
        msg: "movie updated successfully",
        data: updatemovie
    })
})
//  5.Delete movie

app.delete("/deletemovie", async (req, res) => {
    const deletedmovie = await movie.findByIdAndDelete(req.body.id);

    if (!deletedmovie) {
        res.json({
            msg: "movie not found"
        })
    }

    res.json({
        msg: "movie deleted successfully",
        data: deletedmovie
    })
})