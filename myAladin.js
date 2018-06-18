var aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov: "3", target: "Pleiades"});


// adding overlay with circle
var overlay = window.A.graphicOverlay({color: '#ee2345', lineWidth: 2});
aladin.addOverlay(overlay);

// add catalog with markers
var cat = A.catalog({name: 'Some markers', sourceSize: 18});
aladin.addCatalog(cat);

var xhr = new XMLHttpRequest();
//xhr.open('GET', 'alta-observations.json', true);
//xhr.open('GET', 'http://localhost:8000/altapi/observations', true);


xhr.open('GET', 'http://localhost:8001/mom3api/lofarbeams', true);
xhr.onreadystatechange = function(e) {
    if (xhr.readyState === 4) {
        var t0 = performance.now();
        if (xhr.status === 200) {

            var json = JSON.parse(xhr.responseText);
            var data = json["results"]
            console.log('start rendering')
            for (var i=0;i<data.length;i++) {
                var observation = data[i]

                var RA = parseFloat(observation.spec_ra)
                var dec = parseFloat(observation.spec_decl)
                var title = observation.spec_targetname
                // var RA = parseFloat(observation.RA)
                // var dec = parseFloat(observation.dec)
                // var fov = parseFloat(observation.fov)

                // 90 ms for 10000 objects
                // 550 ms to render  for 91000 objects, reading data = 20 secs
                overlay.add(A.circle(RA, dec, 0.1, {color: 'red'}));

                // 250 ms for 10000 objects
                // 18422  for 91000 objects
                //cat.addSources([A.marker(RA,dec, {popupTitle: title, popupDesc: '<em>Bmag:</em> 4.199<br/><em>Spectral type:</em> B6IV<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+TAYGETA&NbIdent=1">in Simbad</a>'})]);
            }
            console.log('end rendering')
            var t1 = performance.now();
            console.log("Rendering took " + (t1 - t0) + " ms for data.size = "+data.length)
            alert("Rendering took " + (t1 - t0) + " ms for data.size = "+data.length)
        }
    }
};
xhr.send(null);


var cat_pleiades = A.catalog({name: 'Pleiades', sourceSize: 18});
aladin.addCatalog(cat_pleiades);
cat_pleiades.addSources([A.marker(56.87115, 24.10514, {popupTitle: 'Alcyone', popupDesc: '<em>Bmag:</em> 2.806<br/><em>Spectral type:</em> B7III<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME%20ALCYONE&submit=submit">in Simbad</a>'})]);
cat_pleiades.addSources([A.marker(57.29673, 24.13671, {popupTitle: 'Pleione', popupDesc: '<em>Bmag:</em> 4.97<br/><em>Spectral type:</em> B8vne<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+PLEIONE&NbIdent=1">in Simbad</a>'})]);
cat_pleiades.addSources([A.marker(56.58156, 23.94836, {popupTitle: 'Merope', popupDesc: '<em>Bmag:</em> 4.113<br/><em>Spectral type:</em> BVI4e<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=V*+V971+Tau&NbIdent=1">in Simbad</a>'})]);
cat_pleiades.addSources([A.marker(56.45669, 24.36775, {popupTitle: 'Maia', popupDesc: '<em>Bmag:</em> 3.812<br/><em>Spectral type:</em> B8III<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+MAIA&NbIdent=1">in Simbad</a>'})]);
cat_pleiades.addSources([A.marker(56.21890, 24.11334, {popupTitle: 'Electra', popupDesc: '<em>Bmag:</em> 3.612<br/><em>Spectral type:</em> B6IIIe<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+ELECTRA&NbIdent=1">in Simbad</a>'})]);
cat_pleiades.addSources([A.marker(57.29059, 24.05342, {popupTitle: 'Atlas', popupDesc: '<em>Bmag:</em> 3.54<br/><em>Spectral type:</em> B8III<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+ATLAS&NbIdent=1">in Simbad</a>'})]);
cat_pleiades.addSources([A.marker(56.30207, 24.46728, {popupTitle: 'Taygeta', popupDesc: '<em>Bmag:</em> 4.199<br/><em>Spectral type:</em> B6IV<br/>More info <a target="_blank" href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+TAYGETA&NbIdent=1">in Simbad</a>'})]);
