import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {test} from 'node:test';
import upstream from 'zod';
const require=createRequire(import.meta.url);
for(const format of ['esm','cjs']) test(`compiler ${format} entries share their schema runtime`,async()=>{
 const load=name=>format==='esm'?import(`../dist/${name}.js`):require(`../dist/${name}.cjs`);
 const [entry,core,mini,locales]=await Promise.all(['index','core','mini','locales'].map(load));
 const z=entry.z;
 assert.equal(entry.default,z);assert.equal(mini.string,entry.string);
 assert.equal(core.$ZodType,z.core.$ZodType);
 assert.equal(locales.default,z.locales);
 const make=api=>api.object({title:api.string().min(2),count:api.number().int(),enabled:api.boolean().default(true)});
 const schema=make(z),reference=make(upstream);
 for(const value of [{title:'ok',count:3},{title:'x',count:1.5},{title:2,count:4}]){
  const actual=schema.safeParse(value),expected=reference.safeParse(value);
  assert.equal(actual.success,expected.success);
  if(actual.success) assert.deepEqual(actual.data,expected.data);
  else assert.deepEqual(actual.error.issues.map(({code,path})=>({code,path})),expected.error.issues.map(({code,path})=>({code,path})));
 }
 const generator=new core.JSONSchemaGenerator({});
 assert.equal(generator.constructor.name,'JSONSchemaGenerator');
 assert.equal(typeof generator.process,'function');assert.equal(typeof generator.emit,'function');
});
