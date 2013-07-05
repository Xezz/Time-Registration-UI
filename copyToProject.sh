#! /bin/bash
# TODO: decide if it is not better to just ditch the whole folder
# copy the single javascript file
cp src/build/TR/production/all-classes.js /Users/bkoch/Development/java/Time-Registration/trex-webapp/src/main/webapp/static
# remove the resource folder 
rm -rf /Users/bkoch/Development/java/Time-Registration/trex-webapp/src/main/webapp/static/resources
# copy the resource folder
cp -r src/build/TR/production/resources /Users/bkoch/Development/java/Time-Registration/trex-webapp/src/main/webapp/static 
# Mac magic to tell me that we are done!
say "Cannot hear you through the sound of how awesome I am"
