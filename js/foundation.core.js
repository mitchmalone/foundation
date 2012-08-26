/*
	Reebok Core Script
	Author: Mitch Malone & Ben Novakovic - We Are Hunted
	Version 0.1
*/

(function($) {
	window.FOUNDATION = $.extend(window.FOUNDATION || {}, {
		core: {
			init: function(){
				console.log('FOUNDATION.core.init();');
				
				this.pages = {
					'players':	FOUNDATION.players
				},

				this.readMe();
				this.handleArguments();
				this.eventListeners();
			},

			// Simple function to grab the README.md file and insert it into the DOM
			readMe: function() {
				$.ajax({
					url: 'README.md',
					success: function(data) {
						console.log('README.md read');
						var converter = new Markdown.Converter();
						var html = converter.makeHtml(data);
						$('div#markdown').html(html);
					}
				});
			},

			eventListeners: function() {
				console.log('FOUNDATION.core.eventListeners();')
				
				var _this = this;
				
				// Listen for argument changes and hand it off to a function to manage
				models.application.observe(models.EVENT.ARGUMENTSCHANGED, function(d) {
					_this.handleArguments();
				});
			},
			
			handleArguments: function() {
				var _this = this;

				$('.page').hide();
				$('#' + models.application.arguments[0]).show();
				this.loadUnload(models.application.arguments[0]);
			},

			loadUnload: function (toLoad) {
				console.log(toLoad)
				
				var _this = this;

				for (var page in this.pages) {
					if(_this.pages[page] && typeof this.pages[page].unload === 'function')
						this.pages[page].unload();
				}

				if(_this.pages[toLoad] && typeof _this.pages[toLoad].init === 'function')
					_this.pages[toLoad].init();
			}
		}
	});
})(jQuery);