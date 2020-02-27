# SETUP README
## Project Live Url
https://www.petitenpretty.com/


## Project Setup
1. In Mac Terminal navigate to your project's root folder.
2. Make sure themekit is installed. If it's not go to https://shopify.github.io/themekit/
3. There should be a config.yml.sample in the root of the project. Duplicate this file and name it config.yml. This will have the default api information for Shopify. If you're working on a cloned theme because multiple developers are on the project, this is where you'd update your theme id. Make sure config.yml is not being tracked in the repo.
4. Type the command **npm install** and press enter. This will install all node dependencies for the project.
5. Type **gulp** and press enter. This will run all project gulp tasks and also ensure that all dependencies are installed properly. If a dependency does not exist you'll see an error in terminal. If you see this error, install the missing dependency by typing the command **npm install *package_name* --save-dev**. After this make sure to commit your package.json file so that the next user has the dependencies they need.

## Gulp Config
There is a file in the root directory called **gulp-config**. This file maintains the list of directories, stylesheets, sprites, and javascript files. All configuration for gulp should be here.

## Watch
Typing **npm run dev** will watch a variety of directories for changes and then perform the needed gulp task. In addition to running gulp watch it will also run Themekit. You must have Shopify Themekit installed locally and the project connected in order for this to work.

* If svgs are dropped into src/svg/icons sass and svg sprite will run.
* If changes are made to any files in the src/scss** folder then the **gulp sass** task will run which generates the css file, combines the media queries, and then converts it into a style.css.liquid file.
* If changes are made to any file inside the src/js/** folder, **gulp uglify** will run which lints all js files in that directory, concats and files that need it, and then minify all files.

## Stylesheets
In gulp-config is an array of stylesheets. Each item in the array should correlate with a .scss file in **src/scss**. So for example if there's a node in the stylesheets array called "index", you'll need a file at **src/scss/index.scss** in order for that to generate a css file.

If you need sub scss modules to be included in your stylesheet, simply create a folder that matches the name in the array and the watch task will watch those directories for changes. For instance if you had a _hero.scss snippet that you wanted to only call in the index.scss file, you could place the file in **src/scss/index/** and include the path in your **index.scss** sheet. After that if **npm run dev** is active any changes to index.scss and any of the files in the index folder will trigger a compilation.

## Javascript
In the gulp-config file there is a large js object. This object maintains a list of files to concat and then minify. The structure for this is a top level key denotes the name of the file that will be generated by the concat and minify tasks. The value for this top level key is another object which lists all the files that need to be concatenated into a single javascript file. Each node within this sub object must include the name of the file without the **.js** extension, and the directory where the file resides.

While running **npm run dev** eacch file listed in this object will be watched for changes and only concatenate the block that's been changed, and run then through jslint. Note that files inside the **src/js/plugins** folder will not go through the jslint task.


## SVG Icons
There's a task in gulp to create an SVG icon sprite, and to update the src/scss/globals/\_*spritename* .scss file with the appropriate classes to call the icon. If you would like to add new icons do the following:

* To create new sprites add the name of your sprite to the gulp-config array under "sprites".
* Upload your svg icon to **/src/svg/*spritename*/** With spritename matching the name you placed in the array in gulp-config.
* Run the command **gulp sprites** in your root directory.
* To add your icon to a html document use the classes ** icon icon--*filename* **
* If you'd like to change the css that is output into **\_icons.scss** you do so by going to **src/scss/globals/mixins/_svg-template.scss**. The file is built using mustache templating.
* If you'd like to add additional sprites you can add them to createSprites object towards the top of the gulp file. The names you enter must match with the folder you create inside the SVG directory.
* While **npm run dev** is going dropping new svgs into the folder will update the sprite.