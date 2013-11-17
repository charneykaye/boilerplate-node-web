The Outright Mental Web Application
===================================

Federation
----------
[Federation Document on Google Drive](https://docs.google.com/document/d/1XsUguBMxcfvw79Pb978qjPgioRe_m9DcRn4UNMCTPNY/edit)

# Usage

## Starting app locally

    node app.js

*Now you can visit http://localhost:8080 to view the application*

## Deploy boilerplate to nodejitsu

    jitsu deploy

Node.js Web Service & HTML5 Frontend
------------------------------------
http://app.outrightmental.com/

## Codeship Continuous Integration
![Codefish Status](https://www.codeship.io/projects/4d142b50-3183-0131-d72e-0ab595d4f030/status)

## Nodejitsu
Based on Nodejitsu boilerplate for [Express.js](http://express.js.com).

Drywall
=============

A website and user system for Node.js. What you create with Drywall is more important than Drywall.

[See a bird's eye view.](http://jedireza.github.io/drywall/)

Technology
------------

| On The Server | On The Client  |
| ------------- | -------------- |
| Express       | Bootstrap 3    |
| Jade          | Backbone.js    |
| Passport      | jQuery         |
| Mongoose      | Underscore.js  |
| Async         | Font-Awesome   |
| EmailJS       | Moment.js      |

Live Demos
------------

| Platform                       | Username | Password |
| ------------------------------ | -------- | -------- |
| https://drywall.herokuapp.com/ | root     | h3r00t   |
| https://drywall.nodejitsu.com/ | root     | j1ts00t  |
| https://drywall.onmodulus.net/ | root     | m0dr00t  |

__Note:__ The live demos have been modified so you cannot change the root user, the root user's linked Administrator role or the root Admin Group. This was done in order to keep the app ready to test at all times.

Installation
------------

 1. Clone the repository (or download/unzip) into a directory.
 2. Run `$ npm install`
 3. Rename `/config.example.js` to `/config.js` and set mongodb and email credentials.
 4. Run app via `$ ./run.js` or `$ node run`

Setup
------------

You need a few records in the database to start using the user system.

Run these commands on mongo. __Obviously you should use your email address.__

```js
use drywall;
db.admingroups.insert({ _id: 'root', name: 'Root' });
db.admins.insert({ name: {first: 'Root', last: 'Admin', full: 'Root Admin'}, groups: ['root'] });
var rootAdmin = db.admins.findOne();
db.users.save({ username: 'root', isActive: 'yes', email: 'your@email.addy', roles: {admin: rootAdmin._id} });
var rootUser = db.users.findOne();
rootAdmin.user = { id: rootUser._id, name: rootUser.username };
db.admins.save(rootAdmin);
```

Now just use the reset password feature to set a password.

 - `http://localhost:3000/login/forgot/`
 - Submit your email address and wait a second.
 - Go check your email and get the reset link.
 - `http://localhost:3000/login/reset/:token/`
 - Set a new password.

Login. Customize. Enjoy.

Philosophy
------------

 - Create a website and user system.
 - Write code in a simple and consistant way.
 - No home-grown modules or libraries.
 - Only create minor utilities or plugins to avoid repetitiveness.
 - Find and use good tools.
 - Use tools in their native/default behavior.

Features
------------

 - Basic front end web pages.
 - Contact page has form to email.
 - Login system with forgot password and reset password.
 - Signup and Login with Facebook, Twitter and GitHub.
 - Optional email verification during signup flow.
 - User system with seperate account and admin roles.
 - Admin groups with shared permission settings.
 - Administrator level permissions that override group permissions.
 - Global admin quick search component.

# License

(The MIT License)

Copyright (c) 2013 Outright Mental Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

