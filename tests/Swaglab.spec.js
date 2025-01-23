const { test, expect, chromium } = require('@playwright/test');
const {Loginpage} = require('../POM/Loginpage.js');
const {Productpage} = require('../POM/productpage.js')
const testData = require('../testData.json'); // Import test data