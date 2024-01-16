
import server from "./server/server.js"
import chalk from "chalk"
import { env } from "process"
const port=8080;
const start = () => {

    // Listens for incoming connections
    server.listen(port, () => {
        console.log(chalk.bold.green(`Server running on port 80`))
    })

}

// Starts our program
start()