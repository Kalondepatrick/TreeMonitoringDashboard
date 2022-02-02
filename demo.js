  
require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Legend", "esri/Color", "esri/renderers/UniqueValueRenderer", "esri/widgets/TimeSlider"], function(esriConfig, Map, MapView, FeatureLayer, Legend, Color, UniqueValueRenderer, TimeSlider) {
      esriConfig.apiKey = MY_API_KEY;  
    
        /********************
         * Add Basemap and pilot location
         ********************/
        
    var map = new Map({
          basemap: "satellite"
        });

    var view = new MapView({
        map: map,
        center: [33.8008413, -14.0161304],
        zoom: 18, 
        container: "viewDiv",
        constraints: {
          snapToZoom: false
        }
      });
 
        /********************
         * Add Tree layer 
         ********************/
 
    var popuptree ={
        "title":"Tree Survival",
        "content": "<b>Status:</b> {survival}<br><b>Tree Type:</b> {species_ca}"
      }  
      
    var tree = new FeatureLayer({
        url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Area22BTreesData/FeatureServer/0",
        outFields: ["survival"],
        popupTemplate: popuptree,
        });

	//Changing the title of tree layer

	tree.title = "Tree survival";
        
	// Adding trees to the map scene 
                
        map.add(tree, 0);
                
        /********************
         * Add Map Legend 
         ********************/
        
    var legend = new Legend({
        view: view,
        style: "classic",
        layout: "auto"
        });	

       view.ui.add(legend, "bottom-right");
	   
         /********************
         * Adding Map slider 
         ********************/
    
    const timeSlider = new TimeSlider({
        container: "SliderDiv",
        view: view,
        timevisible: true,
        fullTimeExtent:{
            start: new Date(2020,01,29),
            end: new Date(2021,01,31)
        },
        stops:{
          dates:[ 
                new Date(2020,01,29),
                new Date(2020,02,31),
                new Date(2020,03,30),
                new Date(2021,01,31)
            ]
        }
        
        });
    
        view.ui.add(timeSlider, "bottom-left");
        

  });

 

