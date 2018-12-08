# Conway-JS

This is an implmentation of Conway's Game of Life using an object as the data structure instead of the 2-D array. 
The point of utilizing the object is that you are able to write only the live (or with some small changes only the dead) cells.

This allows for a scalable solution in terms of memory usage.

TODOS:
* Exit upon counter > 3
* Improve performance, ie - lookaheads so that we dont have to check every angle of every node
* Allow for std input
