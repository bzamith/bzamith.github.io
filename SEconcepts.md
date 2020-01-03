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

<u>9. What is DevOps?</u>
> DevOps is a set of practices intended to reduce time bewteen committing a change to a system and the change being replaced into normal production, while ensuring high quality. [...] We have identified five different categories of DevOps practices: 1. Treat Ops as first-class citizens from the point of view of requirements. For example, logging messages should be understandable and usable by an operator. 2. Make Dev more responsible for relevant incident handling. Theses practices are inteded to shorten the time between the observation of an error and the repair of that error. 3. Enforce the deployment process used by all, including Dev and Ops personnel. This avoid errors caused by ad hoc deployments and the resulting misconfiguration. 4. Use continuous deployment. Practices associated with continuous deployment are intended to shorten the time between a developer committing code to a repository and the code being deployed. Continous deployment also emphasizes automated tests to increase the quality of code making its way into production. 5. Develop infrastructure code, such as deployment scripts, with the same set of practices as application code. Applying quality control practices used in normal software development when developing operations scripts and processes will help control the quality of theses specifications.

*DevOps: A Software Architect's Perspective; Len Bass, Ingo Weber and Liming Zhu (2015)*

>[...] back in the dawn of the computer age, there was no distinction between dev and ops. If you developed, you operated. You monted the tapes, you flipped the switches on the fornt panel, you rebooted when things crashed, and possibly even replaced the burned out vacuum tubes. [...] Deve and ops started to separate in the '60s. [...] As companies and computing facilities grew larger, the fire-fighting mentality of many system administrators didn't scale. The response of the operations community to the problem of scale isn't surprising. If you're going to do operations reliably, you need to make it reproducible and programmatic. Hence virtual machines to shield software from configuration issues. Hence Puppet and Chef to automate configuration, so you know every machine has an identical software configuration and is running the right services. Hence Vagrant to ensure that all your virtual machines are constructed identically from the start. Hence automated monitoring tools to ensure that your clusters are running properly. It doesn't matter whether the nodes are in your own data center, in a hosting facility, or in a public cloud. If you're not writing software to manage them, you're not surviving.

*What is DevOps?; Mike Loukides (2012)*

<u>10. What is the difference between Requirements and Specifications?</u>
> Requirements and Specifications are closely related concepts in defining your solution. Requirements are for the user, specifications are for the developer. Write your requirements in the user language. Write your specifications in the system language. Be sure that your specifications meet the requirements.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>11. What is the WRSPM Model?</u>
> The purpose of the WRSPM model is to ensure that specifications meet the requirements. We have five different elements in this model. W is the world. These are all the world assumptions, these are things that we know are true [...], we are more specific about the world assumptions that have an impact on our system and on our problem domain. There are things that everyone takes for granted and they're one of the more difficult parts to capture. R then is the requirements. This is the user's language understanding of what the user wants from the solution. S is the specification. The specification lies in that interface area. It's the interface between how the system will meet those requirements. So it's still written in system language that is from a user or natural language perspective. [...] P then is the program, it is what the software developers will write, the program that will meet the specifications to provide the user goal for the requirements. The program has all the code, underlying frameworks, anything like that that we would use from a software perspective, which leaves M all the way on the side. The M is the machine. It's the hardware behind the system. So you have this world understanding, the requirements which sit within the environment that deal with the user requirements, the specification that defines how the two will meet, the program that meets that specification in order to meet the requirements, and the machine that it all runs on.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u> 12. What is Software Architecture?</u>
> Software architecture is the structure of the components of a program/system, their interrelationships, and principles and guidelines governing their design and evolution over time.

*Introduction to the Special Issue on Software Architecture; David Garlan and Dewayne Perry (1995)*

> The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them.

*Software Architecture in Practice; Len Bass, Paul Clements and Rick Kazman (2003)*

> Software architecture is the fundamental organization of a system, embodied in its components, their relationships to one another and the environment, and the principles governing its design and evolution.

*IEEE 1471*

> Software architecture is primarily concerned with partitioning large systems into smallers ones that can be created separately, that individually have business value, and that can be straightforwardly integrated with one another and with existing systems.

