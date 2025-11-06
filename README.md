Beverage Haven — Node.js Web App

A simple Express and EJS-based web application for a fictional drink shop business, Beverage Haven.
It includes registration, product listings, a customer survey, and information about multiple shop locations.

Features

Home Page: Displays the shop name and available product categories.

About Page: Lists all shop locations with manager names and addresses.

Search Page: Lets users search products by category (basic demo functionality).

Register Page: Form to register new customers.

Survey Page: Customer feedback form collecting age, drink preferences, and student status.

CSS Styling: Consistent light blue/dark blue color theme using a central stylesheet

project/
│
├── public/
│   └── css/
│       └── style.css           # Main stylesheet
│
├── routes/
│   └── main.js                 # Defines all Express routes
│
├── views/
│   ├── about.ejs               # About page (shop list)
│   ├── index.ejs               # Home page
│   ├── register.ejs            # Registration form
│   ├── search.ejs              # Search form
│   ├── survey.ejs              # Customer survey form
│   └── surveyResult.ejs        # Displays submitted survey results
│
├── index.js                    # Main application entry point
├── package.json
└── package-lock.json

Tech Stack

Node.js — Backend runtime

Express.js — Web framework

EJS — Templating engine for dynamic pages

HTML5 / CSS3 — Frontend layout and styling



Author:

Alamagan Sharif Jumco
School Assignment
