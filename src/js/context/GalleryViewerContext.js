import React from 'react';
import Signal from 'signals';
import FlickrImageModel from '../model/FlickrImageModel';
import FlickrImageService from '../service/FlickrImageService';
import GalleryMediator from '../mediator/GalleryMediator';
import GalleryView from '../view/GalleryView';

class GalleryViewerContext {
  constructor(contextView = null) {
    this.contextView = contextView;
    this.startup();
  }

  startup() {
    this.mapSignals();
    this.mapModels();
    this.mapServices();
    this.mapMediators();
    this.startUpSignal.dispatch();
  }

  mapSignals() {
    this.startUpSignal = new Signal();

  }

  mapModels() {
    this.flickrModel = new FlickrImageModel();
  }

  mapServices() {
    this.flickrService = new FlickrImageService(this.flickrModel);
    this.startUpSignal.addOnce(this.flickrService.load, this.flickrService);
  }

  mapMediators() {
    let gallery = new GalleryMediator(GalleryView, this.contextView, this.flickrModel);
  }
}

export default GalleryViewerContext;
