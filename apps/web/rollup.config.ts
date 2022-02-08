import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'api/api.js',
  output: {
    file: 'api/index.js',
    format: 'cjs',
    exports: 'default',
  },
  external: ['fs/promises'],
  plugins: [
    commonjs(),
    resolve({
      moduleDirectories: ['node_modules'],
      preferBuiltins: true,
    }),
    json(),
  ],
}
