import {dirname, relative, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {readdirSync} from 'node:fs'
import {buildPackage} from './compiler-package.mjs'
const root=resolve(dirname(fileURLToPath(import.meta.url)), '..')
const walk=path=>readdirSync(path,{withFileTypes:true}).flatMap(entry=>{
 const file=resolve(path,entry.name)
 return entry.isDirectory()?walk(file):/\.d\.(?:ts|cts|mts)$/.test(file)?[file]:[]
})
const upstream=resolve(root,'node_modules/zod')
const assets=walk(upstream).map(source=>({source,destination:`types/${relative(upstream,source)}`}))
for(const name of ['index','core','mini','locales'])assets.push({source:`types/${name}.d.ts`,destination:`${name}.d.ts`})
const config=process.argv.includes('--dev')?'lilscript.dev.toml':'lilscript.toml'
await buildPackage({root,profiles:[{name:'public',config}],assets})
