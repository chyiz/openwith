let EXPORTED_SYMBOLS = ['OpenWithTelemetry'];

const Cu = Components.utils;

const ID = 'openwith@darktrojan.net';

Cu.import('resource://gre/modules/Services.jsm');

const Telemetry = Services.telemetry;

let OpenWithTelemetry = {
	browserOpened: 'OPEN_WITH_BROWSER_OPENED_COUNT',

	init: function() {
		Telemetry.registerAddonHistogram(ID, this.browserOpened, Services.telemetry.HISTOGRAM_COUNT);
	},
	log: function(histogram, value) {
		Telemetry.getAddonHistogram(ID, histogram).add(value);
	}
};

OpenWithTelemetry.init();
