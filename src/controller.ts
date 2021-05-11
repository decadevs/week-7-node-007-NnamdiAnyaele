import express, {Request, Response} from "express";
import fs from "fs";


async function getAllData(req: Request, res: Response){
    try {
        fs.readFile('./database.json', 'utf-8', function(err, data){
            if(err){
                return res.status(404).end("Database does not exist")
            } else{
                res.status(200).json(JSON.parse(data));
            }
        });
    } catch (error) {
        console.log(error)
    }
}

async function triangleData (dimension: {a:number, b:number,c:number}, req: Request, res: Response) {
    try {
        const{a,b,c} = dimension;
        if((typeof a) !== "number" && (typeof b) !== "number" && (typeof c) !== "number") {
            return res.status(400).send("input the correct dimensions")
        }
        let s = (a + b + c)/2;
        let area = (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(2)
        fs.readFile('./database.json', 'utf-8', function(err, data){
            if(err){
                let fileData = [];
                const result = {
                    id : 1,
                    createdAt : new Date,
                    shape: "triangle",
                    dimension : dimension,
                    area : area
            }
            fileData.push(result);
            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                if (err) {
                    res.status(500).send("your post wasn't created. Try again");
                  } else {
                    res.status(201).send(result);
                  }
            })
            } else{
                let fileData = JSON.parse(data)
                let id = fileData[fileData.length-1]? fileData[fileData.length-1].id + 1: 1;
                const result = {
                        id : id,
                        createdAt : new Date,
                        shape: "triangle",
                        dimension : dimension,
                        area : area
                }
                fileData.push(result);
                            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                                if (err) {
                                  res.status(500).send("your post wasn't created. Try again");
                                } else {
                                  res.status(201).send(result);
                                }
                            })
                
            }
        });
    } catch (error) {
        console.log(error)
    }
}
async function rectangleData (dimension: {a:number, b:number}, req: Request, res: Response) {
    try {
        const {a,b} = dimension;
        if((typeof a) !== "number" && (typeof b) !== "number") {
            return res.status(400).send("input the correct dimensions")
        }
        let area = (a*b).toFixed(2);
        fs.readFile('./database.json', 'utf-8', function(err, data){
            if(err){
                let fileData = [];
                const result = {
                    id : 1,
                    createdAt : new Date,
                    shape: "rectangle",
                    dimension : dimension,
                    area : area
            }
            fileData.push(result);
            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                if (err) {
                    res.status(500).send("your post wasn't created. Try again");
                  } else {
                    res.status(201).send(result);
                  }
            })
            } else{
                let fileData = JSON.parse(data)
                let id = fileData[fileData.length-1]? fileData[fileData.length-1].id + 1: 1;
                const result = {
                        id : id,
                        createdAt : new Date,
                        shape: "rectangle",
                        dimension : dimension,
                        area : area
                }
                fileData.push(result);
                            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                                if (err) {
                                  res.status(500).send("your post wasn't created. Try again");
                                } else {
                                  res.status(201).send(result);
                                }
                            })
                
            }
        });
    } catch (error) {
        console.log(error)
    }
}

function squareData (dimension: number, req: Request, res: Response) {
    try {
        if((typeof dimension) !== "number") {
            return res.status(400).send("input the correct dimension")
        }
        let area = (dimension * dimension).toFixed(2);
        fs.readFile('./database.json', 'utf-8', function(err, data){
            if(err){
                let fileData = [];
                const result = {
                    id : 1,
                    createdAt : new Date,
                    shape: "square",
                    dimension : dimension,
                    area : area
            }
            fileData.push(result);
            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                if (err) {
                    res.status(500).send("your post wasn't created. Try again");
                  } else {
                    res.status(201).send(result);
                  }
            })
            } else{
                let fileData = JSON.parse(data)
                let id = fileData[fileData.length-1]? fileData[fileData.length-1].id + 1: 1;
                const result = {
                        id : id,
                        createdAt : new Date,
                        shape: "square",
                        dimension : dimension,
                        area : area
                }
                fileData.push(result);
                            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                                if (err) {
                                  res.status(500).send("your post wasn't created. Try again");
                                } else {
                                  res.status(201).send(result);
                                }
                            })
                
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}

function circleData (dimension : number, req: Request, res: Response) {
    try {
        if((typeof dimension) !== "number") {
            return res.status(400).send("input the correct dimension")
        }
        let area = (Math.PI * (Math.pow(dimension, 2))).toFixed(2)
        fs.readFile('./database.json', 'utf-8', function(err, data){
            if(err){
                let fileData = [];
                const result = {
                    id : 1,
                    createdAt : new Date,
                    shape: "circle",
                    dimension : dimension,
                    area : area
            }
            fileData.push(result);
            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                if (err) {
                    res.status(500).send("your post wasn't created. Try again");
                  } else {
                    res.status(201).send(result);
                  }
            })
            } else{
                let fileData = JSON.parse(data)
                let id = fileData[fileData.length-1]? fileData[fileData.length-1].id + 1: 1;
                const result = {
                        id : id,
                        createdAt : new Date,
                        shape: "circle",
                        dimension : dimension,
                        area : area
                }
                fileData.push(result);
                            fs.writeFile("./database.json", JSON.stringify(fileData,null,3), (err) => {
                                if (err) {
                                  res.status(500).send("your post wasn't created. Try again");
                                } else {
                                  res.status(201).send(result);
                                }
                            })
                
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}




  export {getAllData,triangleData, squareData, rectangleData, circleData}