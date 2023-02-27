ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([822770.555100, 6486064.988063, 930323.673106, 6541808.059772]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCIMISSIONAETB_1 = new ol.format.GeoJSON();
var features_EPCIMISSIONAETB_1 = format_EPCIMISSIONAETB_1.readFeatures(json_EPCIMISSIONAETB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_EPCIMISSIONAETB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCIMISSIONAETB_1.addFeatures(features_EPCIMISSIONAETB_1);
var lyr_EPCIMISSIONAETB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCIMISSIONAETB_1, 
                style: style_EPCIMISSIONAETB_1,
                interactive: true,
                title: '<img src="styles/legend/EPCIMISSIONAETB_1.png" /> EPCI MISSION A ET B'
            });
var format_COMMUNEMISSIONAETB_2 = new ol.format.GeoJSON();
var features_COMMUNEMISSIONAETB_2 = format_COMMUNEMISSIONAETB_2.readFeatures(json_COMMUNEMISSIONAETB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_COMMUNEMISSIONAETB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNEMISSIONAETB_2.addFeatures(features_COMMUNEMISSIONAETB_2);
var lyr_COMMUNEMISSIONAETB_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNEMISSIONAETB_2, 
                style: style_COMMUNEMISSIONAETB_2,
                interactive: true,
                title: '<img src="styles/legend/COMMUNEMISSIONAETB_2.png" /> COMMUNE MISSION A ET B'
            });
var format_TRACERABATTEMENTetANTENNEVELOVIARHONA_3 = new ol.format.GeoJSON();
var features_TRACERABATTEMENTetANTENNEVELOVIARHONA_3 = format_TRACERABATTEMENTetANTENNEVELOVIARHONA_3.readFeatures(json_TRACERABATTEMENTetANTENNEVELOVIARHONA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_TRACERABATTEMENTetANTENNEVELOVIARHONA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACERABATTEMENTetANTENNEVELOVIARHONA_3.addFeatures(features_TRACERABATTEMENTetANTENNEVELOVIARHONA_3);
var lyr_TRACERABATTEMENTetANTENNEVELOVIARHONA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRACERABATTEMENTetANTENNEVELOVIARHONA_3, 
                style: style_TRACERABATTEMENTetANTENNEVELOVIARHONA_3,
                interactive: true,
                title: '<img src="styles/legend/TRACERABATTEMENTetANTENNEVELOVIARHONA_3.png" /> TRACE RABATTEMENT et ANTENNE VELO VIARHONA'
            });
var format_TRACERABATTEMENTAUTOVIARHONA_4 = new ol.format.GeoJSON();
var features_TRACERABATTEMENTAUTOVIARHONA_4 = format_TRACERABATTEMENTAUTOVIARHONA_4.readFeatures(json_TRACERABATTEMENTAUTOVIARHONA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_TRACERABATTEMENTAUTOVIARHONA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACERABATTEMENTAUTOVIARHONA_4.addFeatures(features_TRACERABATTEMENTAUTOVIARHONA_4);
var lyr_TRACERABATTEMENTAUTOVIARHONA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRACERABATTEMENTAUTOVIARHONA_4, 
                style: style_TRACERABATTEMENTAUTOVIARHONA_4,
                interactive: true,
                title: '<img src="styles/legend/TRACERABATTEMENTAUTOVIARHONA_4.png" /> TRACE RABATTEMENT AUTO VIARHONA'
            });
var format_TRACEVIARHONAENPROJET_5 = new ol.format.GeoJSON();
var features_TRACEVIARHONAENPROJET_5 = format_TRACEVIARHONAENPROJET_5.readFeatures(json_TRACEVIARHONAENPROJET_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_TRACEVIARHONAENPROJET_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACEVIARHONAENPROJET_5.addFeatures(features_TRACEVIARHONAENPROJET_5);
var lyr_TRACEVIARHONAENPROJET_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRACEVIARHONAENPROJET_5, 
                style: style_TRACEVIARHONAENPROJET_5,
                interactive: false,
                title: '<img src="styles/legend/TRACEVIARHONAENPROJET_5.png" /> TRACE VIARHONA EN PROJET'
            });
