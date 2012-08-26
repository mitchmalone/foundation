/*
	Reebok Core Script
	Author: Mitch Malone & Ben Novakovic - We Are Hunted
	Version 0.1
*/

(function($) {
	window.FOUNDATION = $.extend(window.FOUNDATION || {}, {
		players: {
			list: null,
			init: function(){
				console.log('FOUNDATION.players.init();');

				this.addPlayer();
				this.addPlaylist();
				this.addCustomPlayer();
				this.addCustomPlaylist();
			},

			addPlayer: function() {
				// Fetch the album object
				var album = models.Album.fromURI('spotify:album:58ukFMtQgwjVD9vMlfnSi9', function(a) {
					// Create the player
					var player = new views.Player();

					// Ensure the player context is set to the album object
					player.context = album;

					// Insert the player node into the DOM
					$('#players div.player').html(player.node);
				});
			},

			addPlaylist: function() {
				// Fetch the album object
				var album = models.Album.fromURI('spotify:album:58ukFMtQgwjVD9vMlfnSi9', function(a) {
					// Create the playlist
					var list = new views.List(album);
					list.node.classList.add('sp-light'); // A little tweak to make it look nice
					
					// Insert the playlist node into the DOM
					$('#players .playlist').html(list.node);
				});
			},

			addCustomPlayer: function() {
				// Fetch the album object
				var album = models.Album.fromURI('spotify:album:2F4jyLqhD4sgKGznQE9Kem', function(a) {
					// Create the player the same as before
					var player = new views.Player();
					player.context = album;
					
					// But before inserting it, let's have some fun.
					
					// Swap the image out with a nicer image from We Are Hunted
					var image = new views.Image('http://media2.wearehunted.com/media/entity/netsky_jpg_220x180_crop_upscale_q85.jpg', '', '');
					$(player.node).find('.sp-player-image').replaceWith(image.node);
					
					
					// Now let's make the player nice and hugified!
					player.node.classList.add('sp-image-large');

					// Insert the player node into the DOM
					$('#players div.customPlayer').html(player.node);
				});
			},

			addCustomPlaylist: function() {
				
			}
		}
	});
})(jQuery);