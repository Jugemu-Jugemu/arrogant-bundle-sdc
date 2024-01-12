
import server from "./server/server.js"
import chalk from "chalk"
import { env } from "process"

const start = () => {

    // Listens for incoming connections
    server.listen(env.server_port, () => {
        console.log(chalk.bold.green(`Server running on port ${env.server_port}`))
    })

}

// Starts our program
start()