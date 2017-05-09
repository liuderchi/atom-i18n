/* Parse Atom source code to get list of config keys and description
  as a reference to settings.cson
*/

const schema = require('/home/derek/atom-forked/src/config-schema.js')

let { properties: coreProps }= schema.core
let { properties: editorProps }= schema.editor

let res = [].concat(
  Object.keys(coreProps).map((k)=>{
    let res = {id: 'core.'+k}
    if (coreProps[k].description) {res['desc'] = coreProps[k].description}
    return res
  }),
  Object.keys(editorProps).map((k)=>{
    let res = {id: 'editor.'+k}
    if (editorProps[k].description) {res['desc'] = editorProps[k].description}
    return res
  })
)

res.sort((a, b)=>{return a.id.localeCompare(b.id)})

console.log(res)
