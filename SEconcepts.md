## Software Engineering Concepts
<u>1. How does Dynamic Programming work?</u>
> Dynamic programming, like the divide-and-conquer method, solves problems by combining the solutions to subproblems. Divide-and-conquer algorithms partition the problem into independent subproblems, solve the subproblems recursively, and then combine their solutions to solve the original problem. In contrast, dynamic programming is applicable when the subproblems are not independent, that is, when subproblems share subsubproblems. In this context, a divide-and-conquer algorithm does more work than necessary, repeatedly solving the common subsubproblems. A dynamic-programming algorithm solves every subsubproblem just once and then saves its answer in a table, thereby avoiding the work of recomputing the answer every time the subsubproblem is encountered. Dynamic programming is typically applied to optimization problems. In such problems there can be many possible solutions. Each solution has a value, and we wish to find a solution with the optimal (minimum or maximum) value. We call such a solution an optimal solution to the problem, as opposed to the optimal solution, since there may be several solutions that achieve the optimal value.
The development of a dynamic-programming algorithm can be broken into a sequence of four steps: 1. Characterize the structure of an optimal solution; 2. Recursively define the value of an optimal solution; 3. Compute the value of an optimal solution in a bottom-up fashion; 4. Construct an optimal solution from computed information.

*Introduction to Algorithms; Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein (2002)*

<u>2. How does Greedy Method work?</u>
> For many optimization problems, using dynamic programming to determine the best choices is overkill; simpler, more efficient algorithms will do. A greedy algorithm always makes the choice that looks best at the moment. That is, it makes a locally optimal choice in the hope that this choice will lead to a globally optimal solution. [...] Greedy algorithms do not always yield optimal solutions, but for many problems they do. 

*Introduction to Algorithms; Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein (2002)*

<u>3. What are the differences between Dynamic Programming and Greedy Algorithms?</u>
> The greedy approach and dynamic prograaming are two ways to solve optimization problems. Often a problem can be solved using either approach. Often, when the greedy approach solves a problem, the result is a simpler, more efficient algorithm. On the other hand, it is usually more difficult to determine whether a greedy algorithm always produces an optimal solution. 

*Foundations of Algorithms Using C++ Pseudocode; Richard Neapolitan, Kurmass Naiminpour (2008)*

> In Greedy Method, a set of feasible solutions and the picks up the optimum solution. In Dynamic Programming, there is no special set of feasible solutions. In Greedy Method the optimum selection is without revising previously generated solutions. Dynamic Programming considers all possible sequences in order to obtain the optimum solition. In Greedy Method there is no guarantee of getting the optimum solution. In Dynamic Programming a optimal solution will be generated using principle of optimality.  

*Advanced Data Structures and Algorithms; A.A. Puntambekar (2007)*

<u>4. What is the Newspaper Metaphor?</u>
> We would like a source file to be like a newspaper article. The name should be simple but explanatory. The name, by itself, should be sufficient to tell us whether we are in the right module or not. The topmost parts of the source file should provide the high-level concepts and algorithms. Detail should increase as we move downward, until at the end we find the lowest level functions and details in the source file. A newspaper is composed of many articles; most are very small. Some are a bit larger. Very few contain as much text as a page can hold. This makes the newspaper usable. If the newspaper were just one long story containing a disorganized agglomeration of facts, dates, and names, the we would simply not read it.

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>5. What is the differance between objects and data structures?</u>
> Objects hide their data behind abstractions and expose functions that operate on that data. Data structure expose their data and have no meaningful functions. [...] Procedural code (code using data structures) makes it easy to add new functions without changing the existing data structures. OO code, on the other hand, makes it easy to add new classes without changing existing functions. The complement is also true: Procedural code makes it hard to add new data structures because all functions must change. OO code makes it hard to add new functions because all classes must change. 

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>6. What are Data Transfer Objects?</u>
> The quintessential formm of a data structure is a class with public variables and no functions. This is sometimes called a data transfer object, or DTO. DTOs are very useful structures, especially when communicating with databases or parsing messages from sockets, and so on. They often become the first in the series of translation stages that convert raw data in a database into object in the application code.  

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>7. What are Active Records?</u>
> Active Records are special forms of DTOs. They are data structures with public (or bean-accessed) variables; but they tipically have navigational methods like save and find. Typically these Active Records are direct translations from database tables, or other data structures. Unfortunately we often find that developers try to treat these data structures as though they were objects by putting business rule methods in them. This is awkward because it creates a hybrid between a data structure and an object. The solution, of course, is to treat the Active Record as a data structure and to create separate objecta that contain the business rules and that hide their internal data (which are probably just instances of the Active Record).

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>8. What is the Law of Demeter?</u>
> There is a well-known heuristic called the Law of Demeter that says a module should not know about the innards of the objects it manipulates. [...] This means that an object should not expose its internal structure through accessors because to do so is to expose, rather than to hide, its internal structure. More precisely, the Law of Demter says that a method f of a class C should only call the methods of these: C; an object created by f; an object passed as an argument to f; an object held in an instance variable of C. The method should not invoke methods on objects that are returned by any of the allowed functions. 

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

### Others

<u>X. How does Google's PageRank Algorithm works?</u>


[Back to Home Page](https://bzamith.github.io/)
