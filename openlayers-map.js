"use strict";

Polymer( 'openlayers-map', {
  publish: {

    /**
     * The `latitude` attribute sets the map center.
     *
     * @attribute latitude
     * @type number
     */
    latitude: {value: 0, reflect: true},

    /**
     * The `longitude` attribute sets the map center.
     *
     * @attribute longitude
     * @type number
     */
    longitude: {value: 0, reflect: true},

    /**
     * The `zoom` attribute sets the map zoom.
     *
     * @attribute zoom
     * @type number
     */
    zoom: {value: -1, reflect: true}
  },

  observe: {
    latitude : 'view',
    longitude: 'view',
    zoom     : 'view'
  },

  domReady: function () {

    var tile = new ol.layer.Tile( {
      source: new ol.source.XYZ( {
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      } )
    } );

    var view = new ol.View( {
      center: ol.proj.transform( [this.longitude, this.latitude], 'EPSG:4326', 'EPSG:3857' ),
      zoom  : this.zoom
    } );

    var map = new ol.Map( {target: this.$.map, layers: [tile], view: view} );
  },

  created: function () {
    console.log( "Created ..." );
  }

} );
