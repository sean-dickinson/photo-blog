# Photo Blog

[Live Site](https://photos.seandickinson.dev)

This is a simple photo blog I made an a proof of concept technology experiment. The photos themselves are hosted in a public google photos album and the app itself is retreiving them url from a public google spreadsheet. Google photos is explicitly not made to be used for hosting, so the urls need to be updated every hour (which I do using Google Apps Script). This eliminates the need for a backend and simplifies the use of the Google Photos API.

The front end itself is built using Vue with a custom directive for lazy loading the images using the Intersection Observer API.

# Features to Add
- Consider moving to a real image hosting platform (see if I can stay in the free limit)
- Adding a detail view with routing to see a single image larger


