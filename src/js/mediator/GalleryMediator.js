import React from 'react'
import ReactDOM from 'react-dom'
class GalleryMediator {
    constructor(view, context, flickrModel) {
        this.view = view
        this.context = context
        this.flickrModel = flickrModel
        this.flickrModel.imagesSignal.addOnce(this.onstarted, this)
    }

    onstarted() {
        let data = this.flickrModel.images
        ReactDOM.render(<this.view images={data}/>, ReactDOM.findDOMNode(this.context))
    }
}

export default GalleryMediator
