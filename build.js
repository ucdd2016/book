var metalsmith = require('metalsmith')
var watch = require('metalsmith-watch')
var markdown = require('metalsmith-markdown')
// var markdown = require('./lib/markdown')
var layouts = require('metalsmith-layouts')
var branch = require('metalsmith-branch')
var rename = require('metalsmith-rename')
var inplace = require('metalsmith-in-place')
var _ = require('lodash')

metalsmith(__dirname)
    .use(branch('**/*.md')
      .use(markdown({
        smartypants: true,
        gfm: true,
        tables: true
      }))
      .use(layouts({
        engine: 'handlebars',
        directory: 'templates'
      }))
    )
    .use(rename([[/\.hbs$/, '.html']]))
    .use(watch({
      paths: {
        "${source}/**/*": true,
        "templates/**/*": "**/*.md",
      },
      livereload: true,
    }))
    .build(function(err) {
        if (err) throw err;
        console.log(err)
    });
