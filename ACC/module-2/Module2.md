# Node.js is an open-source framework under MIT license. It is Asynchrounus by default, cross-platform framework that runs on Windows, MAC or Linux. 

# when a webpage load then v8 engin convert all its element into document object model (DOM). When we try to track down element  by document query selector by js file then we just simply traget previous created dom to change things dynamically. 

# V8 engin was updated by Ryan Dahl. He just pull up the engin and connect it computer to get access memory and other things run it in the server. Thats why Node js is called javascript runtime.

# Nodejs non-blocking behaviour. We know that nodejs is a single threaded and it only work one at a time. So when client send a request then it pass the request to its particular workers, workers procees it send it back to node. Thats how node behave like a no blocking behaviour.

# But if any client send a CPU intesive request then workers cant handle the process, in that case Node server have to handle all the calculation and it reamain busy at that time on partiucular task. So in modern day there are multiple server to handle different type of  request to make it blazing fast.

# In a word if we want do I/O intesive work then node server is a good choice, but for CPU intensive work  node server is not a good option.

# In  javascript what we call window object, in nodejs we call it global object.

# Modules
1. Core modules
2. Local modules
3. Third party modules

# We send request from client and we rereceived response. This response is coming to pc as html and in mobile comes it as a data.