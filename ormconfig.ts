import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions"

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/*entity.js'],
    synchronize: false,
    migrations:[
        'dist/src/db/migrations/*.js'
    ],
    
    

}

export default config;