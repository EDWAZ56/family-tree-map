//functie om te controleren of een javascript array een waarde bevat
function contains(a, obj) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}




//features zullen popup krijgen bij inladen
function onEachFeature(feature, layer) {
		var popupContent = feature.properties.naam

		if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupContent;
		}
		
		

			

		
		
		
		layer.bindPopup(popupContent);
	}