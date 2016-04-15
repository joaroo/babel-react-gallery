import $ from 'jquery';
class FlickrImageService {

    constructor(imageModel) {
        this.imageModel = imageModel;
    }

    load() {
        let that = this;
        let data = [];
        let flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickerAPI, {
            tags: "malmö",
            tagmode: "any",
            format: "json"
        }).done(function(data) {
            data = data.items.map(function(item) {
                return {
                    url: item.media.m.replace('m.jpg', 'z.jpg')
                };
            });
            that.imageModel.images = data;
        });
    }

}

export default FlickrImageService;
