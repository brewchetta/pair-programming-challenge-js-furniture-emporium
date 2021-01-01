# Crazy Dan's Furniture Emporium

Crazy Dan needs a good single page application to keep track of his furniture. While he's gotten quite good at html and css (in his opinion) he wants your team to build the site's javascript.

## Getting Started

Fork and clone the repo as normal and then take some time to get acquainted with the code that's already there. Be sure that you have `json-server` installed so you can make use of the `db.json` file.

When you're ready, run `json-server --watch db.json`. You'll have access to furniture resources at `http://localhost:3000/furniture`. Additionally, open up `index.html` with your favorite browser.

## Load Furniture

You may run into a certain complication with the code since Crazy Dan didn't load it up correctly in his html. Once you've debugged why, first fetch all the furniture from `json-server` and then load it up into the provided `ul` element. Here's an example of what Dan's looking for in each `li`:

```
<li data-id="1">Wooden Chair $19.95</li>
```

## Fill Form On Click

When a piece of furniture is clicked on, add all of that furniture's details to the form in the `furniture-inspection` area. How you get the furniture's full details is up to you.

If furniture has been selected, change the styling of that furniture's `li` element so we know it's currently being edited (the styling and method for applying it is up to you). Later, once editing is complete, change the furniture's `li` element back again so we know it's not being edited anymore.

## Editing the Furniture

When the form is submitted with a piece of furniture, send a patch request to the `json-server` and remove the selected `li` styling as mentioned above. If you've changed that furniture's name and/or price, make sure they change in the `li` element as well.

## Bonus

When the furniture gets fetched and every time that the furniture updates, order the list by price starting with the most expensive item and ending with the least expensive.
