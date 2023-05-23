import { DataSource } from "typeorm"
import CONNECTION from "./database.module"

// @ts-ignore
const AppDataSource = new DataSource({
    ...CONNECTION,
    entities: ["dist/**/*.entity.js"],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;