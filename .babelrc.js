// https://babeljs.io/docs/en/configuration
const presets = ['@babel/preset-react']
if (process.env['BABEL_ENV'] === 'es') {
  presets.unshift(['@babel/preset-env', {
    modules: false, "targets": {
      "node": "10" // the target node version, boolean true, or "current".
    }
  }])
} else {
  presets.unshift([
    "@babel/preset-env",
    {
      "targets": {
        "node": "10" // the target node version, boolean true, or "current".
      }
    }
  ])
}

const plugins = [
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  '@babel/plugin-proposal-do-expressions',
  'add-module-exports'
]

module.exports = {
  presets,
  plugins,
  env: {
    test: {
      presets,
      plugins: [...plugins, '@babel/plugin-transform-runtime', 'dynamic-import-node']
    }
  }
}
