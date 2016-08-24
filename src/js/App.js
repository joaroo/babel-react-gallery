import React from 'react'
import ReactDOM from 'react-dom'
import GalleryViewerContext from './context/GalleryViewerContext'
export class App {

  constructor () {
    this.init()
  }

  init () {
    let target = document.querySelectorAll('[data-application]')[0]
    let root = ReactDOM.render(React.createElement('application'), target)
    new GalleryViewerContext(root)
  }
}

new App()
