#################################
How to use write CSS in this project using sass
Steps 1, 2 and 3 only need to be done once
-- SETUP --
1. Make sure node.js is installed globally
2. Using console in root directory, run
	 $ npm install
	 This will install dependencies specified in package.json
3. SVN ignore newly created node_modules folder
-- WATCH --
4. Using console in project root or gulpfile.js run
	 $ gulp 
	 -- or --
	 $ gulp default
	 -- or --
	 $ gulp watch
	 This will watch for changes in SASS and compile into CSS
#################################