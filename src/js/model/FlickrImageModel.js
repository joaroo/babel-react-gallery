import Signal from 'signals'
class FlickrImageModel {
  constructor () {
    this.imagesSignal = new Signal()
    this._images = {}
  }

  get images () {
    return this._images
  }
  
  set images (value) {
    this._images = value
    this.imagesSignal.dispatch()
  }

}

export default FlickrImageModel
