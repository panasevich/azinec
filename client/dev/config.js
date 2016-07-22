System.config({
    defaultJSExtensions: true,
    paths: {
      '@angular/*': './@angular/*',
      '@angular2-material/*': './@angular2-material/**/*',
      "rxjs/*": "./rxjs/*",
      "reflect-metadata": "./reflect-metadata",
      "angular2-jwt": "./angular2-jwt"
    },
    map: {
      "rxjs": "./rxjs",
      '@angular2-material': './@angular2-material'
    },
    packages: {
      'angular2-jwt':{
        main: 'angular2-jwt'
      },
      '@angular2-material/core':{
        main: 'core'
      },
      '@angular2-material/button':{
        main: 'button'
      },
      '@angular2-material/card':{
        main: 'card'
      },
      '@angular2-material/toolbar':{
        main: 'toolbar'
      },
      '@angular2-material/input':{
        main: 'input'
      },
      '@angular2-material/icon':{
        main: 'icon'
      },
      '@angular2-material/radio':{
        main: 'radio'
      },
      '@angular/common': {
        main: 'index'
      },
      '@angular/compiler': {
        main: 'index'
      },
      '@angular/core': {
        main: 'index'
      },
      '@angular/http': {
        main: 'index'
      },
      '@angular/forms': {
        main: 'index'
      },
      '@angular/platform-browser-dynamic': {
        main: 'index'
      },
      '@angular/platform-browser': {
        main: 'index'
      },
      '@angular/router': {
        main: 'index'
      },
      "rxjs": {
        defaultExtension: 'js'
      },
      'dist': {
        defaultExtension: 'js',
        format: 'register'
      }
    }
  });
