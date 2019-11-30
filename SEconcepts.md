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

<u>9. What is the waterfall method?</u>
> [...] waterfall method, where you go from phase to phase to phase. Requirements, design, implementation. As industries started to use this method, they ran into several issues. For example, they found that it's very difficult to predict the requirements one year or two a year ahead, as the market changes, or sometimes it's just really difficult to predict what a user will like or not like. And, since the cycle is a year or two year, it is possible that the developers or the architects misinterpreted the requirements. And so, that misinterpretation will go undetected all the way to design, implementation, and the verification. And similarly, the integration issues between the different components, go undetected for a year while the software is being developed.

*"Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)*

<u>10. What is DevOps?</u>
> DevOps is a set of practices intended to reduce time bewteen committing a change to a system and the change being replaced into normal production, while ensuring high quality. [...] We have identified five different categories of DevOps practices: 1. Treat Ops as first-class citizens from the point of view of requirements. For example, logging messages should be understandable and usable by an operator. 2. Make Dev more responsible for relevant incident handling. Theses practices are inteded to shorten the time between the observation of an error and the repair of that error. 3. Enforce the deployment process used by all, including Dev and Ops personnel. This avoid errors caused by ad hoc deployments and the resulting misconfiguration. 4. Use continuous deployment. Practices associated with continuous deployment are intended to shorten the time between a developer committing code to a repository and the code being deployed. Continous deployment also emphasizes automated tests to increase the quality of code making its way into production. 5. Develop infrastructure code, such as deployment scripts, with the same set of practices as application code. Applying quality control practices used in normal software development when developing operations scripts and processes will help control the quality of theses specifications.

*DevOps: A Software Architect's Perspective; Len Bass, Ingo Weber and Liming Zhu (2015)*

>[...] back in the dawn of the computer age, there was no distinction between dev and ops. If you developed, you operated. You monted the tapes, you flipped the switches on the fornt panel, you rebooted when things crashed, and possibly even replaced the burned out vacuum tubes. [...] Deve and ops started to separate in the '60s. [...] As companies and computing facilities grew larger, the fire-fighting mentality of many system administrators didn't scale. The response of the operations community to the problem of scale isn't surprising. If you're going to do operations reliably, you need to make it reproducible and programmatic. Hence virtual machines to shield software from configuration issues. Hence Puppet and Chef to automate configuration, so you know every machine has an identical software configuration and is running the right services. Hence Vagrant to ensure that all your virtual machines are constructed identically from the start. Hence automated monitoring tools to ensure that your clusters are running properly. It doesn't matter whether the nodes are in your own data center, in a hosting facility, or in a public cloud. If you're not writing software to manage them, you're not surviving.

*What is DevOps?; Mike Loukides (2012)*

### Others

<u>1. How does Google's PageRank Algorithm works?</u>
> PageRank is a predictor of how relevant a web page will be for any given search. It is similar to popularity, which could be said to be a predictor of how muach a person will be liked by any other given person. Every web page on the Internet is assigned a PageRank, which is a number from 0 to 10. The higher the PageRank, the more relevant Google considers the page to be, and the better its chance of showing up at the top of the search results. [...] PagenRank is based on how many other sites like you - that is, link to you. More important, if the sites that link to you are very popular - that is, well-linked - themselves, you get an even higher PageRank.

*Outsmarting Google; Evan Bailyn, Bradley Bailyn (2011)*

> Google's PageRank algorithm assigns your site a number from 0 to 10. Your site's assigned number is based on several important criteria, including inbound links to your site, how trustworthy the sites that link to you are deemed by Google, and so on. When other sites post links to your site they are, in effect, casting a vote for your site. Google tabulates those votes and cross-references them with the other criteria to come up with your rank. 

*Return on Engagement; Tim Frick (2010)*

[Back to Home Page](https://bzamith.github.io/)
