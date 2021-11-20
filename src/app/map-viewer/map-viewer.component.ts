import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-map-viewer',
	templateUrl: './map-viewer.component.html',
	styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {

	private map: mapboxgl.Map;
	//style = 'mapbox://styles/mapbox/streets-v11';
	//private style = 'mapbox://styles/mapbox/dark-v10';
	private style = 'mapbox://styles/mapbox/satellite-v9';
	//lng = -43.967885971069336;
	//lat = -19.968977522259678;
	private lng = -43.97948384284973;
	private lat = -20.049571778797166;
	constructor() { }

	public flyTo(): void {
		let move = -43.98108;
		setInterval(() => {
			move += 0.0001;
			var source = this.map.getSource('point') as mapboxgl.GeoJSONSource;
			source.setData({
				'type': 'FeatureCollection',
				'features': [
					{
						'type': 'Feature',
						"properties": {},
						'geometry': {
							'type': 'Point',
							'coordinates': [move, -20.04825]
						}
					}
				]
			});
		}, 3000)

		this.map.flyTo({
			// center: [
			// 	-74.5 + (Math.random() - 0.5) * 10,
			// 	40 + (Math.random() - 0.5) * 10
			// ],
			zoom: 18,
			center: [-43.98108243942261, -20.048251472780628],
			essential: true // this animation is considered essential with respect to prefers-reduced-motion
		});
	}

	ngOnInit() {
		this.map = new mapboxgl.Map({
			container: 'map',
			style: this.style,
			zoom: 15,
			center: [this.lng, this.lat],
			accessToken: environment.mapbox.accessToken
		});
		// Add map controls
		//this.map.addControl(new mapboxgl.NavigationControl());

		this.map.on('load', () => {

			['t1', 't2'].forEach(icon => this.map.loadImage(
				`../assets/images/${icon}.png`, //'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png',
				(error, image) => {
					if (error) {
						console.log(error);
						throw error;
					}
					this.map.addImage(icon, image);
				}
			));

			this.map.addSource('point', {
				'type': 'geojson',
				'data': {
					'type': 'FeatureCollection',
					'features': [
						{
							'type': 'Feature',
							"properties": {},
							'geometry': {
								'type': 'Point',
								'coordinates': [-43.98108243942261, -20.048251472780628]
							}
						}
					]
				}
			});

			this.map.addLayer({
				'id': 'points',
				'type': 'symbol',
				'source': 'point', // reference the data source
				'layout': {
					'icon-image': 't1', // reference the image
					'icon-size': ['interpolate', ['linear'], ['zoom'], 10, 0.1, 15, 0.5]
				}
			});

			// Add a data source containing GeoJSON data.
			this.map.addSource('maine', {
				'type': 'geojson',
				'data': {
					"type": "Feature",
					"properties": {},
					"geometry": {
						"type": "Polygon",
						"coordinates": [
							[
								[
									-43.98345351219177,
									-20.046036659701162
								],
								[
									-43.9841428399086,
									-20.046248315543476
								],
								[
									-43.984282314777374,
									-20.046225638145444
								],
								[
									-43.98457199335098,
									-20.046616192876268
								],
								[
									-43.98463636636734,
									-20.04674469776884
								],
								[
									-43.984759747982025,
									-20.046797611517572
								],
								[
									-43.98488312959671,
									-20.047047061807138
								],
								[
									-43.98510307073593,
									-20.047314149556616
								],
								[
									-43.985526859760284,
									-20.047729898451358
								],
								[
									-43.98615449666976,
									-20.048029740910334
								],
								[
									-43.98659706115723,
									-20.048191000483417
								],
								[
									-43.986929655075066,
									-20.048543755222113
								],
								[
									-43.98728370666504,
									-20.049370206077707
								],
								[
									-43.987358808517456,
									-20.05027728127719
								],
								[
									-43.987122774124146,
									-20.050690502686038
								],
								[
									-43.987133502960205,
									-20.05091223079848
								],
								[
									-43.98593187332153,
									-20.05146654970946
								],
								[
									-43.98553490638733,
									-20.051557256253982
								],
								[
									-43.9848268032074,
									-20.051768904654068
								],
								[
									-43.98419380187988,
									-20.05209141595308
								],
								[
									-43.983485698699944,
									-20.052615495400765
								],
								[
									-43.98330330848694,
									-20.052806985531724
								],
								[
									-43.982412815093994,
									-20.053139573098697
								],
								[
									-43.9812970161438,
									-20.053633413943558
								],
								[
									-43.98047089576721,
									-20.054016391488243
								],
								[
									-43.97987008094787,
									-20.053834981188825
								],
								[
									-43.97919416427612,
									-20.05367372741332
								],
								[
									-43.97835731506348,
									-20.053774511042416
								],
								[
									-43.97758483886719,
									-20.053875294606808
								],
								[
									-43.977155685424805,
									-20.05419780157799
								],
								[
									-43.97659778594971,
									-20.05444975968814
								],
								[
									-43.97627592086792,
									-20.055165318515467
								],
								[
									-43.97654414176941,
									-20.05544750983209
								],
								[
									-43.9767050743103,
									-20.055699465936048
								],
								[
									-43.97632956504822,
									-20.056052203802043
								],
								[
									-43.97483825683594,
									-20.055890952304527
								],
								[
									-43.97380828857422,
									-20.05512500542881
								],
								[
									-43.9722204208374,
									-20.05407686154146
								],
								[
									-43.96934509277343,
									-20.051738669185806
								],
								[
									-43.96917343139648,
									-20.050408302817274
								],
								[
									-43.96973133087158,
									-20.049722958166925
								],
								[
									-43.97130846977233,
									-20.04964232918784
								],
								[
									-43.97159814834595,
									-20.04940044200211
								],
								[
									-43.97202730178833,
									-20.04931981285739
								],
								[
									-43.97244572639465,
									-20.049088003835653
								],
								[
									-43.97334694862366,
									-20.048160764326095
								],
								[
									-43.97454857826233,
									-20.047344385877
								],
								[
									-43.975675106048584,
									-20.046840446443962
								],
								[
									-43.976640701293945,
									-20.046447372563428
								],
								[
									-43.97753119468689,
									-20.04630626887913
								],
								[
									-43.978132009506226,
									-20.046336505393576
								],
								[
									-43.97848606109619,
									-20.04638689957139
								],
								[
									-43.979215621948235,
									-20.04623571698941
								],
								[
									-43.98106098175049,
									-20.045913193661377
								],
								[
									-43.98200511932372,
									-20.046255874675413
								],
								[
									-43.982863426208496,
									-20.04637682073712
								],
								[
									-43.98345351219177,
									-20.046036659701162
								]
							]
						]
					}
				}
			});

			// Add a new layer to visualize the polygon.
			this.map.addLayer({
				'id': 'maine',
				'type': 'fill',
				'source': 'maine', // reference the data source
				'layout': {},
				'paint': {
					'fill-color': '#0080ff', // blue color fill
					'fill-opacity': 0.0
				}
			});
			// Add a black outline around the polygon.
			this.map.addLayer({
				'id': 'outline',
				'type': 'line',
				'source': 'maine',
				'layout': {},
				'paint': {
					'line-color': '#fff',
					'line-width': 3
				}
			});
		});
	}


}
