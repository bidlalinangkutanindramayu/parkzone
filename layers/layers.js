var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZONAA_1 = new ol.format.GeoJSON();
var features_ZONAA_1 = format_ZONAA_1.readFeatures(json_ZONAA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAA_1.addFeatures(features_ZONAA_1);
var lyr_ZONAA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAA_1, 
                style: style_ZONAA_1,
                popuplayertitle: 'ZONA A',
                interactive: true,
                title: '<img src="styles/legend/ZONAA_1.png" /> ZONA A'
            });
var format_ZONAC_2 = new ol.format.GeoJSON();
var features_ZONAC_2 = format_ZONAC_2.readFeatures(json_ZONAC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAC_2.addFeatures(features_ZONAC_2);
var lyr_ZONAC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAC_2, 
                style: style_ZONAC_2,
                popuplayertitle: 'ZONA C',
                interactive: true,
                title: '<img src="styles/legend/ZONAC_2.png" /> ZONA C'
            });
var format_ZONAD_3 = new ol.format.GeoJSON();
var features_ZONAD_3 = format_ZONAD_3.readFeatures(json_ZONAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAD_3.addFeatures(features_ZONAD_3);
var lyr_ZONAD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAD_3, 
                style: style_ZONAD_3,
                popuplayertitle: 'ZONA D',
                interactive: true,
                title: '<img src="styles/legend/ZONAD_3.png" /> ZONA D'
            });
var format_ZONAB_4 = new ol.format.GeoJSON();
var features_ZONAB_4 = format_ZONAB_4.readFeatures(json_ZONAB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAB_4.addFeatures(features_ZONAB_4);
var lyr_ZONAB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAB_4, 
                style: style_ZONAB_4,
                popuplayertitle: 'ZONA B',
                interactive: true,
                title: '<img src="styles/legend/ZONAB_4.png" /> ZONA B'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZONAA_1.setVisible(true);lyr_ZONAC_2.setVisible(true);lyr_ZONAD_3.setVisible(true);lyr_ZONAB_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZONAA_1,lyr_ZONAC_2,lyr_ZONAD_3,lyr_ZONAB_4];
lyr_ZONAA_1.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', });
lyr_ZONAC_2.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', });
lyr_ZONAD_3.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', });
lyr_ZONAB_4.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', });
lyr_ZONAA_1.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', });
lyr_ZONAC_2.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', });
lyr_ZONAD_3.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', });
lyr_ZONAB_4.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', });
lyr_ZONAA_1.set('fieldLabels', {'id': 'hidden field', 'NAMA JALAN': 'header label - visible with data', });
lyr_ZONAC_2.set('fieldLabels', {'id': 'hidden field', 'NAMA JALAN': 'header label - visible with data', });
lyr_ZONAD_3.set('fieldLabels', {'id': 'hidden field', 'NAMA JALAN': 'header label - visible with data', });
lyr_ZONAB_4.set('fieldLabels', {'id': 'hidden field', 'NAMA JALAN': 'header label - visible with data', });
lyr_ZONAB_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});