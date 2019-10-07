import { defineTable, Schema } from "sqldb/schema"
import { sql } from "sqldb/pg"
import { database } from "./_database"

defineTable("users", {
  id: Schema.default(Schema.Number),
  name: Schema.String,
  email: Schema.String
})

export async function createUser(name: string, email: number) {
  await database.query(sql`
    INSERT INTO users (name, email) VALUES (${name}, ${email})
  `)
}
