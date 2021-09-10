    require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Legend", "esri/Color", "esri/renderers/UniqueValueRenderer", "esri/widgets/Slider"], function(esriConfig,Map, MapView, FeatureLayer, Legend, Color, UniqueValueRenderer,Slider) {
      esriConfig.apiKey = MY_API_KEY;  
    
    var   slider = new Slider({
        container: "SliderDiv",
        min:0,
        max:100, 
        values: [50],
        snapOnClickEnabled: false,
        visibleElemebts: {
            labels: true,
            rangeLabels:true
        }
    });
    var map = new Map({
          basemap: "dark-gray-vector"
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
         * Add Feature 
         ********************/



      // Add a layer on trees 
      
      var popuptree ={
          "title":"Tree Survival",
          "content": "<b>Status:</b> {survival}"
      }  
            
      
		var tree = new FeatureLayer({
          url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Area22BTreesData/FeatureServer/0",
          outFields: ["survival"],
          popupTemplate: popuptree,
        });

		//Changing the title of tree layer

		tree.title = "Tree survival";
        
        
		// Adding the  map to scene 
                
        map.add(tree, 0);
        
        var legend = new Legend({
          view: view
        });	

       view.ui.add(legend, "top-right")
	   
        
      
// Create a simple Slider 

const timeSlider = new TimeSlider({
  container: "timeSlider",
  view: view
})
view.ui.add(TimeSlider, "bottom-left")
       
      });