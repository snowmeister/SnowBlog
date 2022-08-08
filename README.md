# SnowBlog
Just a little personal project to investigate a "static-dynamic" site, powered by markdowm, with express API and a JS front end.

## Folder structure

For now, this is an "all-in" repo, with the UI and the API in the same repo, albeit in sub-directories. I'm not intending this project to be monolithic, I'm more interested in creating something as absolutely simple as possible. With this in mind, the current structure is...

### /ui

This is the home for the UI and client-side code

### /lib 

All service side modules that are not node modules will live here

### /routes

Express routes for the API.

### /tests

Shhh! We'll get to this later...

### /markdown

This is where we will store our markdown that will power the blog