*SENG 5861: Introduction to Software Architecture; Michael Whalen (2019)*

<u> 13. How does the Pipe-and-Filter software architectural model work?</u>
> The pipe-and-filter architectural style is used in systems that involve a series of independent transformations on ordered data, usually taking place in a sequential fashion. The pipe-and-filter architectural style views a system as a series of data flows called pipes, and a series of transformations called filters. The system is viewed as a composition of filters, with data flowing between the filters. Systems that have a pipe-and-filter architecture lend themselves to batch processing. In addition, due to their data flow orientation, systems that have a pipe-and-filter architecture do not easily support user interaction.

*IEEE Computer Society Real-World Software Engineering Problems: A Self-Study Guide for Today's Software Professional; J. Fernando Naveda and Stephen B. Seidman (2007)*

<u> 14. How does the Blackboard software architectural model work?</u>
> A blackboard architecture is a form of global store architecture. Modules within a blackboard system communicate with each other through the manipulation of data elements stored on a central data store called blackboard. This manipulation is achieved through expert systems that are responsible for performing particular tasks. For example, and expert system responsible for vision may read images from the blackboard. When it has analyzed them, it writes the observed visual features to the blackboard. This design ensures that the other components are able to gather the information required by accessing it from the global data store without having to communicate directly with each other. 

*Software Architectures for Humanoid Robotics; Lorenzo Natale, Tamim Asfour, Fumio Kanehiro and Nikolaus Vahrenkamp (2018)*

<u> 15. How does the Layered software architectural model work?</u>
> While capturing a complex system's functionality, we typically divide the functionality into several layers of abstraction. Layering means grouping of functionality in an ordered fashion. In other words, layered architecture partitions the functionality into separate layers stacked vertically, each layer interacting with layers underneath. In most layered architectures you will find the following layers: Application layer, business layer, middleware layer and database layer. 

*Software Architecture: A Case Based Approach; Vasudeva Varma (2012)*

<u> 16. How does the Client-Server software architectural model work?</u>
> Client/server architecture is based on diving effort into a client application, which requests data or a service and a server application, which fulfills those requests. The client and the server can be on the same or different machines. 

*A Practical Guide to Enterprise Architecture; James McGovern, Scott W. Ambler, Michael E. Stevens, James Linn, Elias K. Jo, Vikas Sharan (2003)*

<u> 17. How does the Event-based software architectural model work?</u>
> An event-based architectural model uses a form of implicit invocation in which components interact thorugh event broadcasts that are processed as appropriate by other components, which either register an interest in a particular event or class of events, or listen in on all events and act on those which apply to the component. The main feature of this type of architecture is that, unlike the object-oriented model, componentes don't need to be aware of other components that will be affected by the events. This advantage over the object-oriented model is, however, also a disadvantage since a component can never really know which other components will react to an event, and in which way they will react. 

*Cryptographic Security Architecture: Design and Verification; Peter Gutmann (2003)*

