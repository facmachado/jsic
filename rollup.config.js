/* jshint esversion: 6 */

import copy     from 'rollup-plugin-copy';
import execute  from 'rollup-plugin-execute';
import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import legacy   from '@rollup/plugin-legacy';

var output_file,
  arr_execute = [],
  copy_targets = [
    { src: 'src/basic', dest: 'www' },
    { src: 'src/favicon.ico', dest: 'www' }
  ];

switch (process.env.NODE_ENV) {
  case 'production':
    output_file = 'src/_temp.js';
    arr_execute = [
      'cleancss -O1 specialComments:none --output www/style.css src/style.css',
      'html-minifier-terser --use-short-doctype --collapse-whitespace --remove-comments --minify-js "c" --minify-css "O1 specialComments:none" --output www/index.html src/index.html',
      'terser --module --comments false -co www/app.js src/_temp.js',
      'rm -f src/_temp.js'
    ];
    break;
  default:
    output_file = 'www/app.js';
    copy_targets = [
      { src: 'src/basic', dest: 'www' },
      { src: 'src/favicon.ico', dest: 'www' },
      { src: 'src/index.html', dest: 'www' },
      { src: 'src/style.css', dest: 'www' }
    ];
}

export default {
  input: 'src/jsic.js',
  output: {
    file: output_file,
    format: 'cjs'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: 'node_modules'
    }),
    legacy({
      'node_modules/jquery/dist/jquery.js': 'jquery'
    }),
    copy({
      targets: copy_targets,
      outputFolder: 'www'
    }),
    execute(arr_execute)
  ]
};
