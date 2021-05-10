import app from "../app";
import supertest from "supertest";
const request = supertest(app);

 /**
 * Testing post a user endpoint by giving a existing user
 */ 
  describe('/calculate', () => {
    
    it("it calculate area for a circle", async () =>{
        const response = await request.post("/calculate")
        .send({
            shape: "circle",
            dimension:7  
        })
        expect(response.status).toBe(201);
        expect(Number(response.body.area)).toEqual(153.94)
    })
    it("it calculate area for a square", async () =>{
        const response = await request.post("/calculate")
        .send({
            shape: "square",
            dimension:7  
        })
        expect(response.status).toBe(201)
        expect(Number(response.body.area)).toEqual(49)
    })
    it("it calculate area for a rectangle", async () =>{
        const response = await request.post("/calculate")
        .send({
            shape: "rectangle",
            dimension: {a: 4, b: 5} 
        })
        expect(response.status).toBe(201)
        expect(Number(response.body.area)).toEqual(20)
    })
    it("it calculate area for a triangle", async () =>{
        const response = await request.post("/calculate")
        .send({
            shape: "triangle",
            dimension: {a: 4, b: 5, c:6} 
        })
        expect(response.status).toBe(201)
        expect(Number(response.body.area)).toEqual(9.92)
    })

})
