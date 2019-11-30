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

<u>5. What is the difference between objects and data structures?</u>
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

<u>11. What is the difference between Requirements and Specifications?</u>
> Requirements and Specifications are closely related concepts in defining your solution. Requirements are for the user, specifications are for the developer. Write your requirements in the user language. Write your specifications in the system language. Be sure that your specifications meet the requirements.

*"Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)*

<u>12. What is the WRSPM Model?</u>
> The purpose of the WRSPM model is to ensure that specifications meet the requirements. We have five different elements in this model. W is the world. These are all the world assumptions, these are things that we know are true [...], we are more specific about the world assumptions that have an impact on our system and on our problem domain. There are things that everyone takes for granted and they're one of the more difficult parts to capture. R then is the requirements. This is the user's language understanding of what the user wants from the solution. S is the specification. The specification lies in that interface area. It's the interface between how the system will meet those requirements. So it's still written in system language that is from a user or natural language perspective. [...] P then is the program, it is what the software developers will write, the program that will meet the specifications to provide the user goal for the requirements. The program has all the code, underlying frameworks, anything like that that we would use from a software perspective, which leaves M all the way on the side. The M is the machine. It's the hardware behind the system. So you have this world understanding, the requirements which sit within the environment that deal with the user requirements, the specification that defines how the two will meet, the program that meets that specification in order to meet the requirements, and the machine that it all runs on.

*"Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)*

<u> 13. What is Software Architecture?</u>
> Software architecture is the structure of the components of a program/system, their interrelationships, and principles and guidelines governing their design and evolution over time.

*Introduction to the Special Issue on Software Architecture; David Garlan and Dewayne Perry (1995)*

> The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them.

*Software Architecture in Practice; Len Bass, Paul Clements and Rick Kazman (2003)*

> Software architecture is the fundamental organization of a system, embodied in its components, their relationships to one another and the environment, and the principles governing its design and evolution.

*IEEE 1471*

> Software architecture is primarily concerned with partitioning large systems into smallers ones that can be created separately, that individually have business value, and that can be straightforwardly integrated with one another and with existing systems.

*SENG 5861: Introduction to Software Architecture; Michael Whalen (2019)*

<u> 14. How does the Pipe-and-Filter software architectural model work?</u>
> The pipe-and-filter architectural style is used in systems that involve a series of independent transformations on ordered data, usually taking place in a sequential fashion. The pipe-and-filter architectural style views a system as a series of data flows called pipes, and a series of transformations called filters. The system is viewed as a composition of filters, with data flowing between the filters. Systems that have a pipe-and-filter architecture lend themselves to batch processing. In addition, due to their data flow orientation, systems that have a pipe-and-filter architecture do not easily support user interaction.

*IEEE Computer Society Real-World Software Engineering Problems: A Self-Study Guide for Today's Software Professional; J. Fernando Naveda and Stephen B. Seidman (2007)*

<u> 15. How does the Blackboard software architectural model work?</u>
> A blackboard architecture is a form of global store architecture. Modules within a blackboard system communicate with each other through the manipulation of data elements stored on a central data store called blackboard. This manipulation is achieved through expert systems that are responsible for performing particular tasks. For example, and expert system responsible for vision may read images from the blackboard. When it has analyzed them, it writes the observed visual features to the blackboard. This design ensures that the other components are able to gather the information required by accessing it from the global data store without having to communicate directly with each other. 

*Software Architectures for Humanoid Robotics; Lorenzo Natale, Tamim Asfour, Fumio Kanehiro and Nikolaus Vahrenkamp (2018)*

<u> 16. How does the Layered software architectural model work?</u>
> While capturing a complex system's functionality, we typically divide the functionality into several layers of abstraction. Layering means grouping of functionality in an ordered fashion. In other words, layered architecture partitions the functionality into separate layers stacked vertically, each layer interacting with layers underneath. In most layered architectures you will find the following layers: Application layer, business layer, middleware layer and database layer. 

*Software Architecture: A Case Based Approach; Vasudeva Varma (2012)*

<u> 17. How does the Client-Server software architectural model work?</u>
> Client/server architecture is based on diving effort into a client application, which requests data or a service and a server application, which fulfills those requests. The client and the server can be on the same or different machines. 

*A Practical Guide to Enterprise Architecture; James McGovern, Scott W. Ambler, Michael E. Stevens, James Linn, Elias K. Jo, Vikas Sharan (2003)*

<u> 18. How does the Event-based software architectural model work?</u>
> An event-based architectural model uses a form of implicit invocation in which components interact thorugh event broadcasts that are processed as appropriate by other components, which either register an interest in a particular event or class of events, or listen in on all events and act on those which apply to the component. The main feature of this type of architecture is that, unlike the object-oriented model, componentes don't need to be aware of other components that will be affected by the events. This advantage over the object-oriented model is, however, also a disadvantage since a component can never really know which other components will react to an event, and in which way they will react. 

*Cryptographic Security Architecture: Design and Verification; Peter Gutmann (2003)*

<u>19. What is the difference between Subsystems and Modules?</u>
> A subsystem is an independent system which holds business value. A module is a component of a subsystem which cannot function as standalone systems.

*"Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)*

<u>20. What are the main Software Quality Attributes?</u>
> Performance, reliability, testability, security and usability.

*"Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)*

<u>21. What is Software Architecture Process?</u>
> Software architecture process concerns itself primarily with those three things. Estimation; estimating the work and total,
deciding how much it's going to take, how long it's going to take, who's going to do it. Focusing on quality; how do we ensure things like reliability and performance especially at this architectural level since those are primarily hardware and developer-focused concerns. And then partitioning; actually dividing the work into subsystems or modules that can then be passed off on to the design stage because then, design stage goes into the actual building of the individual modules. 

*"Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)*

### Others

<u>1. How does Google's PageRank Algorithm works?</u>
> PageRank is a predictor of how relevant a web page will be for any given search. It is similar to popularity, which could be said to be a predictor of how muach a person will be liked by any other given person. Every web page on the Internet is assigned a PageRank, which is a number from 0 to 10. The higher the PageRank, the more relevant Google considers the page to be, and the better its chance of showing up at the top of the search results. [...] PagenRank is based on how many other sites like you - that is, link to you. More important, if the sites that link to you are very popular - that is, well-linked - themselves, you get an even higher PageRank.

*Outsmarting Google; Evan Bailyn, Bradley Bailyn (2011)*

> Google's PageRank algorithm assigns your site a number from 0 to 10. Your site's assigned number is based on several important criteria, including inbound links to your site, how trustworthy the sites that link to you are deemed by Google, and so on. When other sites post links to your site they are, in effect, casting a vote for your site. Google tabulates those votes and cross-references them with the other criteria to come up with your rank. 

*Return on Engagement; Tim Frick (2010)*

[Back to Home Page](https://bzamith.github.io/)