<u>18. What is the difference between Subsystems and Modules?</u>
> A subsystem is an independent system which holds business value. A module is a component of a subsystem which cannot function as standalone systems.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>19. What are the main Software Quality Attributes?</u>
> Performance, reliability, testability, security and usability.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>20. What is Software Architecture Process?</u>
> Software architecture process concerns itself primarily with those three things. Estimation; estimating the work and total,
deciding how much it's going to take, how long it's going to take, who's going to do it. Focusing on quality; how do we ensure things like reliability and performance especially at this architectural level since those are primarily hardware and developer-focused concerns. And then partitioning; actually dividing the work into subsystems or modules that can then be passed off on to the design stage because then, design stage goes into the actual building of the individual modules. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>21. What is Software Design?</u>
> Software design is what we call the deliverable, design, the noun, and what we call the process to make that design. Design, the verb, is the creative process of transforming the problem into a solution. In our case, transforming a requirement specification into a detailed description of the software that's code-ready. The noun then is the documented description of that solution and the constraints and explanations used to arrive at it. We develop the software design. Software design takes abstract requirements and then you build the detail and until you are satisfied that you can hand it off and it will be developed properly. So, you are going to decide things like classes, methods, data types, that kind of thing but not the individual language-specific optimizations that will go into the eventual code. So, you are going to provide detail, which is implementation-ready but it does not include implementation detail. Software design is all about designing a solution, creating the deliverables and documentation necessary to allow the developing team to build something that meets the needs of the user or the client.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>22. What are the stages of Software Design?</u>
> The stages of Software Design are: 1. Problem understanding. 2. Identify one or more solutions. 3. Describe solution abstractions. 4. Repeat the process for each identified abstraction until the design is expressed in primitive terms. When we say solution abstractions, we essentially mean any documentation of the solution that is not technological. Mostly, that means anything that's not code or hardware. Graphical including mock-ups or wireframes, formal descriptions including unified modeling language or UML diagrams like class diagrams and sequence diagrams, and other descriptive notations should be used to capture your description of the solution that you intend to build or have built for you.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>23. What are the aspects of modularity?</u>
> When we talk about modularity, we're primarily talking about these four things: Coupling, cohesion, information hiding and data encapsulation. Coupling and cohesion are measures of how well modules work together and how well each individual module meets a certain single well-defined task and they tend to go together. Information hiding describes our ability to abstract
away information and knowledge in a way that allows us to complete complex work in parallel without having to know all the implementation details concerning how the task will be completed eventually. And then data encapsulation refers to the idea that we can contain constructs and concepts within a module, allowing us to much more easily understand and manipulate the concept when we're looking at it in relative isolation. The principle of modularity is that complex systems must be broken down into smaller parts. There are three primary goals: Decomposability, "Composability" and ease of understanding.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>24. What is Coupling?</u>
> In software engineering, the coupling is the degree of interdependence between software modules. Two modules that are tightly coupled are strongly dependent on each other. However, two modules that are loosely coupled are not dependent on each other. Uncoupled modules have no interdependence at all within them.

