import test from "ava"
import * as path from "path"
import { loadSourceFile, parseSourceFile } from "../src/parser"
import { validateQuery } from "../src/validation"
import { containsToRegex } from "./_helpers/assert"

const pathToFixture = (fileName: string) => path.join(__dirname, "_fixtures", fileName)

test("check incorrect type on INSERT query passes", t => {
  const { queries, tableSchemas } = parseSourceFile(
    loadSourceFile(pathToFixture("insert-value-incorrect-type.ts"))
  )
  t.notThrows(() => queries.forEach(query => validateQuery(query, tableSchemas)))
})
