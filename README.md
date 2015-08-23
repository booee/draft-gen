# draft-gen
=========

Uses a lottery algorithm to determine a semi-random order, which is skewed to the benefit of last year's rankings (worse teams given priority). This order is then used for teams to select the next year's draft order.

Think of it like drawing names from a hat, and some names are in the hat multiple times. Once your name is drawn, you get choose the best position in the draft for you out of the remaining positions


## Usage

Customize the `teams.json` file to enter in your personal league information (last year's rankings). Order is not important as long as the `rank` field is correct

Running the code is as easy as  
```node index.js```  
or  
```npm run generate-draft```
