Setup
=====

This document contains step-by-step instructions for setting up this project.

## Dev environment

To set up the development environment for this project you need to do the following:

- Clone the project on your system
- Install Node.js and NPM
- Run ```npm install -g grunt-cli``` to install Grunt.js
- Run ```npm install -g bower``` to install Bower.js
- Run ```npm install``` and ```bower install``` to install the dependencies
- Now you should be able to run ```grunt serve``` to start up the local web server on port 9000

## PhoneGap

If you want to build the application using phonegap you also need to do the following:

- Run ```npm install -g phonegap```
- If you want to build for iOS you need to have a mac
- If you want to build for Android you need to install the Android SDK
- Run ```grunt build && phonegap run <platform>``` to build and run the app

We will set up a docker image that includes all of this when we have time.
