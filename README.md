# cp

ideas/things to do

script loading async/defer - done
https://flaviocopes.com/javascript-async-defer/
https://flaviocopes.com/javascript-async-defer/#just-tell-me-the-best-way
requestAnimationFrame
It gives a more predictable way to hook into the browser render cycle.
RAF loop
let request

    const performAnimation = () => {
    request = requestAnimationFrame(performAnimation)
    //animate something
    }

    requestAnimationFrame(performAnimation)

    since its introduction was very CPU friendly, causing animations to stop if the current window or tab is not visible.
    ensures all the animation code runs before the rendering and painting events

eventloop - jake archibald

1. setTimeout loop is not render blocking
2. Render Cycle - requestAnimationFrame => Style calculation => Layout => paint
3. There can be 1000 of tasks(ex - setTimeout, event handler) being executed in between the render cycles, browser only triggers render cycle when it thinks, there is something to update on the display.
4. Tasks can appear anywhere and any no. of times in a frame ( 1 frame = 16ms)
5. getComputedStyle() - forces the browser to trigger render cycle
6. Promises use microtask, microtasks are stored at the bottom of the event loop's function stack
7. There are 3 types of queues in event loop
   a) Task - They are executed only one at a time, any additional items are just queued
   b) Animation Callbacks queue - They are executed until the whole queue is processed, except the new ones added during the processing of queue
   c) Microtasks Queue - The are executed until the whole queue is processed and also processes the new ones added
   during the processing of the queue ( effectively blocking the event loop, if we are running an infinite loop of microtasks)

xss, csrf, caching, - jake archibald

understand flexbox and css grid completely
Accessibility

look into data visualization with d3/recharts or just vanilla implementation
canvas vs svg
change tracking mobx michael westerate
CSS Grids
selector - div:nth-child(odd) - selects ever odd number element in the list of divs

1. display : grid; // when added to parent, makes the children follow grid layout
2. grid-template-columns: repeat(3, 1fr); // tells the grid to have 3 columns with equal width,
   // ex - grid-template-columns: 1fr 2fr 1fr; grid-template-columns: 70% 30%;
3. grid-auto-rows: minmax(100px, auto); // tells that each element will have a min height of 100px and 'auto' will expand the height based on the content
4. grid-gap: 1em; //sets row and column margin between the elements to 1em;
5. justify-items: stretch(default)/start/end/center; stretch - takes up the whole col width, start - places the item at the start of col, center - places in center, end - places at the end
6. align-items: stretch(default)/start/end/center - works same as justify-items, but on the y-axis
7. align-self, justify-self, applied on individual items of the grid and basically allows us to control align and justify and the item level
8. grid-column, grid-row, ex - grid-column: 1/3; grid-column: 3, makes the column take the space from col 1 to 3 and makes the col stay at column 3 respectively. grid-row does the same in the other direction

Tryout

infinite scroll component
virtualized list component
Create dropdown component
tooltip component
form validation
Accessibility
frontend-mentor practice
dns-prefetch
todo app with vanilla js and css
System design practice
react perf improvements
performance improvement/pwa/amp/seo/caching/sw
responsive design with basic constructs, without flexbox

css and js animations
create a calendar view
http://www.ardendertat.com/2012/01/09/programming-interview-questions/
