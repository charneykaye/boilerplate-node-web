#!/bin/bash

#-- Get the absolute path to this script, and
#-- then derive the base path of the application
BASEPATH=`dirname $0`

#-- Bower Pakcages
bower install
bower update

#-- Install Node Packages
npm install

#-- Install Bower Packages
bower install