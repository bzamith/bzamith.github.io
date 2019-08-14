## Data Science Concepts

<u>1. What is the difference between Art and Science?</u>
> Science is knowledge which we understand so well that we can teach it to a computer.

*Computer Programming as an Art, Donald Knuth (1974)*

<u>2. What is Data Science?</u>
> Multi-disciplinary field that brings together concepts from computer science, statistics/machine learning, and data analysis to understand and extract insights from the ever-increasing amounts of data. Two paradigms of data research: 1. Hypothesis-Driven (given a problem, what kind of data do we need to help solve it?); 2. Data-Driven (given some data, what interesting problems can be solved with it?). The heart of data science is to always ask questions. Always be curious about the world: 1. What can we learn from this data?; 2. What actions can we take once we find whatever it is we are looking for?

*[Data Science Cheatsheet, Maverick Lin (2018)](https://github.com/ml874/Data-Science-Cheatsheet/blob/master/data-science-cheatsheet.pdf)*

> Data science isn't just about the existence of data, or making guesses about what that data might mean; it's about testing hypotheses and making sure that the conclusions you're drawing from the data are valid. 

*[What Is Data Science?, Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

> Data Science is a mix of traditional data analysis techniques with advanced algorithms for handling a considerable measure of games. It has likewise approached finding new sorts of data.

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>3. What is the difference between Data Science and Statistics?</u>
> What differentiates data science from statistics is that data sicence is a holistic approach. We're increasingly finding data in the wild, and data scientists are involved with gathering data, massaging it into a tractable form, making it tell its story, and presenting that story to others.

*What Is Data Science?, Mike Loukides (2010)*

<u>4. What is a Data Scientist?</u>
> A data researcher is somebody who decodes large measures of data and extracts importance to support an association or organization to improve its activities. They utilize various tools, philosophies, insights, systems, calculations, etc. to examine data additionally. [...] The job of the data researcher fundamentally is to the pursuit and perused the data, preparing and speaking to it and bringing a feeling of the data for down to earth use. [Besides that,] in request to check the present status of an organization or where it stands, a Business [Intelligent] Analyst utilizes data and searches for examples, business patterns, connections and concocts a representation and report. [...] A Machine Learning Engineer works with various calculations identified with machine learning like grouping, choice tress, characterization, arbitrary backwoods, etc. 

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>5. What is Data Analysis?</u>
> Data analysis is an art [apart from Data Science]. It is not something yet that we can teach to a computer. Data analysts have many tools at their disposal, from linear regression to classification trees and even deep learning, and these tools have all been carefully taught to computers. But ultimately, a data analyst must find a way to assemble all of the tools and apply them to data to answer a relevant question—a question of interest to people. [...] While a study includes developing and executing a plan for collecting data, a data analysis presumes the data have already been collected. More specifically, a study includes the development of a hypothesis or question, the designing of the data collection process (or study protocol), the collection of the data, and the analysis and interpretation of the data. Because a data analysis presumes that the data have already been collected, it includes development and refinement of a question and the process of analyzing and interpreting the data.

*[The Art of Data Science, Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

<u>6. What are the Epicycles of Analysis?</u>
> Develop Expectations -> Collect Data -> Match Expectations with Data

> Starting The Question -> Exploratory Data Analisys -> Model Building -> Interpret -> Communicate

*The Art of Data Science, Roger D. Peng and Elizabeth Matsui (2017)*

<u>7. What is QMV? </u>
> It is an iterative process of questioning, modeling, and validation to data analysis and model building.

*Model Building and Validation by AT&T, Online Course - Advanced Techniques for Analyzing Data*

<u>8. How is Moore's law applied to data?</u>
> Since the early '80s, processor speed has increased from 10 MHz to 3.6 GHz — an increase of 360 (not counting increases in word length and number of cores). But we've seen much bigger increases in storage capacity, on every level. RAM has moved from $1,000/MB to roughly $25/GB — a price reduction of about 40000, to say nothing of the reduction in size and increase in speed. Hitachi made the first gigabyte disk drives in 1982, weighing in at roughly 250 pounds; now terabyte drives are consumer equipment, and a 32 GB microSD card weighs about half a gram. Whether you look at bits per gram, bits per dollar, or raw capacity, storage has more than kept pace with the increase of CPU speed. The importance of Moore's law as applied to data isn't just geek pyrotechnics. Data expands to fill the space you have to store it. The more storage is available, the more data you will find to put into it. [...] Increased storage capacity demands increased sophistication in the analysis and use of that data. That's the foundation of data science.

*What Is Data Science?, Mike Loukides (2010)*

<u>9. What is Data Conditioning?</u>
> [It is] the first step of any data analysis project [and means] getting data into a state where it's usable. Data conditioning can involve cleaning up messy HTML with tools [...], natural language processing to parse plain text in English and other languages, or even getting humans to do the dirty work.

*What Is Data Science?, Mike Loukides (2010)*

<u>10. What is Big Data?</u>
> Big data is when the size of the data itself becomes part of the problem. We're discussing data problems ranging from gigabytes to petabytes of data. At some point, traditional techniques for working with data run out of steam.

*What Is Data Science?, Mike Loukides (2010)*

> That is a considerable measure of data, so much data, and it turned out to be challenging to deal with by utilizing conventional innovations. Along these lines, we called it Big Data.

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>11. How to store data in Data Science scenario?</u>
> Relational databases are designed for consistency, to support complex transactions that can easily be rolled back if any one of a complex set of operations fails. While rock-solid consistency is crucial to many applications, it's not really necessary for the kind of analysis we're discussing here. [...] Precision has an allure, but in most data-driven applications outside of finance, that allure is deceptive. Most data analysis is comparative [...]. To store huge datasets effectively, we've seen a new breed of databases appear. These are frequently called NoSQL databases, or Non-Relational databases [...]. They group together fundamentally dissimilar products by telling you what they aren't. Many of these databases are [..] designed to be distributed across many nodes, to provide ''eventual consistency'' but not absolute consistency, and to have very flexible schema.

*What Is Data Science?, Mike Loukides (2010)*

<u>12. What is the MapReduce approach?</u>
> Data is only useful if you can do something with it, and enormous datasets present computational problems. Google popularized the MapReduce approach, which is basically a divide-and-conquer strategy for distributing an extremely large problem across an extremely large computing cluster. In the “map” stage, a programming task is divided into a number of identical subtasks, which are then distributed across many processors; the intermediate results are then combined by a single reduce task. In hindsight, MapReduce seems like an obvious solution to Google's biggest problem, creating large searches. It's easy to distribute a search across thousands of processors, and then combine the results into a single set of answers. What's less obvious is that MapReduce has proven to be widely applicable to many large data problems, ranging from search to machine learning. The most popular open source implementation of MapReduce is the Hadoop project.

*What Is Data Science?, Mike Loukides (2010)*

<u>13. What is Hadoop?</u>
> Hadoop goes far beyond a simple MapReduce implementation (of which there are several); it's the key component of a data platform. It incorporates HDFS, a distributed filesystem designed for the performance and reliability requirements of huge datasets; the HBase database; Hive, which lets developers explore Hadoop datasets using SQL-like queries; a high-level dataflow language called Pig; and other components. If anything can be called a one-stop information platform, Hadoop is it. Hadoop has been instrumental in enabling ''agile'' data analysis. [...] Hadoop (and particularly Elastic MapReduce) make it easy to build clusters that can perform computations on long datasets quickly. Hadoop is essentially a batch system, but Hadoop Online Prototype (HOP) is an experimental project that enables stream processing. Hadoop processes data as it arrives, and delivers intermediate results in (near) real-time. Near real-time data analysis enables features like trending topics on sites like Twitter. 

*What Is Data Science?, Mike Loukides (2010)*

> The Hadoop platform was designed to solve problems where you have a lot of data - perhaps a mixture of complex and structured data - and it doesn't fit nicely into tables. It's for situations where you want to run analytics that are deep and computationally extensive, like clustering and targeting.

*The Modern Data Warehouse: A New Approach for a New Era, Tom Traubitz (2018)*

<u>14. What is Data Warehouse?</u>
> A "data warehouse" may be a basic operational reporting environment built from a single transactional system or it may be a cutting-edge solution uniting transactional, machine and social data to support deep and complex analysis in real time. It may provide information for daily (or monthly, or quarterly) reports or it may feed complex analysis into live business processes several times a second. [...] Vincent Rainardi outlines five basic requirements that a data warehouse typically must meet: 1. An integrated view of the organization's data for strategic analysis; 2. A consistent view of the organization's data resources with data that has been cleared of anomalies which can lead to a false impression of the business' function; 3. A consolidation of the organization's data  history beyond what is retained by current operations for deep analysis of the business' functions over time; 4. A tested and verified environment for doing data analysis to access data so that each new draw of data doesn't become a "science experiment" in and of itself; 5. A high-performance environment for doing data analysis that does not interfere with day-to-day activity of the business. 

*The Modern Data Warehouse: A New Approach for a New Era, Tom Traubitz (2018)*

<u>15. What are the challenges of the modern Data Warehouse?</u>
> Today your business faces an unprecedented sets of challenges. Bigger data volumes. New data types. A deluge of machine data from the Internet of Things. Digital business models that require real-time performance all the time drive the need for zero-latency reporting. Data-driven businesses need more complex, more extensive, and yet paradoxically faster and more easily accessed analytics. To suceed, you need a deeper understanding of the Why bnehind what your customers, your competitors, and the market as a whole is up to. These are the challenges of the modern Data Warehouse. And to meet these challenges, you need something more than just a database. 

*The Modern Data Warehouse: A New Approach for a New Era, Tom Traubitz (2018)*

<u>16. How is Data Science applied to Business?</u>
> The data science gives an immense chance to the budgetary firm to rehash the business. In account, the use of data science is automating Risk Managment, Predictive Analytics, Managing client data, Fraud identification, Real-time Analytics, Algorithmic exchanging, Consumer Analytics. [...] Data Science helps in understanding different patterns and futhermore helps in setting choices concerning advancement and advertising so the items can achieve the clients, and in the long run, increment the income of the organization.

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>17. What is Bioinfomatics? </u>
> Restorative Science: In Bioinformatics, Data Science alongside Genome data is helping scientists and specialists to examine genetic structures and see how specific medications can follow up on sicknesses.

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>18. Should I use R programming language for Data Science? </u>
> R in data science is considered as the best programming language. It is a programming language and programming condition for illustrations and measurable registering. It is space explicit and has fantastic top notch run. R comprises of open source bundles for measurable and quantitative applications. This incorporates progressed plotting, non-direct relapse, neural systems, phylogenetics, and some more. For analysing data, Data Scientists and Data Miners use R broadly.

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>19. What is information science? </u>
> It is the field of science where unique logical methodologies and approaches are consolidated to consider data innovation. In layman language, it is technically the science for examing information. 

*Data Science From Scratch: How to Become a Data Scientist, David Park (2019)*

<u>X. What is Data Mining?</u>

<u>X. What is the difference between Data, Information and Knowledge?</u>

<u>X. What is Artificial Intelligence?</u>

<u>X. What is Machine Learning?</u>

## Others

<u>X. How does Google's PageRank Algorithm works?</u>

<u>X. What are the differences between Dynamic Programming and Greedy Algorithms?</u>

<u>X. What are the differences between Dynamic Programming and Divide-and-Conquer Algorithms?</u>


[Back to Home Page](https://bzamith.github.io/)
