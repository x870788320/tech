<template>
    <div id="map" ref="rootmap">

    </div>
</template>

<script>
// import "ol/ol.css";
import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
import mapconfig from '../config/mapConfig'
// import OSM from "ol/source/OSM";
export default {
  data() {
    return {
      map: null
    };
  },
  created(){
    // console.log("dddddddddddddddddddddd")
  },
  mounted() {
    var mapcontainer = this.$refs.rootmap;
    this.map = new Map({
      target: mapcontainer,
      layers: mapconfig.streetmap(),
    //   layers: [
    //     new TileLayer({
    //       source: new OSM()
    //     })
    //   ],
      view: new View({
        projection: "EPSG:4326",    //使用这个坐标系
        // center: [114.064839,22.548857],  //深圳
        center: [mapconfig.x,mapconfig.y],  //深圳
        zoom: mapconfig.zoom
      })
    });
  }
};
</script>

<style>
/* @import "ol/ol.css"; */
#map{
  height:100%;
  }
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom { display: none;}

</style>