*[Coupling and Cohesion; Java Point (2019)](https://www.javatpoint.com/software-engineering-coupling-and-cohesion)*

> Measuring the strength of connections between (sub-)system components. Loose coupling allow for changes to be unlikely to propagate across components. Shared variables and control information lead to tight coupling. Loose coupling is achieved by state decentralization and message passing. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>25. What are the types of Tight Coupling?</u>
> Content coupling, common coupling and external coupling. Both content and common coupling occur when two modules rely on the same underlying information. Content coupling happens when module a directly relies on the local data members of module b, rather than relying on some access or a method. While common coupling happens when module a and module b both rely on some global data, or global variable. External coupling is a reliance on an externally imposed format, protocol, or interface. In some cases, this can't be avoided. But it does represent tight coupling, which means that changes here could affect a large number of modules, which is probably not ideal. You might consider, for example, creating some abstraction to deal with the externally imposed format. Allowing the various modules to maintain their own format, and delegating the format to the external, into a single entity. Depending on whether or not the external format or the internal data will change more often. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>26. What are the types of Medium Coupling?</u>
> Control coupling and data-structure coupling. Control coupling happens when a module can control the logical flow of another by passing in information on what to do or the order in which to do it, a what to do flag. Changing the process may then necessitate changes to any module which control that part of the process. That's not necessarily good. Data-structure coupling occurs when two modules rely on the same composite data structure, especially if the parts the modules rely on are distinct. Changing the data structure could adversely affect the other module even when the parts of the data structure that were changed aren't necessarily those that were relied on by that other module. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>27. What are the types of Loose Coupling?</u>
> Data coupling, message coupling and no coupling. Data coupling is when only parameters are shared. These includes elementary pieces of data like when you pass an integer to a function to compute the square root. Message coupling is then the loosest type of coupling. It's primarily achieved through state decentralization and component communications, only accomplished either through parameters or message passing. Now of course, you can have no coupling. But this is usually the trivial case and isn't really of that much interest to us. In any sufficiently complex design, there's going to be multiple modules. And we care mostly about how tightly coupled are the modules that do communicate and not really about the modules that don't and shouldn't communicate anyway. But we really don't care about that. The ones that do communicate, those are the ones we're going to focus on. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>28. What is Cohesion?</u>
> In computer programming, cohesion defines to the degree to which the elements of a module belong together. Thus, cohesion measures the strength of relationships between pieces of functionality within a given module. For example, in highly cohesive systems, functionality is strongly related. Cohesion is an ordinal type of measurement and is generally described as "high cohesion" or "low cohesion."

*[Coupling and Cohesion; Java Point (2019)](https://www.javatpoint.com/software-engineering-coupling-and-cohesion)*

> Measures how well a module's components 'fit together'. Implements a single logical entity or function. Represents a desirable design attribute. Divides into various levels of strength.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

> Classes should have a small number of instance variables. Each of the methods of a class should manipulate one or more of those variables. In general the more variables a method manipulates the more cohesive that method is to its class. A class which each variable is used by each method is maximally cohesive. In general it is neither advisable nor possible to create such maximally cohesive classes; on the other hand, we would like cohesion to be high. When cohesion is high, it means that the methods and variables of the class are co-dependent and hang together as a logical whole. 
*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>29. What are the types of Weak Cohesion?</u>
> Coincidental cohesion, temporal cohesion, procedural cohesion and logical association. Coincidental cohesion is effectively the idea that parts of the module are together just because they are in the same file. Temporal cohesion means that the code is activated at the same time, but that's it. That's really the only connection. Procedural cohesion is similarly time based and not very strong cohesion. Just because one comes after the other doesn't really tie them together,
not necessarily. What if the process flow changes? Again, that's not good. They don't necessarily need to be cohesive in that way. Logical association then is the idea that components which perform similar functions are grouped. We're getting less weak, but it's still not good enough.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>30. What are the types of Medium Cohesion?</u>
> Communicational cohesion and sequential cohesion. Communicational cohesion means that all elements of the component operate on the same input or produce the same output. This is more than just doing a similar function. It's producing identical types of output or working from a singular input. And then sequential cohesion is the stronger form of procedural cohesion. Instead of merely following the other in time, sequential cohesion is achieved when one part of the component is the input to another part of the component. It's a direct handoff and a cohesive identity. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>31. What are the types of Strong Cohesion?</u>
> Object cohesion and functional cohesion. In object cohesion, we see that each operation in a module is provided to allow the object attributes to be modified or inspected. Every single operation in the module. Each part is specifically designed for purpose within the object itself, that's that object cohesion. And then functional cohesion goes above and beyond sequential cohesion to assure that every part of the component is necessary for a well-defined function or behavior. So it's not just input to output, it's everything together is functionally cohesive. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>32. What is software deployment?</u>
> Deployment is the end stage of active development for any piece of software. And, realistically, it's less of a stage.
It's more of a gate. It's an event in between the testing and maintenance stages after it's already in place, but that shouldn't minimize the importance of deployment, especially now, when you start seeing things like automated deployment become so important in our work. Deployment means production deployment, release to users. Occurs after testing/QA and others have signed off on release. Deployment plan concerns about physical environment, hardware, documentation, training, database-related activities, 3rd party software and the software being deployed. So software deployment is the event of lauching your product to users. It is primarily focused on how to deliver and how to revert on failure. Deployment without rollback plans shouldn't happen. Document your rollback plans for error-reduced action under fire.  

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>33. What is a rollback?</u>
> The reversal of actions, completed during a deployment, with the intent to revert a system back to its previous working state.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>34. What is software cutover?</u>
> Software cutover is a trade-off between cost and preparedness. Speed of recovery is directly proportional to cost of recovery. Hot failover allows you to redirect live data with minimal. Warm standby has services ready for initialization. Cold back-up is a replacement machine needing full setup.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>35. What is the Oracle?</u>
> Traditionally the Oracle has been the developer, or the tester, who's running the tests. The tester has the software running. They input the data. They watch what happens and they decide whether, or not the behavior match what they expected. Now, as you may or may not know, humans aren't particularly reliable. Can you tell the difference between the number one and a lowercase L in some fonts on the screen? So, what we're starting to see are things like Automated Oracles, which compare some known, or determined, or retrieved expected output to the actual output, the output that the software generated, the actual output of running the software under test given the test data, to gather the input and output we should see if the program is operating as we hope it will. The test data and the expected output make up test cases.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>36. What is the difference between Test Data and Test Cases?</u>
> Test Data are inputs which have been devised to test a system. Test Cases are inputs to the system and the predicted outputs from operating the system on these inputs, if the system performs to its specification.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>37. What is a bug? What are the differences between fault, error and failure?<u>
> So, what exactly is a bug? Well, a system failure occurs when the delivered service deviates from the specified service.
Okay. That means that something didn't happen the way it was supposed to. The specification is an agreed description of the expected service. The failure occurred because the system was erroneous. In error, is that part of the system state which is liable to lead to a failure. It's whatever is wrong that leads to delivery of a surface that doesn't comply with how it's specified to work. The cause and it's phenomenological sense is an error, is a fault. A fault is what actually happened. Upon occurrence, a fault, a mistake, creates a latent error. That latent error sits in the code and becomes effective when it's activated. That is when the code actually reaches that point and it becomes different. When the error then affects the delivered service. That is when the error actually causes a change in behavior that the user did not expect to see, that is a failure. So, the error is a manifestation of a fault. And a failure is the manifestation of an error on the servers. Let me give you an example. A maintenance, or operator's manual writers mistake is a fault. So, they put it in the manual improperly. The consequences an error in the corresponding manual erroneous directives on how to use the software, which will remain latent as long as the directors aren't acted on or, for example, when no one reads the manual. But when someone does read the manual and tries to use that manual to instruct how they run the code, and then the code doesn't work the way they think it should, that's still an error and therefore a failure. 
  
*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>38. What is the main axiom of Testing?</u>
> Program testing can be used to show the presence of bugs, but never their absence.

*A Discipline of Programming; E.W. Djikstra (1976)*

<u>39. What is Verification?</u>
> The process of evaluating software to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase.

*IEEE-STD-610*

> You verify a program by checking it against the most closely related design document(s) or specification(s). If there is an external specification, the function test verifies the program against it.

*Testing Computer Software; Cem Kaner, Jack Falk and Hung Q. Nguyen (1999)*

> An attempt to find errors by executing a program in a test or simulated environment.

*The Art of Software Testing; Glenford J. Myers (1979)*

> Confirm that the software performs and conforms to its specification. "Are we building the thing right?".

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>40. What is Validation?</u>
> The process of evaluating software during or at the end of the development process to determine whether it satisfies specified requirements.

*IEEE-STD-610*

> You validate a program by checking it against the published user or system requirements. System testing and integrity testing are validation tests.

*Testing Computer Software; Cem Kaner, Jack Falk and Hung Q. Nguyen (1999)*

> An attempt to find errors by executing a program in a real environment.*

*The Art of Software Testing; Glenford J. Myers (1979)*

> Confirm that the software performs to the user's satisfaction. Assure that the software system meets the user's needs (what they want and what they need). "Are we building the right thing?".

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>41. How does the Incremental Testing Strategy works?</u>
> In incremental testing, module integration is carried out in parallel with module testing. Futhermore, individual modules are not tested independently of all other modules. Rather, when testing a particular module we make use of already tested modules that may either invoke or be invoked by the module currently being tested. Using this approach, the problems related to some of the module interfaces that are detected earlier and so are easier to correct. Hence, theses modules get exercised more than they would otherwise. 

*Software Development in C; Sartaj Sahni, Robert F. Cmelik and Bob Cmelik (1995)*

<u>42. How does the Top-Down Testing Strategy works?</u>
> The top-down strategy starts with the top, or initial, module in the program. After this, there is no single "right" procedure for selecting the next module to be incrementally tested; the only rule is that to be eligible to be the next module, at least one of the module's subordinate (calling) modules must have been tested previously. The opposite approach is the Bottom-upp Testing.

*The Art of Software Testing; Glenford J. Myers (1979)*

<u>43. How does the Back to Back Testing Strategy works?</u>
> Back to back testing is one type of Software Testing, which is also known as Comparison Testing. It is a type of testing in which two or more variants of a component are always tested with similar input and their corresponding outputs are compared and examined, in case any discrepancies occur in the software in the future. Therefore, in back to back testing, a single test set is performed on two implemented versions of a software product and the results are compared. Whenever a mismatch occurs in the result, then one of the two versions of the components is probably evidencing failure. Moreover, back to back testing is a process in which the events associated to it are examined and defined properly. This testing always involves cross comparison of the entire responses that are always obtained from functionality equivalent software components. During this testing, whenever a difference is determined or observed by the team of testers it is measured and if necessary it is applied too.

*[Back to Back Testing; Professional QA (2018)](http://www.professionalqa.com/back-to-back-testing)*

<u>44. What is the goal of Test Scaffolding? How does it work?</u>
> The goal is to setup the environment for executing tests, with a Driver, a Stub, a Program Unit and an Oracle. The Driver initializes non-local variables, initializes parameters and activates units under test. Then, your Stubs will use templates
of modules not actual working modules usually, that's why it's a Stub. Templates of the modules used by the unit including the functions called and templates of any other entity, or data structure that is used within the unit, that is the Program Unit. The Oracle then, is at the end which verifies the correspondence between produced and expected results.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>45. What are the Black-box and White-box Testing Perspectives?</u>
> Black-box testing is designed without knowledge of program's internal structure. It is based on functional requirements. White-box testing examines the internal design of the program. It requires detailed knowldege of its structure.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>46. What is V&V Process?</u>
> V&V is a whole life cycle process. When we talk about validation and verification, we should be doing that at every step. Making sure that what we built is what we set out to build and making sure that it's going to meet the user's needs. This is more obviously true in agile teams. With a user representative commonly a key component of your team, they, the user, can and should and need to provide validation of work after the developer has potentially verified that they have done what they set out to do at every step of the project. It has two principal objectives: Discovery of defects in a system, and assessment of whether or not the system is usable.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>47. What are the Stages of Testing?</u>
> Unit testing, module testing, sub-system testing, system testing and acceptance testing.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>48. What is the Waterfall model?</u>
> [...] waterfall method, where you go from phase to phase to phase. Requirements, design, implementation, testing, deployment and maintenance. As industries started to use this method, they ran into several issues. For example, they found that it's very difficult to predict the requirements one year or two a year ahead, as the market changes, or sometimes it's just really difficult to predict what a user will like or not like. And, since the cycle is a year or two year, it is possible that the developers or the architects misinterpreted the requirements. And so, that misinterpretation will go undetected all the way to design, implementation, and the verification. And similarly, the integration issues between the different components, go undetected for a year while the software is being developed. It is good when you know the requirements very well; the team has experience building similar software; and translation from requirements to product is going to be perfect. The pros are that it is simple, predictable and efficient. The cons are that it is not flexible for changes and the first release takes a longo time.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>49. What is the V model?</u>
> The V-Model focuses on a fairly typical waterfall-esque method that follows strict, step-by-step stages. While initial stages are broad design stages, progress proceeds down through more and more granular stages, leading into implementation and coding, and finally back through all testing stages prior to completion of the project.

*[V-Model: What Is It And How Do You Use It?; Andrew Powell-Morse (2016)](https://airbrake.io/blog/sdlc/v-model)

> So if you look at the V-model, it looks very similar to the waterfall method, but it's just bent into a shape of a V.
But if you look closely, the left side of the model is about project definition or the product definition, where it's getting finer and finer. So from the concept, you go to the requirement, and to the design, and to the implementation.
And then the right side is showing all the validation steps that are corresponding to the steps on the left. On the y-axis,
it's increasing in the abstraction when you go from bottom to the top. And then if you go from the left to right, it kind of shows the project completion. It has an emphasis on validation earlier in the process, so it has eralier detection of potential defects/issues. However, it implies more upfront work.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>50. What is the Sashimi model?</u>
> In Sashimi Model the idea is that we allow to overlap the different phases of software development lifecycle. For example, while you're working on the requirements, instead of waiting for the requirement phase to complete, you will start with your design while the requirements are being created. So, a phase can start before previous phase ends. The pros are the shorten development time, the fact that people with different skills can start working without wiating and that you can do a learning spike early. The con is that it may result in rework.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>51. What is the Incremental model?</u>
> In this model, the software is built in parts. Multiple mini waterfalls, that may overlap. You can use different models for each increment. The pros are that it delivers value earlier and you get feedback and make necessary changes between increments. The cons are that it may result in rework and may cost more.

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>52. What is the Spiral model?</u>
> It's a risk-driven approach, a cyclic process but each of those cycle actually has four basic steps: 1. Determine objectives; 2. Identify and resolve risks; 3. Development and Test; 4. Plan the next iteration. But not every acitivity need to be perfomed every time. But, basically, you do these steps of one, two, three, four and then you go in a cyclic manner and you try to reduce your risks as you do more and more cycles. As you can see, that this model gives a lot and lot of emphasis on the risks. So you identify and resolve risk as primary step of this process. The next characteristic is that the effort and the detail are driven by the risk. So, let's say, if you're in this step, the main goal is to validate something,
validate a concept, or validate the feasibility of it and you're doing some kind of prototype or some kind of software development activity. So you don't need to go through a rigorous requirements documents or a very detailed document. You just do enough so that the goal or objective is achieved. The pros are that it is adaptative, the risk focus increases chances of success, it is flexible for using any model and minimizes waste. The cons are that it is complicated, costs more to manage and needs stakeholder engagement. 

*["Software Development Processes and Methodologies" Online Course; Praveen Mittal and Kevin Wendt (2019)](https://www.coursera.org/learn/software-processes/)*

<u>53. Which are the 4 values and 12 principles of the Agile Manifesto?</u>
> The 4 values are: 1. Individuals and interactions over processes and tools; 2. Working software over comprehensive documentation; 3. Customer collaboration over contract negotiation; 4. Responding to change over following a plan. We follow these principles: 1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software; 2. Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage; 3. Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale; 4. Business people and developers must work together daily throughout the project; 5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done; 6. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation; 7. Working software is the primary measure of progress; 8. Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely; 9. Continuous attention to technical excellence and good design enhances agility; 10. Simplicity - the art of maximizing the amount of work not done - is essential; 11. The best architectures, requirements, and designs emerge from self-organizing teams; 12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly. 

*[Agile Manifesto Org; Multiple Authors (2001)](http://agilemanifesto.org/)*

<u>54. Which are the F.I.R.S.T rules for Testing?</u>
> (F)ast: Tests run quickly. When tests run slow, you won't want to run them frequently. If you don't run them frequently, you won't find problems early enough to fix them easily. (I)ndependent: Test should not depend on each other. You should be able to run each test independently and run the tests in any order you like. (R)epeatable: Tests should be repeatable in any environment. You should be able to run the tests in the production environment, in the QA environment, and on your laptop while riding home on the train without network. (S)elf-Validating: The tests should have a boolean output. Either they pass or fail. You should not have to read through a log file to tell whether the tests pass. (T)imely: The tests need to be written in a timely fashion. Unity tests should be written just before the production code that makes them pass.

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>55. Why are the Unit Tests important?</u>
> It is the unit tests that keep out code flexible, maintainable, and reusable. The reason is simple. If you have tests, you do not fear making changes to the code! Without tests every change is a possible bug. No matter how flexible your architecture is, no matter how nicely partitioned your design, without tests you will be reluctant to make changes beacuse of the fear that you will introduce undetected bugs. And test code is just as important as production code. It is not a second-class citizen. It requires thought, design, and care. It must be kept as clean as production code. 

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>56. What is Git?</u>
> Git is a distributed version control system. [...] this means each user has a local copy of the repository and that repositories can easily be synchronized. Git is a free and open source software project meaning that the code that implements Git is publically available. No single company owns Git, and anyone can make contributions to improve it. Git has a vibrant community of support and an ecosystem in which many other technologies are integrated with it. Git adapts well to many types of projects and work flows. This means that whatever your project is or however your team likes to work together, Git can be adapted as a useful tool for your team.

*["Version Control with Git" Online Course; Steve Byrnes (2019)](https://www.coursera.org/learn/version-control-with-git/)*

<u>57. What is a Git Repository?</u>
> A Git repository contains a series of snapshots of the project over time which are known as commits. Each commit contains all of the directories and files of the project at the time the snapshot was taken. You can go back and view the project at earlier points by viewing the older commits.

*["Version Control with Git" Online Course; Steve Byrnes (2019)](https://www.coursera.org/learn/version-control-with-git/)*

<u>58. Which are the main Git Objects?</u>
> Commit object (a small text file); Annotated tag (a reference to a specifiic commit); Tree (directories and filenames in the project); Blob (the content of a file in the project).

*["Version Control with Git" Online Course; Steve Byrnes (2019)](https://www.coursera.org/learn/version-control-with-git/)*

<u>59. What is a Git Branch?</u>
> All commits of a project belong to a branch. By default, commit belong to the master branch. A branch is a set of commits starting with the most recent commit in the branch and tracing back to the project's first commit.

*["Version Control with Git" Online Course; Steve Byrnes (2019)](https://www.coursera.org/learn/version-control-with-git/)*

<u>60. Which are the 4 types of Merging?</u>
> Fast-forward merge (moves the base branch label to the tip of the topic branch, which is only possible if no other commits have been made to the base branch since branching); Merge commit (combines the commits at the tipos of the merged branches and places the result in the merge commit); Squash merge; Rebase.

*["Version Control with Git" Online Course; Steve Byrnes (2019)](https://www.coursera.org/learn/version-control-with-git/)*

<u>61. Which are the 4 Network Commands on Git?</u>
> Clone (copies a remote repository); Fetch (retrieves new objects and references from the remote repository); Pull (fetches and merges commits locally); Push (adds new objects and references to the remote repository).

*["Version Control with Git" Online Course; Steve Byrnes (2019)](https://www.coursera.org/learn/version-control-with-git/)*

<u>62. What is the Single Responsability Principle (SRP)?</u>
> The Single Responsability Principle (SRP) states that a class or module should have one, and only one, reason to change. This priciple gives us both a defition of responsability, and a guidelines for class size. Classes should have one responsability - one reason to change.

*Clean Code: A Handbook of Agile Software Craftsmanship; Robert C. Martin (2008)*

<u>63. What is the difference between Sofware Design and Software Architecture?</u>
> Typically, the software designer role would be responsible for outlining a software solution to a specific problem by designing the details of individual components and their responsibilities. A software architect role would be responsible for looking at the entire system and choosing appropriate frameworks, data storage, solutions and determining how components interact with each other. That brings us to the primary difference between software design and software architecture.

*["Object Oriented Design" Online Course; Kenny Wong (2020)](https://www.coursera.org/learn/object-oriented-design/)*

### Others
<u>1. How does Google's PageRank Algorithm works?</u>
> PageRank is a predictor of how relevant a web page will be for any given search. It is similar to popularity, which could be said to be a predictor of how muach a person will be liked by any other given person. Every web page on the Internet is assigned a PageRank, which is a number from 0 to 10. The higher the PageRank, the more relevant Google considers the page to be, and the better its chance of showing up at the top of the search results. [...] PagenRank is based on how many other sites like you - that is, link to you. More important, if the sites that link to you are very popular - that is, well-linked - themselves, you get an even higher PageRank.

*Outsmarting Google; Evan Bailyn, Bradley Bailyn (2011)*

> Google's PageRank algorithm assigns your site a number from 0 to 10. Your site's assigned number is based on several important criteria, including inbound links to your site, how trustworthy the sites that link to you are deemed by Google, and so on. When other sites post links to your site they are, in effect, casting a vote for your site. Google tabulates those votes and cross-references them with the other criteria to come up with your rank. 

*Return on Engagement; Tim Frick (2010)*

[Back to Home Page](https://bzamith.github.io/)
