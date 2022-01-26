import express from "express" // 3RD PARTY MODULE DOES NEED TO INSTALL
import listEndpoints from "express-list-endpoints"
import authorsRouter from "./services/authors/index.js"

const server = express() // declearing server
server.use(express.json()) // if this not worte here the request body will be undifend

// ************************** ENDPOINT ****************
server.use("/authors", authorsRouter)

console.table(listEndpoints(server)) // TO PRINT THE END POINT TABLE ON TERMINAL

const port = 3001
server.listen(port, () => {
  console.log("SEREVER IS 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ ON PORT", port)
})
