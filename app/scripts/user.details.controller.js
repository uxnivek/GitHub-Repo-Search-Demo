(function () {
	'use strict';

	angular
		.module('app')
		
		.controller('UserDetailsController', UserDetailsController);

	UserDetailsController.$inject = ['$http', '$log'];

	function UserDetailsController($http, $log) {
		var currentRepo = this;
		currentRepo.showId = '';
		currentRepo.showChart = false;

		currentRepo.getRepoLangs = getRepoLangs;
		currentRepo.createPieChart = createPieChart;

		function getRepoLangs (repo) {
			currentRepo.showId = repo.id;
			console.log(config.api.endPoint + config.api.reposUrl + repo.owner.login + '/' + repo.name + config.api.langsParam)

			$http.get(config.api.endPoint + config.api.reposUrl + repo.owner.login + '/' + repo.name + config.api.langsParam)
				.success(function (result) {

					if (Object.keys(result).length > 0) {
						currentRepo.langs = result;
						currentRepo.id = repo.id;
						currentRepo.showChart = true;
						currentRepo.reponame = repo.name;
						currentRepo.createPieChart(currentRepo.langs, currentRepo.id);
					}
				})
				.error(function (error) {
					$log.log(error);
				});
		};

		function getRepoLangs (langs) {
			var w = 200;
			var h = w;
			var r = h/2;
			var color = d3.scale.category20c();

			var data = [];
			var maxValue = 0;

			// First, determine the maxValue
			_.forEach(langs, function(value, key) { 
				maxValue = Math.max(value, maxValue);
			});

			// Next, don't show fractions that are less than 2%
			_.forEach(langs, function(value, key) { 
				var addData = false;
				
				if ( value !== maxValue ) {
					var pc = value / maxValue;
					if ( pc >= 0.02) {
						addData = true;
					}
				} else {
					addData = true;
				}

				if ( addData ) {
					data.push({'label':key, 'value':value});
				}
			});

			var vis = d3.select('#chart').html('').append('svg:svg').data([data]).attr('width', w).attr('height', h).append('svg:g').attr('transform', 'translate(' + r + ',' + r + ')');
			var pie = d3.layout.pie().value(function(d){return d.value;});

			// declare an arc generator function
			var arc = d3.svg.arc().outerRadius(r);

			// select paths, use arc generator to draw
			var arcs = vis.selectAll('g.slice').data(pie).enter().append('svg:g').attr('class', 'slice');
			arcs.append('svg:path')
			.attr('fill', function(d, i){
				return color(i);
			})
			.attr('d', function (d) {
				// log the result of the arc generator to show how cool it is :)
				return arc(d);
			});

			// add the text
			arcs.append('svg:text').attr('transform', function(d){
				d.innerRadius = 0;
				d.outerRadius = r;
				return 'translate(' + arc.centroid(d) + ')';}).attr('text-anchor', 'middle').text( function(d, i) {
					return data[i].label;
				}
			);
		};
	};
})();