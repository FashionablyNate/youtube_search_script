# Youtube Search Script

## Summary

This is a script written in Javascript and run from a web server that allows you to do advanced searches on youtube using the Google API. It was created to find English captioned videos of Bahasa Indonesian speech to train a speech model.

![](https://cdn.discordapp.com/attachments/733211933469310986/1026043580848021535/unknown.png)

## Instructions on Running this Script

1. Get yourself an API key by following the steps in the link below. You do not need OAuth 2.0 Authentication for this script to work.
https://developers.google.com/youtube/v3/docs#calling-the-api

2. Clone the repository, and paste your api key in `api.js`.

3. Run a web server from the directory of this repository. The easiest way is to use `python -m http.server` or `python3 -m http.server` assuming you have Python installed on your system.

4. Navigate to http://0.0.0.0:8000 and enter a search term into the first box. Then click load and then click execute. If any videos were found with english subtitles, they will appear on the page.

