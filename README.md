# Crazy Dan's Furniture Emporium

Crazy Dan needs a good single page application to keep track of his furniture. While he's gotten quite good at html and css (in his opinion) he wants your team to build the site's javascript.

## Getting Started

Fork and clone the repo as normal and then take some time to get acquainted with the code that's already there. Be sure that you have `json-server` installed so you can make use of the `db.json` file.

When you're ready, run `json-server --watch db.json`. You'll have access to furniture resources at `http://localhost:3000/furniture`. Additionally, open up `index.html` with your favorite browser.

## Load Furniture

You may run into a certain complication with the javascript code since Crazy Dan doesn't exactly know what he's doing. Once you've debugged why, first fetch all the furniture from `json-server` and then load it up into the provided `ul` element. Here's an example of what Dan's looking for in each `li`:

```
<li data-id="1">Wooden Chair $19.95</li>
```

Hint: You can access an element's dataset (in the above example, `data-id="1"`) with this bit of javascript: `selectedElement.dataset.id`

## Fill Div On Click

When a piece of furniture (the `li`) is clicked on, add all of that furniture's details to the form in the `furniture-inspection` area. How you get the furniture's full details is up to you.

If furniture has been selected, change the styling of that furniture's `li` element so we know it's currently being edited (the styling and method for applying it is up to you). Later, once editing is complete, change the furniture's `li` element back again so we know it's not being edited anymore.

## Bonus

When the furniture gets fetched and every time that the furniture updates, order the list by price starting with the most expensive item and ending with the least expensive.
