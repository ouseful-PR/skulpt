To update from master, in master branch:

`git pull upstream master`

Pull from master into `ev3devsim` branch.

Rebuild:

With node.js installed, run npm run dist in the top level repo directory.
A series of tests will be executed and copies of skulpt.min.js and skulpt-stdlib.js built into the Skulpt dist folder.
These files can then be loaded into a web page and used to power in-browser Python code execution.
