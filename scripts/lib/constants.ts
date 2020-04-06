import { resolve } from 'https://deno.land/std/path/mod.ts'
import { __ } from 'https://deno.land/x/dirname/mod.ts'

const { __filename, __dirname } = __(import.meta)

export const PROJECT_ROOT = resolve(__dirname, '../../')
