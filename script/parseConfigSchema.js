#!/usr/bin/env node

/* Parse Atom source code to get list of config keys and description
  as a reference to settings.cson
  usage: $ node parseConfigSchema.js path/to/atom/src/config-schema.js
*/

const CONFIG_SCHEMA_JS_PATH = process.argv[2];

if (!CONFIG_SCHEMA_JS_PATH) {
  console.log(
    'usage:\n $ node parseConfigSchema.js path/to/atom/src/config-schema.js',
  );
  process.exit(-1);
}

const {
  core: { properties: coreProps },
  editor: { properties: editorProps },
} = require(CONFIG_SCHEMA_JS_PATH);

const res = [].concat(
  Object.keys(coreProps).map((k) => {
    const res = { id: `core.${k}` };
    if (coreProps[k].description) {
      res['desc'] = coreProps[k].description;
    }
    return res;
  }),
  Object.keys(editorProps).map((k) => {
    const res = { id: `editor.${k}` };
    if (editorProps[k].description) {
      res['desc'] = editorProps[k].description;
    }
    return res;
  }),
);

res.sort((a, b) => a.id.localeCompare(b.id));

console.log(res);

process.exit(0);
