'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost/drywall'
};
exports.companyName = 'Outright Mental Inc.';
exports.projectName = 'Outright Mental Web Application';
exports.systemEmail = 'hello@outrightmental.com';
exports.cryptoKey = 'pNGQ8ypFL98agjYdtRD7ABRFQyRhn3NAHv5rSyGMzNuE3wNk2TMChnWWM3cH5sj3';
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName,
    address: process.env.SMTP_FROM_ADDRESS || 'do-not-reply@outrightmental.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'do-not-reply@outrightmental.com',
    password: process.env.SMTP_PASSWORD || 'Hv5rSyGMzNuE3wNk',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  }
};
