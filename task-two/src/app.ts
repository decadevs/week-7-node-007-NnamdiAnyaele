import express, {Request, Response} from "express";
import {getAllData,triangleData, squareData, rectangleData, circleData} from "./controller"


const app = express();

app.use(express.json());

// | POST | /calculate  | Calculate the area of different shapes    |
// | GET   | /fetchRecords | Fetch all my previously computated data |

app.get("/fetchRecords", (req: Request, res: Response) => {
    getAllData(req, res)
})

app.post("/calculate", (req: Request, res: Response) => {
    const body = req.body;
    if (body.shape === "triangle") {
       const {dimension} = body;
       if (!dimension) {
        return res.status(400).send("add dimension property to calculate")
       }
       return triangleData(dimension,req,res)
    }
    if (body.shape === "rectangle") {
        const {dimension} = body;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate")
           }
        return rectangleData(dimension,req,res)
    }
    if (body.shape === "square") {
        const {dimension} = body;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate")
           }
        return squareData(dimension,req,res)
    }
    if (body.shape === "circle") {
        const{dimension} = body;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate")
           }
        return circleData(dimension,req,res)
    }
    res.status(400).end("enter a valid shape")
})



const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server running..."));

export default app