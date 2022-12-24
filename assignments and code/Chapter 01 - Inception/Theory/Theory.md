##Chapter 01 - Inception

Theory -

● What is Emmet?
ans) Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time.
https://docs.emmet.io/cheat-sheet/

● Difference between a Library and Framework?
https://www.interviewbit.com/blog/framework-vs-library/

● What is CDN? Why do we use it?
ans) A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed.

● Why is React known as React?
ans) React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.

As pointed out by @gaearon in this talk the name React has an interpretation of chemical reactions, with the atomic logo, atoms participate in chemical reactions.

● What is crossorigin in script tag?
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://www.linkedin.com/posts/jatin-jindgar-6715641b8_softwareengineering-programming-api-activity-7012447340435288064-tbR3?utm_source=share&utm_medium=member_android

● What is diference between React and ReactDOM
ans) 
React and ReactDOM were only recently split into two different libraries. Prior to v0.14, all ReactDOM functionality was part of React. This may be a source of confusion, since any slightly dated documentation won't mention the React / ReactDOM distinction.

As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. [UPDATE: Upon further research, it's clear my ignorance of React Native is showing. Having the React package common to both web and mobile appears to be more of an aspiration than a reality right now. React Native is at present an entirely different package.]

See the blog post announcing the v0.14 release: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html

● What is difference between react.development.js and react.production.js files via CDN?
https://reactjs.org/docs/cdn-links.html#why-the-crossorigin-attribute

● What is async and defer? - see my Youtube video ;)


Coding -
● Set up all the tools in your laptop
○ VS Code
○ Chrome
○ Extensions of Chrome
● Create a new Git repo
● Build your first Hello World program using,
○ Using just HTML
○ Using JS to manipulate the DOM
○ Using React
■ use CDN Links
■ Create an Element
■ Create nested React Elements
■ Use root.render
● Push code to Github (Theory as well as code)
● Learn about Arrow Functions before the next class
References:
- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8