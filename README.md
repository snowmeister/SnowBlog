[TOC]
# SnowBlog
Just a little personal project to investigate a "static-dynamic" site, powered by markdowm, with an [ExpressJS](https://expressjs.com) API and a [ReactJS](https://reactjs.org/) interaction layer/front-end and a [TailWind](https://tailwindcss.com/)  styled presentation layer.

## App Directory Structure

For now, this is an "all-in" repo, with the UI and the API in the same repo, albeit in sub-directories. I'm not intending this project to be monolithic, I'm more interested in creating something as absolutely simple as possible. With this in mind, the current structure is...

### /ui

This is the home for the UI and client-side code

#### .env

This is the environment file for the UI,  and consists of the following variables:
note the prefix of **REACT_APP** on the variable names, this is to avoid conflicts with the environment variables of the API.


```JavaScript
# https://discuss.daml.com/t/what-does-dangerously-disable-host-check-do/246
DANGEROUSLY_DISABLE_HOST_CHECK=true || false - Disable host check

# Site/App name, shown in the UI and the browser title
REACT_APP_NAME="Joe Bloggs' Blog"

# Environment, either "development" or "production" - Different build options are available depending on the environment
REACT_APP_ENV="development"

# Content copyright owner, shown in the footer
REACT_APP_SITE_CONTENT_OWNER="Joe Bloggs"

# Content sopyright owner email, shown in the footer
REACT_APP_SITE_CONTENT_EMAIL="joe.bloggs@example.com"

# Show the main layout header on the main UI?
REACT_APP_SHOW_HEADER=true || false

# Show the main layout footer on the main UI?
REACT_APP_SHOW_FOOTER=true || false

```
### /lib 

All service side modules that are not node modules will live here

### /routes

Express routes for the API.

### /tests

Shhh! We'll get to this later...

### /markdown

This is where we will store our markdown that will power the blog