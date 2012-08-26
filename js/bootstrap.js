$script([
	'js/jquery.js',
	'js/foundation.spotify.js'
], function() {
	$script([
		'js/jqueryui.js',
		'js/jquery.tmpl.js',
		'js/Markdown.Converter.js'
	], function() {
		$script([
			'js/foundation.core.js',
			'js/foundation.players.js'
		],function() {
			$(document).ready(function(){
				sp = getSpotifyApi(1);
				ui = sp.require('sp://import/scripts/dnd');
				models  = sp.require('sp://import/scripts/api/models');
				views  = sp.require('sp://import/scripts/api/views');
				auth  = sp.require('sp://import/scripts/api/auth');

				if(models.session.state === 1) {
					FOUNDATION.core.init();
				}
			});
		});
	});
});