var format_TRACEVIARHONAversionajustesuiteauterrain_6 = new ol.format.GeoJSON();
var features_TRACEVIARHONAversionajustesuiteauterrain_6 = format_TRACEVIARHONAversionajustesuiteauterrain_6.readFeatures(json_TRACEVIARHONAversionajustesuiteauterrain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_TRACEVIARHONAversionajustesuiteauterrain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACEVIARHONAversionajustesuiteauterrain_6.addFeatures(features_TRACEVIARHONAversionajustesuiteauterrain_6);
var lyr_TRACEVIARHONAversionajustesuiteauterrain_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRACEVIARHONAversionajustesuiteauterrain_6, 
                style: style_TRACEVIARHONAversionajustesuiteauterrain_6,
                interactive: false,
                title: '<img src="styles/legend/TRACEVIARHONAversionajustesuiteauterrain_6.png" /> TRACE VIARHONA - version ajustée suite au terrain'
            });
var format_BDVIARHONASIGNALISATIONEQUIPEMENT_7 = new ol.format.GeoJSON();
var features_BDVIARHONASIGNALISATIONEQUIPEMENT_7 = format_BDVIARHONASIGNALISATIONEQUIPEMENT_7.readFeatures(json_BDVIARHONASIGNALISATIONEQUIPEMENT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_BDVIARHONASIGNALISATIONEQUIPEMENT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDVIARHONASIGNALISATIONEQUIPEMENT_7.addFeatures(features_BDVIARHONASIGNALISATIONEQUIPEMENT_7);
var lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDVIARHONASIGNALISATIONEQUIPEMENT_7, 
                style: style_BDVIARHONASIGNALISATIONEQUIPEMENT_7,
                interactive: true,
    title: 'BD VIARHONA - SIGNALISATION EQUIPEMENT<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_0.png" /> Équipement d\'accueil<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_1.png" /> Signalisation de jalonnement cyclable<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_2.png" /> Signalisation de police<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_3.png" /> Signalisation touristique<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_4.png" /> Signalisation cyclable hors ViaRhôna<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_5.png" /> Signalisation d\'indication<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_6.png" /> Signalisation d\'information<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_7.png" /> Signalisation de rabattement<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_8.png" /> Publicité (pré-enseigne)<br />\
    <img src="styles/legend/BDVIARHONASIGNALISATIONEQUIPEMENT_7_9.png" /> Dysfonctionnement<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_EPCIMISSIONAETB_1.setVisible(false);lyr_COMMUNEMISSIONAETB_2.setVisible(false);lyr_TRACERABATTEMENTetANTENNEVELOVIARHONA_3.setVisible(true);lyr_TRACERABATTEMENTAUTOVIARHONA_4.setVisible(true);lyr_TRACEVIARHONAENPROJET_5.setVisible(true);lyr_TRACEVIARHONAversionajustesuiteauterrain_6.setVisible(true);lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EPCIMISSIONAETB_1,lyr_COMMUNEMISSIONAETB_2,lyr_TRACERABATTEMENTetANTENNEVELOVIARHONA_3,lyr_TRACERABATTEMENTAUTOVIARHONA_4,lyr_TRACEVIARHONAENPROJET_5,lyr_TRACEVIARHONAversionajustesuiteauterrain_6,lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7];
lyr_EPCIMISSIONAETB_1.set('fieldAliases', {'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', });
lyr_COMMUNEMISSIONAETB_2.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_2': 'ID_2', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', });
lyr_TRACERABATTEMENTetANTENNEVELOVIARHONA_3.set('fieldAliases', {'NOM': 'NOM', 'JALON': 'JALON', });
lyr_TRACERABATTEMENTAUTOVIARHONA_4.set('fieldAliases', {'NOM': 'NOM', });
lyr_TRACEVIARHONAENPROJET_5.set('fieldAliases', {'id': 'id', });
lyr_TRACEVIARHONAversionajustesuiteauterrain_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7.set('fieldAliases', {'Date_terra': 'Date_terra', 'ID_photo': 'ID_photo', 'Lieu_d_imp': 'Lieu_d_imp', 'EPCI': 'EPCI', 'Commune': 'Commune', 'Nom_de_l_a': 'Nom_de_l_a', 'Niveau_de_': 'Niveau_de_', 'Type_de_si': 'Type_de_si', 'Sous_type_': 'Sous_type_', 'Signalisat': 'Signalisat', 'Sous_typ_1': 'Sous_typ_1', 'Panonceaux': 'Panonceaux', 'Idéogramm': 'Idéogramm', 'Mention_su': 'Mention_su', 'Distance__': 'Distance__', 'Mention_in': 'Mention_in', 'Distance_1': 'Distance_1', 'Mention__1': 'Mention__1', 'distance_2': 'distance_2', 'Protection': 'Protection', 'Capacité_': 'Capacité_', 'Quantité': 'Quantité', 'Etat': 'Etat', 'Dysfonctio': 'Dysfonctio', 'Dysfonct_1': 'Dysfonct_1', 'Dysfonct_2': 'Dysfonct_2', 'Dysfonct_3': 'Dysfonct_3', 'Dysfonct_4': 'Dysfonct_4', 'S_01': 'S_01', 'S_02': 'S_02', 'S_03': 'S_03', 'S_04': 'S_04', 'S_05': 'S_05', 'S_06': 'S_06', 'S_07': 'S_07', 'S_08': 'S_08', 'S_09': 'S_09', 'S_10': 'S_10', 'S_11': 'S_11', 'S_12': 'S_12', 'S_13': 'S_13', 'S_14': 'S_14', 'S_15': 'S_15', 'S_16': 'S_16', 'S_17': 'S_17', 'S_18': 'S_18', 'S_19': 'S_19', 'S_20': 'S_20', 'S_21': 'S_21', 'S_22': 'S_22', 'S_23': 'S_23', 'S_24': 'S_24', 'S_25': 'S_25', 'S_26': 'S_26', 'S_27': 'S_27', 'S_28': 'S_28', 'Remarques': 'Remarques', 'Name': 'Name', 'Lon': 'Lon', 'Lat': 'Lat', });
lyr_EPCIMISSIONAETB_1.set('fieldImages', {'ID': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', });
lyr_COMMUNEMISSIONAETB_2.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_2': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', });
lyr_TRACERABATTEMENTetANTENNEVELOVIARHONA_3.set('fieldImages', {'NOM': 'TextEdit', 'JALON': 'TextEdit', });
lyr_TRACERABATTEMENTAUTOVIARHONA_4.set('fieldImages', {'NOM': 'TextEdit', });
lyr_TRACEVIARHONAENPROJET_5.set('fieldImages', {'id': 'TextEdit', });
lyr_TRACEVIARHONAversionajustesuiteauterrain_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7.set('fieldImages', {'Date_terra': 'DateTime', 'ID_photo': 'TextEdit', 'Lieu_d_imp': 'TextEdit', 'EPCI': 'TextEdit', 'Commune': 'TextEdit', 'Nom_de_l_a': 'TextEdit', 'Niveau_de_': 'TextEdit', 'Type_de_si': 'TextEdit', 'Sous_type_': 'TextEdit', 'Signalisat': 'TextEdit', 'Sous_typ_1': 'TextEdit', 'Panonceaux': 'TextEdit', 'Idéogramm': 'TextEdit', 'Mention_su': 'TextEdit', 'Distance__': 'TextEdit', 'Mention_in': 'TextEdit', 'Distance_1': 'TextEdit', 'Mention__1': 'TextEdit', 'distance_2': 'TextEdit', 'Protection': 'TextEdit', 'Capacité_': 'TextEdit', 'Quantité': 'TextEdit', 'Etat': 'TextEdit', 'Dysfonctio': 'TextEdit', 'Dysfonct_1': 'TextEdit', 'Dysfonct_2': 'TextEdit', 'Dysfonct_3': 'TextEdit', 'Dysfonct_4': 'TextEdit', 'S_01': 'TextEdit', 'S_02': 'TextEdit', 'S_03': 'TextEdit', 'S_04': 'TextEdit', 'S_05': 'TextEdit', 'S_06': 'TextEdit', 'S_07': 'TextEdit', 'S_08': 'TextEdit', 'S_09': 'TextEdit', 'S_10': 'TextEdit', 'S_11': 'TextEdit', 'S_12': 'TextEdit', 'S_13': 'TextEdit', 'S_14': 'TextEdit', 'S_15': 'TextEdit', 'S_16': 'TextEdit', 'S_17': 'TextEdit', 'S_18': 'TextEdit', 'S_19': 'TextEdit', 'S_20': 'TextEdit', 'S_21': 'TextEdit', 'S_22': 'TextEdit', 'S_23': 'TextEdit', 'S_24': 'TextEdit', 'S_25': 'TextEdit', 'S_26': 'TextEdit', 'S_27': 'TextEdit', 'S_28': 'TextEdit', 'Remarques': 'TextEdit', 'Name': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', });
lyr_EPCIMISSIONAETB_1.set('fieldLabels', {'ID': 'no label', 'CODE_EPCI': 'no label', 'NOM_EPCI': 'no label', 'TYPE_EPCI': 'no label', });
lyr_COMMUNEMISSIONAETB_2.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', 'ID_2': 'no label', 'CODE_EPCI': 'no label', 'NOM_EPCI': 'no label', 'TYPE_EPCI': 'no label', });
lyr_TRACERABATTEMENTetANTENNEVELOVIARHONA_3.set('fieldLabels', {'NOM': 'inline label', 'JALON': 'inline label', });
lyr_TRACERABATTEMENTAUTOVIARHONA_4.set('fieldLabels', {'NOM': 'inline label', });
lyr_TRACEVIARHONAENPROJET_5.set('fieldLabels', {'id': 'inline label', });
lyr_TRACEVIARHONAversionajustesuiteauterrain_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7.set('fieldLabels', {'Date_terra': 'inline label', 'ID_photo': 'inline label', 'Lieu_d_imp': 'inline label', 'EPCI': 'inline label', 'Commune': 'inline label', 'Nom_de_l_a': 'inline label', 'Niveau_de_': 'inline label', 'Type_de_si': 'inline label', 'Sous_type_': 'inline label', 'Signalisat': 'inline label', 'Sous_typ_1': 'inline label', 'Panonceaux': 'inline label', 'Idéogramm': 'inline label', 'Mention_su': 'inline label', 'Distance__': 'inline label', 'Mention_in': 'inline label', 'Distance_1': 'inline label', 'Mention__1': 'inline label', 'distance_2': 'inline label', 'Protection': 'inline label', 'Capacité_': 'inline label', 'Quantité': 'inline label', 'Etat': 'inline label', 'Dysfonctio': 'inline label', 'Dysfonct_1': 'inline label', 'Dysfonct_2': 'inline label', 'Dysfonct_3': 'inline label', 'Dysfonct_4': 'inline label', 'S_01': 'inline label', 'S_02': 'inline label', 'S_03': 'inline label', 'S_04': 'inline label', 'S_05': 'inline label', 'S_06': 'inline label', 'S_07': 'inline label', 'S_08': 'inline label', 'S_09': 'inline label', 'S_10': 'inline label', 'S_11': 'inline label', 'S_12': 'inline label', 'S_13': 'inline label', 'S_14': 'inline label', 'S_15': 'inline label', 'S_16': 'inline label', 'S_17': 'inline label', 'S_18': 'inline label', 'S_19': 'inline label', 'S_20': 'inline label', 'S_21': 'inline label', 'S_22': 'inline label', 'S_23': 'inline label', 'S_24': 'inline label', 'S_25': 'inline label', 'S_26': 'inline label', 'S_27': 'inline label', 'S_28': 'inline label', 'Remarques': 'inline label', 'Name': 'inline label', 'Lon': 'inline label', 'Lat': 'inline label', });
lyr_BDVIARHONASIGNALISATIONEQUIPEMENT_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});