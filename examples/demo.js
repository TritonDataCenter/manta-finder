/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2016, Joyent, Inc.
 */

/*
 * examples/demo.js: enumerate a directory hierarchy using MantaFinder
 */

var mod_bunyan = require('bunyan');
var mod_manta = require('manta');
var MantaFinder = require('../lib/manta-find');

function main()
{
	var log, manta, findstream;

	if (process.argv.length != 3) {
		console.error('usage: node examples/demo.js MANTA_PATH');
		process.exit(1);
	}

	log = new mod_bunyan({ 'name': 'demo.js' });
	manta = mod_manta.createBinClient({ 'log': log });
	process.removeAllListeners('uncaughtException');
	findstream = new MantaFinder({
	    'log': log,
	    'manta': manta,
	    'root': process.argv[2],
	    'filter': function () { return (true); }
	});

	findstream.on('data', function (c) {
		console.log(c);
	});
}

main();
