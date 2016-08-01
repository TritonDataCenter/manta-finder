# manta-finder: filtered Manta directory traversal

The [node-manta](https://github.com/joyent/node-manta) SDK includes a
stream-based directory traversal.  This module provides a similar stream-based
directory traversal that also supports the ability to prune directories during
the search.  The pruning functionality should likely be incorporated into the
existing node-manta SDK's stream.

For example usage, see the [mprune
tool](https://github.com/joyent/manta-mprune).
