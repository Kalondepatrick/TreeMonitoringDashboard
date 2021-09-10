
Tree Monitoring - Dashboard
======

**An interactive Dashboard for monitoring of survival of Trees - a tool for monitoring climate mitigation through tree planting.**

Submission for the ESRI Hack for Sustainable Future

Description 
------------

We have utilized ESRI ArcGIS JavaScript API to develop a dashboard for monitoring and communicating tree survival. The data is visualized in a dashboard that has been developed using ArcGIS Javascript API. 

Our main goal is to develop reliable set of tools  that can enable monitoring, communicating and verification of carbon storage through tree planting.
We pilot this project using data that was captured by an environmental Youth Club in Lilongwe City in Africa - Lilongwe is the admistratice capital of the Republic of Malawim- and we seek to deliver it as a service to communities, companies and governments. We emerged in the Top four for 2021 European Space Agency (ESA) Corpenicus and Galileo Challenge, on a similar project to build a service that use drone and satellite imagery to
quantify the actual forest carbon storage (https://copernicus-masters.com/ ). The immersive experiences in that solution were provided as demonstrations.

With regards to 'Hack for Sustainable Future', we developed a tool that uses existing tree records (Lat and Long) to guide monitoring and verification of tree survival status
A user can specify the target number of trees to be verified (either as a percentage or by specifying the actual value)
and the tool can randomly select the specified number of trees. This approach reduces bias associated with sampling work. 
The tool identifies the nearest tree and it uses ArcGIS routing service to provide directions to the person undertaking the monitoring 
work. 

In the tool a buffer of 5 meters is automatically created around all targeted trees (as a small transparent green circle). This is to recognize the error that might be associated with the locations of planted trees. In the background also, the 
tool check the GPS error associated with the user's device. If the error is less than 5 meters, the point will be in dark blue, if not, it is displayed in red.
However, when the user reaches within the radii of the buffer of the targeted points, it displays the words "You have arrived at point 1, please stand still and look around for sign of a tree (dead or alive)". The tool is for both Upon arrival at a enables  application that can (both Android and iOS) and it enables capturing of the following attributes will be collected:

Date of Monitoring

Status of the tree

Latest picture of the tree

Data Syncronization and processing

After data collection in the field, our tool enables data to be syncronized to a database on ArcGIS online. The data is joined to existing table using join tools (Tree ID from the buffer as a ref). 
Here on a dashboard, stats on tree survival will be displayed. Trees that die will be excluded from future sampling unless they are reported to be replanted. 

Interactive dashboard URL: https://saacooctzwa6sl2o.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=538ae7272ee544c78a0dfd27be9a1c7b

Static Map for tree Survival 

