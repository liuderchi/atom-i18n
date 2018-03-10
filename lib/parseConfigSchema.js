/* Parse Atom source code to get list of config keys and description
  as a reference to settings.cson
  usage: $ node parseConfigSchema.js path/to/atom/src/config-schema.js
*/

const CONFIG_SCHEMA_JS_PATH = process.argv[2]

if (!CONFIG_SCHEMA_JS_PATH) {
  console.log('usage:\n $ node parseConfigSchema.js path/to/atom/src/config-schema.js')
  process.exit(-1)
}

const {
  core: { properties: coreProps },
  editor: { properties: editorProps },
} = require(CONFIG_SCHEMA_JS_PATH)

const mapPropsToArray = (prop, idPrefix) => (
  Object.keys(prop).map(k => {
    const _res = {
      id: `${idPrefix}.${k}`
    }
    if (coreProps[k].description) {
      _res['desc'] = coreProps[k].description
    }
    return _res
  })
)

const res = [].concat(
  mapPropsToArray(coreProps, 'core'),
  mapPropsToArray(editorProps, 'editor')
)

res.sort((a, b) => a.id.localeCompare(b.id))

console.log(res)
