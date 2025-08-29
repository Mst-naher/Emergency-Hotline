
## Answers : 
 
1. 
-  Brings an element into the DOM through its unique name by `ID`.
-  Brings an element into the DOM through by its `className` name .
- Selects the `CSS` selector and find-out first css element by this css selector.
- This brings an array of elements which is a `nodeList`.

2. At first, catch an element by its `ID` and bring it to the `DOM`.
After that, keep it in a new variable with let or const. And then add .innerText to it. 
` const newCart = document.createElement('div') `

3. When a user clicks a place or a button, then the `Event Bubbling ` starts and goes to find out the clicking source step by step. Like it will go first, it's parent ➡ parent ➡ child ➡child[0] etc. Finally, the Event Bubbling detects the clicked point

4. ` Event Delegation is the best event.` Because it does not use Lup to run the Function. It increases the efficiency of the code base and decreases the Browser's load.

 5. `preventDefault()` It stops the default function.
`stopPropagation()`  It stops the Event Bubbling.

