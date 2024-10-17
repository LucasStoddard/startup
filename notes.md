# Notes
What I've learned is that github commands are *far* from intuitive, but not much in Computer Science is very intuitive.
The basic commands I need are
```
git fetch
git status
git pull
git commit "changes"
git push
```

Ok I'm still really confused about the differentiation between WebSocket data and Database data, and I think it may come from the fact that I am using both together, as the data users are putting into the calendar is database data, but the old events that were stored count as WebSocket data. It will take me a while to fully understand this but I am waiting to cross that bridge for now.


# MIDTERM 1 QUESTIONS
- In the following code, what does the link element do?
```
Linking an External CSS Stylesheet: This links a CSS file to the HTML document. For example, <link rel="stylesheet" href="styles.css"> allows styles defined in styles.css to be applied to the HTML.

Favicon Link: This specifies the favicon for the website. For example, <link rel="icon" href="favicon.ico" type="image/x-icon"> tells the browser to display favicon.ico in the tab.

Preconnect to an External Resource: This helps improve loading performance by establishing an early connection. For example, <link rel="preconnect" href="https://example.com"> prepares the browser to connect faster when requesting resources.

Prefetching a Resource: This informs the browser to fetch resources that might be needed soon. For example, <link rel="prefetch" href="next-page.html"> suggests loading next-page.html in advance.

Preloading a Resource: This allows the browser to load important resources early. For example, <link rel="preload" href="script.js" as="script"> tells the browser to load script.js as a script resource for faster execution.

Alternate Stylesheet: This specifies an alternative stylesheet that users can select. For example, <link rel="alternate stylesheet" href="dark-mode.css" title="Dark Mode"> provides a dark mode option for users.

Sitemap Link: This links to the website's sitemap. For example, <link rel="sitemap" type="application/xml" title="Sitemap" href="sitemap.xml"> tells search engines where to find the sitemap.

DNS Prefetching: This improves performance by resolving domain names ahead of time. For example, <link rel="dns-prefetch" href="//example.com"> allows the browser to resolve example.com early.

Manifest File for Progressive Web Apps: This links to a manifest file that provides metadata about a web app. For example, <link rel="manifest" href="manifest.json"> specifies the location of the app's manifest.

Stylesheet with Media Query: This links a stylesheet with specific media conditions. For example, <link rel="stylesheet" href="print.css" media="print"> applies print.css only when the document is printed.
```
- In the following code,  what does a div tag do?
```
Basic Container: This is a simple div used as a generic container. For example, <div>This is a container</div> groups content together without any specific meaning.

Styling a Section: This div can be styled with CSS. For example, <div class="header">Header Content</div> allows the header to be styled separately, using the class "header."

Grouping Related Content: This div groups related elements. For example, <div class="card"><h2>Title</h2><p>Description</p></div> encapsulates a title and description together, useful for card layouts.

Layout Division: This div can help create a layout. For example, <div class="sidebar">Sidebar Content</div> designates a sidebar area in a layout, which can be styled and positioned with CSS.

JavaScript Target: This div can serve as a target for JavaScript manipulation. For example, <div id="modal">Modal Content</div> can be shown or hidden with JavaScript for dynamic effects.

Flexbox Container: This div can act as a flex container. For example, <div class="flex-container"><div>Item 1</div><div>Item 2</div></div> can be styled with CSS to arrange child elements using Flexbox.

Grid Layout: This div can be used in a grid layout. For example, <div class="grid-container"><div>Grid Item 1</div><div>Grid Item 2</div></div> allows for a responsive grid structure using CSS Grid.

Form Section: This div can group form elements. For example, <div class="form-group"><label for="name">Name</label><input type="text" id="name"></div> organizes related form controls.

Modal Dialog: This div can serve as a modal dialog. For example, <div class="modal">Modal Content Here</div> can be styled to overlay content on the screen for user interaction.

Footer Section: This div can define a footer. For example, <div class="footer">Footer Content</div> can contain copyright information or links, styled separately from the main content.
```
- In the following code, what is the difference between the #title and .grid selector?
```
The #title and .grid selectors in HTML represent different types of CSS selectors with distinct purposes. The #title selector targets a specific element with the unique ID of "title," meaning it can only apply styles to one element in the document since IDs must be unique. In contrast, the .grid selector targets all elements with the class name "grid," allowing multiple elements to share the same styling, which promotes reusability and flexibility in design. This fundamental difference impacts how you structure your HTML and apply styles, with IDs typically used for singular, unique elements and classes used for groups of elements that require similar styling.
```
- In the following code, what is the difference between padding and margin?
```
Padding and margins are both essential concepts in CSS that control spacing around elements, but they serve different purposes and affect the layout in distinct ways. Padding is the space between an element's content and its border. It creates an inner cushion, providing breathing room inside the element itself. For example, adding padding to a button increases the space between the text and the button's edges, making the button appear larger and enhancing its clickability. Padding is part of the element's box model, meaning that when you increase padding, it increases the overall size of the element, affecting how it interacts with surrounding elements.

Margins, on the other hand, are the space outside an element's border, effectively controlling the distance between that element and others around it. Margins push elements away from each other, which can help in arranging layout without altering the element's internal spacing. Unlike padding, margins do not affect the size of the element itself; they only influence the distance to adjacent elements. Additionally, margins can collapse, meaning that when two vertical margins meet, the larger margin takes precedence rather than adding the two values together. This behavior can be useful for creating clean layouts but can also lead to unexpected results if not properly understood.
```
- Given this HTML and this CSS how will the images be displayed using flex?
```
Here are three examples of HTML and CSS using Flexbox, along with explanations of how the images will be displayed:

Example 1: Basic Flex Container HTML:
<div class="flex-container"> <img src="image1.jpg" alt="Image 1"> <img src="image2.jpg" alt="Image 2"> <img src="image3.jpg" alt="Image 3"> </div>
CSS: .flex-container { display: flex; }

Explanation: In this example, the images will be displayed in a single row because the flex container uses the default flex-direction of row. They will be evenly spaced, and their sizes will adjust based on their natural dimensions unless specified otherwise.

Example 2: Flex with Space Between HTML:
<div class="flex-container"> <img src="image1.jpg" alt="Image 1"> <img src="image2.jpg" alt="Image 2"> <img src="image3.jpg" alt="Image 3"> </div>
CSS: .flex-container { display: flex; justify-content: space-between; }

Explanation: Here, the images will be displayed in a row with equal space distributed between them. The first and last images will be aligned to the edges of the container, while the remaining space is evenly distributed, creating a balanced look.

Example 3: Flex with Wrap HTML:
<div class="flex-container"> <img src="image1.jpg" alt="Image 1"> <img src="image2.jpg" alt="Image 2"> <img src="image3.jpg" alt="Image 3"> <img src="image4.jpg" alt="Image 4"> </div>
CSS: .flex-container { display: flex; flex-wrap: wrap; }

Explanation: In this example, the images will be displayed in a row, but if the container is too narrow to fit all the images, they will wrap onto the next line. This allows for a more responsive layout, adapting to different screen sizes by re-arranging the images while maintaining their alignment.
```
- What does the following padding CSS do?
```
Padding in CSS is the space between an element's content and its border, creating an inner cushion that enhances the visual layout and improves readability. It allows you to control the distance around the content inside an element, making it more aesthetically pleasing and ensuring that text or images do not touch the edges of their container. Padding can be specified uniformly for all sides or individually for each side (top, right, bottom, left), and it plays a crucial role in the box model, influencing the overall size of the element.

For example, you can apply uniform padding to a button like this: padding: 10px;, which adds 10 pixels of padding on all sides. Alternatively, you can set different padding values for each side with shorthand: padding: 10px 15px 20px 5px; (top, right, bottom, left). This would give the top 10 pixels of padding, the right 15 pixels, the bottom 20 pixels, and the left 5 pixels. Another example is using percentage values, such as padding: 5%;, which adds padding relative to the width of the container, making it responsive. These variations in padding help create a comfortable spacing that improves user experience and enhances design consistency.
```
- What does the following code using arrow syntax function declaration do?
```
Arrow syntax function declaration, also known as arrow functions, is a concise way to write function expressions in JavaScript. Introduced in ES6, arrow functions provide a shorter syntax than traditional function expressions and do not have their own this context, which allows for cleaner and more predictable handling of this when used in methods or callbacks. The basic syntax is const functionName = (parameters) => { // function body }, where parentheses can be omitted for a single parameter and curly braces can be skipped for single-expression functions that return a value implicitly.

For example, you can define a simple arrow function like this: const add = (a, b) => a + b;. This function takes two parameters and returns their sum without needing the return keyword or curly braces. Another example is an arrow function with a single parameter: const square = x => x * x;, where the parentheses around x are omitted. If you need to define a function with no parameters, you can use: const greet = () => "Hello!";, demonstrating that you can use empty parentheses. Arrow functions can also be used for array methods like map: const doubled = numbers.map(num => num * 2);, which applies the arrow function to each element of the numbers array, returning a new array of doubled values. These examples illustrate how arrow functions enhance readability and maintain the context of this in various scenarios.

Normal
function calculateTotalPrice(items, taxRate) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    total += total * taxRate;
    return total;
}

Arrow
const calculateTotalPrice = (items, taxRate) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    total += total * taxRate;
    return total;
};

Array static object functions
push	Add an item to the end of the array	            a.push(4)
pop	    Remove an item from the end of the array	    x = a.pop()
slice	Return a sub-array	                            a.slice(1,-1)
sort	Run a function to sort an array in place	    a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a tst function	a.find(i => i < 2)
forEach	Run a function on each array item	            a.forEach(console.log)
reduce	Reduce each array item to a single item	        a.reduce((a, c) => a + c)
map	    Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	                a.filter(i => i%2)
every	Run a function to test if all items match	    a.every(i => i < 3)
some	Run a function to test if any items match	    a.some(i => i < 1)

function testAll(input, tester) {
  return input.every(tester);
}
const result = testAll(["abc", "bbbbb"], (i) => i.length > 3);
console.log(result);
```
- What does the following code using map with an array output?
```
Example 1: Doubling Numbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

Output: [2, 4, 6, 8, 10]

Explanation: In this example, the map method is used to create a new array by doubling each element in the numbers array. The callback function takes each number (num) and multiplies it by 2, resulting in a new array of doubled values.

Example 2: Extracting Object Properties
const users = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 35 }
];
const names = users.map(user => user.name);
console.log(names);

Output: ['Alice', 'Bob', 'Charlie']

Explanation: Here, the map method is applied to an array of user objects. The callback function extracts the name property from each user object, creating a new array that contains just the names of the users. The resulting array consists of the names without the age information.

Example 3: Converting Strings to Uppercase
const words = ['hello', 'world', 'javascript'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords);

Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

Explanation: In this example, the map method is used to convert each string in the words array to uppercase. The callback function calls toUpperCase() on each word, resulting in a new array where all the strings are capitalized. This demonstrates how map can be used to transform elements of an array into a different format.
```
- What does the following code output using getElementByID and addEventListener?
```
Here are five examples of JavaScript code using `getElementById` and `addEventListener`, along with explanations of their outputs:

### Example 1: Changing Text on Button Click
document.getElementById('myButton').addEventListener('click', function() {  
    document.getElementById('myText').innerText = 'Button Clicked!';  
});  

**Output:** When the button with ID `myButton` is clicked, the text of the element with ID `myText` changes to "Button Clicked!" 

**Explanation:** This code sets up an event listener on a button. When the button is clicked, it updates the inner text of a specified element. The result is a change in the displayed text, indicating the button was successfully clicked.

### Example 2: Changing Background Color
document.getElementById('colorButton').addEventListener('click', function() {  
    document.body.style.backgroundColor = 'lightblue';  
});  

**Output:** When the button with ID `colorButton` is clicked, the background color of the web page changes to light blue.

**Explanation:** This example attaches a click event to a button that changes the entire page's background color. The effect is immediate, giving visual feedback that the button was pressed.

### Example 3: Displaying an Alert
document.getElementById('alertButton').addEventListener('click', function() {  
    alert('Alert Button Pressed!');  
});  

**Output:** When the button with ID `alertButton` is clicked, a browser alert pops up with the message "Alert Button Pressed!".

**Explanation:** This code demonstrates how to create a simple alert dialog. When the button is clicked, it triggers the alert function, providing a modal message to the user.

### Example 4: Toggling Visibility
document.getElementById('toggleButton').addEventListener('click', function() {  
    const myDiv = document.getElementById('myDiv');  
    myDiv.style.display = myDiv.style.display === 'none' ? 'block' : 'none';  
});  

**Output:** When the button with ID `toggleButton` is clicked, it toggles the visibility of the element with ID `myDiv`. If `myDiv` is visible, it hides it; if hidden, it shows it.

**Explanation:** This example uses a conditional statement to change the display style of an element. Clicking the button alternates the visibility of `myDiv`, demonstrating a simple show/hide interaction.

### Example 5: Counting Clicks
let count = 0;  
document.getElementById('countButton').addEventListener('click', function() {  
    count++;  
    document.getElementById('countDisplay').innerText = `Count: ${count}`;  
});  

**Output:** Each time the button with ID `countButton` is clicked, the displayed count in the element with ID `countDisplay` increments by 1.

**Explanation:** This code tracks the number of times the button is clicked. The count variable is incremented with each click, and the new count is displayed dynamically, allowing users to see the count change in real-time.
```
- What does the following line of Javascript do using a # selector?
```
Example 1: Changing Text Content
document.querySelector('#myElement').textContent = 'New Text';

Explanation: This line selects the element with the ID myElement and changes its text content to "New Text". The existing text inside the element is replaced.

Example 2: Changing Style
document.querySelector('#myElement').style.backgroundColor = 'blue';

Explanation: This code selects the element with the ID myElement and changes its background color to blue. This affects the visual appearance of the element on the webpage.

Example 3: Adding a Class
document.querySelector('#myElement').classList.add('active');

Explanation: This line selects the element with the ID myElement and adds the class active to it. This can be used to apply specific CSS styles associated with the active class.

Example 4: Hiding an Element
document.querySelector('#myElement').style.display = 'none';

Explanation: This code selects the element with the ID myElement and sets its display style to none, effectively hiding the element from the webpage.

Example 5: Setting an Attribute
document.querySelector('#myElement').setAttribute('data-info', 'Some info');

Explanation: This line selects the element with the ID myElement and sets a custom attribute data-info with the value "Some info". This can be useful for storing additional information in the HTML element.
```
- Which of the following are true? (mark all that are true about the DOM)
```
Here are ten examples of statements about the DOM, along with indications of which are true:

### Example 1
- The DOM represents the structure of a web page. (True)
- The DOM is a programming language. (False)
- The DOM allows scripts to update the content and structure of a web page. (True)

### Example 2
- The DOM can be manipulated using JavaScript. (True)
- The DOM is only accessible from the server side. (False)
- Elements in the DOM can be added, removed, or modified. (True)

### Example 3
- The DOM provides a tree-like structure of elements. (True)
- The DOM can be accessed using CSS. (False)
- Events can be handled using the DOM. (True)

### Example 4
- The DOM is specific to HTML and XML documents. (True)
- The DOM is a static structure. (False)
- The DOM allows for dynamic changes to the web page. (True)

### Example 5
- The DOM can be used to retrieve and manipulate data in a database. (False)
- The DOM represents elements as objects. (True)
- The DOM can be interacted with using the document object. (True)

### Example 6
- The DOM allows for event delegation. (True)
- The DOM can only be manipulated when the page is fully loaded. (False)
- The DOM is case-sensitive when accessing element IDs. (True)

### Example 7
- The DOM is an interface that browsers use to interact with web pages. (True)
- The DOM can only be modified with jQuery. (False)
- The DOM structure reflects the order of elements in the HTML document. (True)

### Example 8
- The DOM can include comments and text nodes. (True)
- The DOM allows for querying elements with methods like getElementById. (True)
- The DOM requires a specific markup language to function. (False)

### Example 9
- The DOM can be used to create animations on a web page. (True)
- The DOM is automatically updated when CSS styles change. (False)
- The DOM provides methods for traversing the element tree. (True)

### Example 10
- The DOM is a representation of a document structure in memory. (True)
- The DOM does not allow for modification of styles. (False)
- The DOM can be serialized to XML or HTML format. (True)
```
- By default, the HTML span element has a default CSS display property value of: 
```
By default, the HTML <span> element has a default CSS display property value of inline. This means that it does not start on a new line and only takes up as much width as necessary for its content. Inline elements can be placed within block elements without disrupting the flow of the surrounding content.

Here are the 10 most important default values for five common HTML elements: `<div>`, `<span>`, `<p>`, `<h1>`, and `<ul>`.

### 1. `<div>`
1. display: block;
2. width: auto;
3. height: auto;
4. margin: 0;
5. padding: 0;
6. border: none;
7. background-color: transparent;
8. font-size: medium;
9. color: black;
10. text-align: left;

### 2. `<span>`
1. display: inline;
2. width: auto;
3. height: auto;
4. margin: 0;
5. padding: 0;
6. border: none;
7. background-color: transparent;
8. font-size: medium;
9. color: black;
10. text-align: inherit;

### 3. `<p>`
1. display: block;
2. width: auto;
3. height: auto;
4. margin: 1em 0;  /* Usually has top and bottom margin */
5. padding: 0;
6. border: none;
7. background-color: transparent;
8. font-size: medium;
9. color: black;
10. text-align: left;

### 4. `<h1>`
1. display: block;
2. width: auto;
3. height: auto;
4. margin: 0.67em 0;  /* Default margin is typically larger */
5. padding: 0;
6. border: none;
7. background-color: transparent;
8. font-size: 2em;  /* Default font size varies by browser */
9. color: black;
10. text-align: left;

### 5. `<ul>`
1. display: block;
2. width: auto;
3. height: auto;
4. margin: 1em 0;  /* Usually has top and bottom margin */
5. padding: 0 0 0 40px;  /* Default padding for bullet indent */
6. border: none;
7. background-color: transparent;
8. list-style-type: disc;  /* Default list style */
9. color: black;
10. text-align: left;

These default values can vary slightly between browsers, but these are typical defaults for these common HTML elements.
```
- How would you use CSS to change all the div elements to have a background color of red?
```
To change all <div> elements to have a background color of red using CSS, you can use the following code:

div {
    background-color: red;
}

You can include this CSS in a <style> block within the <head> of your HTML document or in an external stylesheet. Here’s how you might use it in a simple HTML document:

<!DOCTYPE html>
<html>
<head>
    <title>Change Div Background Color</title>
    <style>
        div {
            background-color: red;
        }
    </style>
</head>
<body>
    <div>This is a red background div.</div>
    <div>This is another red background div.</div>
</body>
</html>
```
- How would you display an image with a hyperlink in HTML?
```
<a href="https://www.example.com">
    <img src="image.jpg" alt="Description of Image">
</a>
in this example:
The <a> tag contains the href attribute, which specifies the URL you want to link to.
The <img> tag includes the src attribute, which points to the image file, and the alt attribute, which provides alternative text for the image.
```
- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
```
In the CSS box model, the ordering of the box layers starting from the inside and working outward is as follows:

Content: This is the innermost layer where text and images are displayed.
Padding: This layer surrounds the content and creates space between the content and the border. Padding is transparent and can be set to different values on each side (top, right, bottom, left).
Border: This layer surrounds the padding (if any) and content. The border can have various styles (solid, dashed, etc.) and widths.
Margin: This is the outermost layer that creates space between the element and surrounding elements. Margins are also transparent and can be adjusted on all sides.

So, the order from the inside out is: Content → Padding → Border → Margin.
```
- Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
```
Here are five different ways to set the text "trouble" to green in HTML while leaving the "double" text unaffected:

### Example HTML
<p>This is a <span class="highlight">trouble</span> text with double.</p>

### Method 1: Using a Class
**CSS:**
.highlight {
    color: green;
}

### Method 2: Using Inline Styles
**CSS (in the HTML):**
<p>This is a <span style="color: green;">trouble</span> text with double.</p>

### Method 3: Using a Different Class Name
**HTML:**
<p>This is a <span class="green-text">trouble</span> text with double.</p>
**CSS:**
.green-text {
    color: green;
}

### Method 4: Using ID Selector
**HTML:**
<p>This is a <span id="trouble">trouble</span> text with double.</p>
**CSS:**
#trouble {
    color: green;
}

### Method 5: Using Pseudo-Classes (if "trouble" is the first span in the paragraph)
**CSS:**
p span:first-child {
    color: green;
}

In this example, the CSS will change the color of the specified text "trouble" to green in each method, while leaving the "double" text unaffected.
```
- What will the following code output when executed using a for loop and console.log?
```
Sure! Here are five examples of code snippets that use a for loop with console.log, along with their expected outputs:

1. Example 1:
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   Output:
   0
   1
   2
   3
   4

2. Example 2:
   for (let i = 1; i <= 5; i++) {
       console.log(i * 2);
   }
   Output:
   2
   4
   6
   8
   10

3. Example 3:
   for (let i = 0; i < 3; i++) {
       console.log("Iteration " + i);
   }
   Output:
   Iteration 0
   Iteration 1
   Iteration 2

4. Example 4:
   for (let i = 0; i < 4; i++) {
       console.log(i ** 2);
   }
   Output:
   0
   1
   4
   9

5. Example 5:
   for (let i = 5; i > 0; i--) {
       console.log("Countdown: " + i);
   }
   Output:
   Countdown: 5
   Countdown: 4
   Countdown: 3
   Countdown: 2
   Countdown: 1
```
- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
```
You can use JavaScript to select an element by its ID and change its text color to green with the following code:

document.getElementById("byu").style.color = "green";

This line retrieves the element with the ID "byu" and sets its color style property to green. Make sure this code runs after the DOM has fully loaded, either by placing it at the end of the body or using an event listener for DOMContentLoaded.
```
- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
```
- Paragraph: `<p>`
- Ordered List: `<ol>`
- Unordered List: `<ul>`
- Second Level Heading: `<h2>`
- First Level Heading: `<h1>`
- Third Level Heading: `<h3>`
```
- How do you declare the document type to be html?
```
To declare the document type as HTML, you use the following declaration at the very beginning of your HTML document:

<!DOCTYPE html>
This tells the browser that the document is an HTML5 document. It should be the first line of your HTML file, before the <html> tag.
```
- What is valid javascript syntax for if, else, for, while, switch statements?
```
// If statement
if (condition) {
    // code to execute if condition is true
}

// Else statement
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

// For loop
for (let i = 0; i < 5; i++) {
    // code to execute in each iteration
}

// While loop
while (condition) {
    // code to execute as long as condition is true
}

// Switch statement
switch (expression) {
    case value1:
        // code to execute if expression matches value1
        break;
    case value2:
        // code to execute if expression matches value2
        break;
    default:
        // code to execute if no cases match
}
```
- What is the correct syntax for creating a javascript object?
```
const myObject = {
    property1: value1,
    property2: value2,
    method1: function() {
        // code for method
    },
    method2() {
        // alternative syntax for method
    }
};
```
- Is it possible to add new properties to javascript objects?
```
Yes, it is possible to add new properties to JavaScript objects. You can do this using dot notation or bracket notation. Here are examples of both:

Using dot notation: const myObject = {}; myObject.newProperty = "New Value";

Using bracket notation: const myObject = {}; myObject["newProperty"] = "New Value";

In both cases, newProperty is added to myObject. You can also add properties to existing objects in the same way.
```
- If you want to include JavaScript on an HTML page, which tag do you use?
```
To include JavaScript on an HTML page, you use the <script> tag. This tag can be placed in the <head> or <body> section of the HTML document. Here’s an example:

<script src="script.js"></script>
Alternatively, you can write JavaScript directly within the <script> tag:

<script> // Your JavaScript code here </script>
```
- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
```
<p id="animal">animal</p> <p id="fish">fish</p>
You could use the following JavaScript to set the text "animal" to "crow" while leaving the "fish" text unaffected:

document.getElementById("animal").textContent = "crow";

This code selects the paragraph with the ID "animal" and changes its text content to "crow." The paragraph with the ID "fish" remains unchanged.
```
- Which of the following correctly describes JSON?
```
1. **Question:** Which of the following correctly describes JSON?
   A) A programming language  
   B) A lightweight data interchange format  
   C) An image format  
   D) A database management system  
   **Correct Answer:** B) A lightweight data interchange format

2. **Question:** Which of the following correctly describes JSON?
   A) A format primarily used for XML documents  
   B) A binary file format  
   C) A text format that uses key-value pairs  
   D) A compiled programming language  
   **Correct Answer:** C) A text format that uses key-value pairs

3. **Question:** Which of the following correctly describes JSON?
   A) A markup language  
   B) A data format that can be easily read and written by humans  
   C) A spreadsheet format  
   D) A server-side scripting language  
   **Correct Answer:** B) A data format that can be easily read and written by humans

4. **Question:** Which of the following correctly describes JSON?
   A) A format used only in Java applications  
   B) A way to style HTML documents  
   C) A method for data encryption  
   D) A language-independent format for data exchange  
   **Correct Answer:** D) A language-independent format for data exchange

5. **Question:** Which of the following correctly describes JSON?
   A) A type of SQL database  
   B) A way to format JavaScript code  
   C) A lightweight format for data storage and transmission  
   D) A type of web server  
   **Correct Answer:** C) A lightweight format for data storage and transmission
```
- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
```
chmod: Changes the file permissions for a specified file or directory. For example, chmod 755 file.txt sets read and execute permissions for everyone and write permission for the owner.

pwd: Prints the current working directory to the console, showing the full path of the directory you are currently in.

cd: Changes the current directory to another directory. For example, cd /home/user/Documents navigates to the Documents folder.

ls: Lists the contents of the current directory. Options like ls -l provide detailed information about files and directories.

vim: Opens the Vim text editor for editing files. For example, vim file.txt opens the file for editing.

nano: Opens the Nano text editor, which is simpler than Vim, for editing files. For example, nano file.txt allows you to edit the file with easy commands.

mkdir: Creates a new directory. For example, mkdir new_folder creates a folder named "new_folder" in the current directory.

mv: Moves or renames files or directories. For example, mv oldname.txt newname.txt renames a file, while mv file.txt /path/to/destination moves the file to a different directory.

rm: Removes files or directories. For example, rm file.txt deletes the specified file. Use rm -r to remove directories and their contents recursively.

man: Displays the manual pages for other commands, providing detailed information on how to use them. For example, man ls shows the manual for the ls command.

ssh: Initiates a secure shell connection to a remote server. For example, ssh user@hostname connects to the server at the specified hostname as the specified user.

ps: Displays a snapshot of current processes running on the system. For example, ps aux shows detailed information about all running processes.

wget: Downloads files from the web. For example, wget http://example.com/file.zip downloads the specified file from the given URL.

sudo: Executes a command with superuser (administrative) privileges. For example, sudo apt update runs the command to update package lists with elevated permissions.
```
- Which of the following console command creates a remote shell session?
```
A) cd
B) ssh
C) mv
D) ls

Correct Answer: B) ssh
```
- Which of the following is true when the -la parameter is specified for the ls console command?
```
A) It lists only hidden files.
B) It lists files in a long format, including hidden files.
C) It sorts files by size.
D) It shows the current directory only.

Correct Answer: B) It lists files in a long format, including hidden files.
```
- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
```
Top Level Domain (TLD): click
Root Domain: bozo.click
Subdomain: banana.fruit.bozo.click (with "banana" and "fruit" being subdomains of "bozo.click")

Top Level Domain (TLD):
Definition: The last segment of a domain name, following the final dot. It indicates the highest level in the domain name hierarchy.
Example: In the domain name example.com, "com" is the TLD. Other examples include .org, .net, and .edu.

Root Domain:
Definition: The main domain name that includes the TLD but excludes any subdomains. It represents the base of the domain structure.
Example: In the domain name banana.fruit.bozo.click, the root domain is bozo.click.

Subdomains:
Definition: Domains that are part of a larger domain and are located to the left of the root domain. They can be used to organize different sections of a website.
Example: In the domain name banana.fruit.bozo.click, "banana" and "fruit" are subdomains of bozo.click. You could also have other subdomains like shop.bozo.click or blog.bozo.click.
```
- Is a web certificate is necessary to use HTTPS.
```
Yes, a web certificate is necessary to use HTTPS. Specifically, an SSL (Secure Sockets Layer) or TLS (Transport Layer Security) certificate is required to establish a secure, encrypted connection between a web server and a client (such as a web browser). This certificate verifies the identity of the website and ensures that data transmitted between the server and client is secure. Without a valid certificate, a website cannot implement HTTPS effectively.
```
- Can a DNS A record can point to an IP address or another A record.
```
A DNS A record can point to an IP address, but it cannot point to another A record. The A record is specifically used to map a domain name to an IPv4 address. If you want to alias one domain to another (e.g., pointing a domain to another domain), you would use a CNAME record instead.
```
- Port 443, 80, 22 is reserved for which protocol?
```
Port 443: HTTPS (HyperText Transfer Protocol Secure)
Port 80: HTTP (HyperText Transfer Protocol)
Port 22: SSH (Secure Shell)
```
- What will the following code using Promises output when executed?
```
1. Question:
   const promise = new Promise((resolve) => {
       setTimeout(() => resolve("Success"), 1000);
   });
   promise.then(result => console.log(result));

   Answer: "Success" (after 1 second)  
   Explanation: This code creates a Promise that resolves with the string "Success" after 1 second. The then method logs the result once the Promise is resolved.

2. Question:
   const promise = Promise.reject("Error occurred");
   promise.catch(error => console.log(error));

   Answer: "Error occurred"  
   Explanation: This code creates a Promise that is immediately rejected with the message "Error occurred." The catch method is used to handle the rejection and log the error message.

3. Question:
   const promise = new Promise((resolve) => {
       resolve("First");
   });
   promise.then(result => {
       console.log(result);
       return "Second";
   }).then(result => console.log(result));

   Answer:  
   First  
   Second  
   Explanation: This code resolves the Promise with the value "First." The first then logs this value and returns "Second," which is then passed to the next then, where it is logged.

4. Question:
   const promise1 = Promise.resolve(1);
   const promise2 = Promise.resolve(2);
   Promise.all([promise1, promise2]).then(results => {
       console.log(results);
   });

   Answer: [1, 2]  
   Explanation: This code uses Promise.all to wait for multiple Promises to resolve. Both promise1 and promise2 resolve immediately, and the then method logs the results as an array.

5. Question:
   const promise = new Promise((resolve) => {
       setTimeout(() => resolve("Done"), 500);
   });
   promise.then(result => console.log(result));
   console.log("Next");

   Answer:  
   Next  
   Done (after 0.5 seconds)  
   Explanation: This code creates a Promise that resolves with "Done" after 0.5 seconds. The console.log("Next") executes immediately, so "Next" is logged first, followed by "Done" once the Promise resolves.
```