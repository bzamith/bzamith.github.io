---
layout: page
title: Data Science Concepts
---

### 1. What is the difference between Art and Science?
> Science is knowledge which we understand so well that we can teach it to a computer.

*Computer Programming as an Art; Donald Knuth (1974)*

### 2. What is Data Science?
> Multi-disciplinary field that brings together concepts from computer science, statistics/machine learning, and data analysis to understand and extract insights from the ever-increasing amounts of data. Two paradigms of data research: 1. Hypothesis-Driven (given a problem, what kind of data do we need to help solve it?); 2. Data-Driven (given some data, what interesting problems can be solved with it?). The heart of data science is to always ask questions. Always be curious about the world: 1. What can we learn from this data?; 2. What actions can we take once we find whatever it is we are looking for?

*[Data Science Cheatsheet; Maverick Lin (2018)](https://github.com/ml874/Data-Science-Cheatsheet/blob/master/data-science-cheatsheet.pdf)*

> Data science isn't just about the existence of data, or making guesses about what that data might mean; it's about testing hypotheses and making sure that the conclusions you're drawing from the data are valid. 

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

> Data Science is a mix of traditional data analysis techniques with advanced algorithms for handling a considerable measure of games. It has likewise approached finding new sorts of data.

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

### 3. What is the difference between Data Science and Statistics?
> What differentiates data science from statistics is that data sicence is a holistic approach. We're increasingly finding data in the wild, and data scientists are involved with gathering data, massaging it into a tractable form, making it tell its story, and presenting that story to others.

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

### 4. What is a Data Scientist?
> A data researcher is somebody who decodes large measures of data and extracts importance to support an association or organization to improve its activities. They utilize various tools, philosophies, insights, systems, calculations, etc. to examine data additionally. [...] The job of the data researcher fundamentally is to the pursuit and perused the data, preparing and speaking to it and bringing a feeling of the data for down to earth use. [Besides that,] in request to check the present status of an organization or where it stands, a Business [Intelligent] Analyst utilizes data and searches for examples, business patterns, connections and concocts a representation and report. [...] A Machine Learning Engineer works with various calculations identified with machine learning like grouping, choice tress, characterization, arbitrary backwoods, etc. 

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

### 5. What is Data Analysis?
> Data analysis is an art [apart from Data Science]. It is not something yet that we can teach to a computer. Data analysts have many tools at their disposal, from linear regression to classification trees and even deep learning, and these tools have all been carefully taught to computers. But ultimately, a data analyst must find a way to assemble all of the tools and apply them to data to answer a relevant question—a question of interest to people. [...] While a study includes developing and executing a plan for collecting data, a data analysis presumes the data have already been collected. More specifically, a study includes the development of a hypothesis or question, the designing of the data collection process (or study protocol), the collection of the data, and the analysis and interpretation of the data. Because a data analysis presumes that the data have already been collected, it includes development and refinement of a question and the process of analyzing and interpreting the data.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 6. What are the Epicycles of Analysis?
> Develop Expectations -> Collect Data -> Match Expectations with Data

> Starting The Question -> Exploratory Data Analisys -> Model Building -> Interpret -> Communicate

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 7. What is QMV? 
> It is an iterative process of questioning, modeling, and validation to data analysis and model building.

*[Model Building and Validation by AT&T, Online Course - Advanced Techniques for Analyzing Data](https://www.udacity.com/course/model-building-and-validation--ud919)*

### 8. How is Moore's law applied to data?
> Since the early '80s, processor speed has increased from 10 MHz to 3.6 GHz — an increase of 360 (not counting increases in word length and number of cores). But we've seen much bigger increases in storage capacity, on every level. RAM has moved from $1,000/MB to roughly $25/GB — a price reduction of about 40000, to say nothing of the reduction in size and increase in speed. Hitachi made the first gigabyte disk drives in 1982, weighing in at roughly 250 pounds; now terabyte drives are consumer equipment, and a 32 GB microSD card weighs about half a gram. Whether you look at bits per gram, bits per dollar, or raw capacity, storage has more than kept pace with the increase of CPU speed. The importance of Moore's law as applied to data isn't just geek pyrotechnics. Data expands to fill the space you have to store it. The more storage is available, the more data you will find to put into it. [...] Increased storage capacity demands increased sophistication in the analysis and use of that data. That's the foundation of data science.

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

> Gordon Moore (a cofounder of Intel) observed that the number of transistors in computer chips doubles roughly every two years. More transistors per chip translates to faster speeds in computer processors and more random access memory in computers, which leads to more powerful computers. This extraordinary rate of technological improvement - output doubling every two years - is likely the fastest growth in technology humanity has ever seen. Yet, since 2011, the amount of sequencing data stored in the Short Read Archive has outpaced even this incredible growth, having doubled every year. 

*Bioinformatics Data Skills; Vince Buffalo (2015)*

### 9. What is Data Conditioning?
> [It is] the first step of any data analysis project [and means] getting data into a state where it's usable. Data conditioning can involve cleaning up messy HTML with tools [...], natural language processing to parse plain text in English and other languages, or even getting humans to do the dirty work.

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

### 10. What is Big Data?
> Big data is when the size of the data itself becomes part of the problem. We're discussing data problems ranging from gigabytes to petabytes of data. At some point, traditional techniques for working with data run out of steam.

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

> That is a considerable measure of data, so much data, and it turned out to be challenging to deal with by utilizing conventional innovations. Along these lines, we called it Big Data.

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

### 11. How to store data in Data Science scenario?
> Relational databases are designed for consistency, to support complex transactions that can easily be rolled back if any one of a complex set of operations fails. While rock-solid consistency is crucial to many applications, it's not really necessary for the kind of analysis we're discussing here. [...] Precision has an allure, but in most data-driven applications outside of finance, that allure is deceptive. Most data analysis is comparative [...]. To store huge datasets effectively, we've seen a new breed of databases appear. These are frequently called NoSQL databases, or Non-Relational databases [...]. They group together fundamentally dissimilar products by telling you what they aren't. Many of these databases are [..] designed to be distributed across many nodes, to provide ''eventual consistency'' but not absolute consistency, and to have very flexible schema.

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

### 12. What is the MapReduce approach?
> Data is only useful if you can do something with it, and enormous datasets present computational problems. Google popularized the MapReduce approach, which is basically a divide-and-conquer strategy for distributing an extremely large problem across an extremely large computing cluster. In the “map” stage, a programming task is divided into a number of identical subtasks, which are then distributed across many processors; the intermediate results are then combined by a single reduce task. In hindsight, MapReduce seems like an obvious solution to Google's biggest problem, creating large searches. It's easy to distribute a search across thousands of processors, and then combine the results into a single set of answers. What's less obvious is that MapReduce has proven to be widely applicable to many large data problems, ranging from search to machine learning. The most popular open source implementation of MapReduce is the Hadoop project.

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

### 13. What is Hadoop?
> Hadoop goes far beyond a simple MapReduce implementation (of which there are several); it's the key component of a data platform. It incorporates HDFS, a distributed filesystem designed for the performance and reliability requirements of huge datasets; the HBase database; Hive, which lets developers explore Hadoop datasets using SQL-like queries; a high-level dataflow language called Pig; and other components. If anything can be called a one-stop information platform, Hadoop is it. Hadoop has been instrumental in enabling ''agile'' data analysis. [...] Hadoop (and particularly Elastic MapReduce) make it easy to build clusters that can perform computations on long datasets quickly. Hadoop is essentially a batch system, but Hadoop Online Prototype (HOP) is an experimental project that enables stream processing. Hadoop processes data as it arrives, and delivers intermediate results in (near) real-time. Near real-time data analysis enables features like trending topics on sites like Twitter. 

*[What Is Data Science?; Mike Loukides (2010)](https://www.oreilly.com/ideas/what-is-data-science)*

> The Hadoop platform was designed to solve problems where you have a lot of data - perhaps a mixture of complex and structured data - and it doesn't fit nicely into tables. It's for situations where you want to run analytics that are deep and computationally extensive, like clustering and targeting.

*The Modern Data Warehouse: A New Approach for a New Era; Tom Traubitz (2018)*

### 14. What is Data Warehouse?
> A "data warehouse" may be a basic operational reporting environment built from a single transactional system or it may be a cutting-edge solution uniting transactional, machine and social data to support deep and complex analysis in real time. It may provide information for daily (or monthly, or quarterly) reports or it may feed complex analysis into live business processes several times a second. [...] Vincent Rainardi outlines five basic requirements that a data warehouse typically must meet: 1. An integrated view of the organization's data for strategic analysis; 2. A consistent view of the organization's data resources with data that has been cleared of anomalies which can lead to a false impression of the business' function; 3. A consolidation of the organization's data  history beyond what is retained by current operations for deep analysis of the business' functions over time; 4. A tested and verified environment for doing data analysis to access data so that each new draw of data doesn't become a "science experiment" in and of itself; 5. A high-performance environment for doing data analysis that does not interfere with day-to-day activity of the business. 

*The Modern Data Warehouse: A New Approach for a New Era; Tom Traubitz (2018)*

### 15. What are the challenges of the modern Data Warehouse?
> Today your business faces an unprecedented sets of challenges. Bigger data volumes. New data types. A deluge of machine data from the Internet of Things. Digital business models that require real-time performance all the time drive the need for zero-latency reporting. Data-driven businesses need more complex, more extensive, and yet paradoxically faster and more easily accessed analytics. To suceed, you need a deeper understanding of the Why bnehind what your customers, your competitors, and the market as a whole is up to. These are the challenges of the modern Data Warehouse. And to meet these challenges, you need something more than just a database. 

*The Modern Data Warehouse: A New Approach for a New Era; Tom Traubitz (2018)*

### 16. How is Data Science applied to Business?
> The data science gives an immense chance to the budgetary firm to rehash the business. In account, the use of data science is automating Risk Managment, Predictive Analytics, Managing client data, Fraud identification, Real-time Analytics, Algorithmic exchanging, Consumer Analytics. [...] Data Science helps in understanding different patterns and futhermore helps in setting choices concerning advancement and advertising so the items can achieve the clients, and in the long run, increment the income of the organization.

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

### 17. What is Bioinfomatics? 
> Restorative Science: In Bioinformatics, Data Science alongside Genome data is helping scientists and specialists to examine genetic structures and see how specific medications can follow up on sicknesses.

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

> Bioinformaticians are concerned with deriving biological understanding from large amounts of data with specialized skills and tools. Early in biology's history, the datasets were small and manageable. [...] However, this is all rapidly changing. Large sequencing datasets are widespread, and will only become more common in the future. Analyzing this data takes different tools, new skills, and many computers with large amounts of memory, processing power, and disk space.

*Bioinformatics Data Skills; Vince Buffalo (2015)*

### 18. Should I use R programming language for Data Science? 
> R in data science is considered as the best programming language. It is a programming language and programming condition for illustrations and measurable registering. It is space explicit and has fantastic top notch run. R comprises of open source bundles for measurable and quantitative applications. This incorporates progressed plotting, non-direct relapse, neural systems, phylogenetics, and some more. For analysing data, Data Scientists and Data Miners use R broadly.

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

### 19. What is information science? 
> It is the field of science where unique logical methodologies and approaches are consolidated to consider data innovation. In layman language, it is technically the science for examing information. 

*Data Science From Scratch: How to Become a Data Scientist; David Park (2019)*

### 20. What is a model?
> In a very general sense, a model is something we construct to help us understand the real world. [...]  The process of building a model involves imposing a specific structure on the data and creating a summary of the data. [...] A statistical model serves two key purposes in a data analysis, which are to provide a quantitative summary of your data and to impose a specific structure on the population from which the data were sampled. [...] At its core, a statistical model provides a description of how the world works and how the data were generated. The model is essentially an expectation of the relationships between various factors in the real world and in your dataset. What makes a model a statistical model is that it allows for some randomness in generating the data.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 21. What is statistic?
> The first key element of a statistical model is data reduction. The basic idea is you want to take the original set of numbers consisting of your dataset and transform them into a smaller set of numbers. [...] The process of data reduction typically ends up with a statistic. Generally speaking, a statistic is any summary of the data. The sample mean, or average, is a statistic. So is the median, the standard deviation, the maximum, the minimum, and the range. Some statistics are more or less useful than others but they are all summaries of the data.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 22. What are the Normal Distribution and the Gamma Distribution?
> [Normal model] says that the randomness in a set of data can be explained by the Normal distribution, or a bell-shaped curve. The Normal distribution is fully specified by two parameters — the mean and the standard deviation. [The Gamma distribution] has the feature that it only allows positive values, so it eliminates the problem we had with negative values with the Normal distribution.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 23. What is inference?
> Inference is one of many possible goals in data analysis. [...] In general, the goal of inference is to be able to make a statement about something that is not observed, and ideally to be able to characterize any uncertainty you have about that statement. Inference is difficult because of the difference between what you are able to observe and what you ultimately want to know. [..] The language of inference can change depending on the application, but most commonly, we refer to the things we cannot observe (but want to know about) as the population or as features of the population and the data that we observe as the sample. The goal is to use the sample to somehow make a statement about the population.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 24. What is Associational Analyses?
> Associational analyses are ones where we are looking at an association between two or more features in the presence of other potentially confounding factors. There are three classes of variables that are important to think about in an associational analysis: Outcome (the feature of your dataset that is thought to change along with your key predictor); Key predictor (often for associational analyses there is one key predictor of interest); Potential confounders (this is a large class of predictors that are both related to the key predictor and the outcome).

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 25. What is Prediction Analyses?
> In the previous section we described associational analyses, where the goal is to see if a key predictor x and an outcome y are associated. But sometimes the goal is to use all of the information available to you to predict y. Furthermore, it doesn't matter if the variables would be considered unrelated in a causal way to the outcome you want to predict because the objective is prediction, not developing an understanding about the relationships between features. With prediction models, we have outcome variables–features about which we would like to make predictions–but we typically do not make a distinction between “key predictors” and other predictors. In most cases, any predictor that might be of use in predicting the outcome would be considered in an analysis and might, a priori, be given equal weight in terms of its importance in predicting the outcome. Prediction analyses will often leave it to the prediction algorithm to determine the importance of each predictor and to determine the functional form of the model.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 26. Why is model tuning relevant?
> Model tuning. A hallmark of prediction algorithms is their many tuning parameters. Sometimes these parameters can have large effects on prediction quality if they are changed and so it is important to be informed of the impact of tuning parameters for whatever algorithm you use. There is no prediction algorithm for which a single set of tuning parameters works well for all problems. Most likely, for the initial model fit, you will use “default” parameters, but these defaults may not be sufficient for your purposes. Fiddling with the tuning parameters may greatly change the quality of your predictions. It's very important that you document the values of these tuning parameters so that the analysis can be reproduced in the future.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 27. When to use Inference or Prediction?
> For inferential questions the goal is typically to estimate an association between a predictor of interest and the outcome. There is usually only a handful of predictors of interest (or even just one), however there are typically many potential confounding variables to consider. They key goal of modeling is to estimate an association while making sure you appropriately adjust for any potential confounders. Often, sensitivity analyses are conducted to see if associations of interest are robust to different sets of confounders. For prediction questions the goal is to identify a model that best predicts the outcome. Typically we do not place any a priori importance on the predictors, so long as they are good at predicting the outcome. There is no notion of “confounder” or “predictors of interest” because all predictors are potentially useful for predicting the outcome. Also, we often do not care about “how the model works” or telling a detailed story about the predictors. The key goal is to develop a model with good prediction skill and to estimate a reasonable error rate from the data.

*[The Art of Data Science; Roger D. Peng and Elizabeth Matsui (2017)](https://bookdown.org/rdpeng/artofdatascience/)*

### 28. What is Linear Regression?
> Linear regression is a basic and commonly used type of predictive analysis.  The overall idea of regression is to examine two things: (1) does a set of predictor variables do a good job in predicting an outcome (dependent) variable?  (2) Which variables in particular are significant predictors of the outcome variable, and in what way do they–indicated by the magnitude and sign of the beta estimates–impact the outcome variable?  These regression estimates are used to explain the relationship between one dependent variable and one or more independent variables. 

*[What is Linear Regression?; Statistics Solutions (2013)](https://www.statisticssolutions.com/what-is-linear-regression/)*

### 29. What is Artificial Intelligence?
> The study of making computers do things that the human needs intelligence to do. [...] Classes of problems requiring intelligence include inference based on knowledge, reasoning with uncertain or incomplete information, various forms of perception and learning, and applications to problems such as control, prediction, classification and optimization

*Fundamentals of the New Artificial Intelligence; Toshinori Munakata (2008)*

> Artificial Intelligence involves using methods based on the intelligent behavior of humans and other animals to solve complex problems.

*Artificial Intelligence: Illuminated; Ben Coppin (2004)*

### 30. What is Machine Learning?
> Machine learning can be understood as and application of AI. (It) was born from pattern recognition and the theory that computers can learn without being programmed to perform specific tasks. This includes techniques such as Bayesian methods; neural networks; inductive logic programming; explanation-based, natural language processing; decision tree; and reinforcement learning. [...] Systems that have hard-coded knowledge bases will typically experience difficulties in new environments. Certain difficulties can be overcome by a system that can acquire its own knowledge. This capability is known as machine learning.

*Machine Learning and AI for Healthcare; Arjun Panesar (2019)*

### 31. What is Knowledge Discovery from Data (KDD)?
> It is an iterative sequence of the following steps: 1. Data cleaning (to remove noise and inconsistent data); 2. Data integration (where multiple data sources may be combined); 3. Data selection (where data relevant to the analysis task are retrieved from the database); 4. Data transformation (where data are transformed and consolidated into forms of appropriate for mining by performing summary or aggregation operations); 5. Data mining (an essential process where intelligent methods are applied to extract data patterns); 6. Pattern evaluation (to identify the truly interesting patterns representing knowledge based on interestingness measures); 7. Knowledge presentation (where visualization and knowledge representation techniques are used to present mined knowledge to users).

*Data Mining; Jiawei Hang, Micheline Kamber and Jian Pei (2012)*

### 32. What is the difference between Data, Information and Knowledge?
> Data are different symbols and characters whose meaning only becomes clear when they connect with context. Collecting and measuring observations generates data. Usually machines sent, receive and process data. The confusion between data and information often arises because information is made out of data. Data reaches a more complex level and becomes information by integrating them to a context. Information provides expertise about facts or persons. Knowledge thus describes the collected information that is available about a particular fact or a person. The knowledge of this situation makes it possible to make informed decisions and solve problems. Thus, knowledge influences the thinking and actions of people. Machines can also make decisions based on new knowledge generated by information. In order to gain knowledge, it is necessary to process information.

*[What is the difference between data, information and knowledge?; Sebastian Pierper (2017)](https://www.artegic.com/blog/difference-data-information-knowledge/)*

### 33. What are the 4 different categories of analysis?
> Descriptive Analytics (tells you what happened in the past); Diagnostic Analytics (helps you understand why something happened in the past); Predictive Analytics (predicts what is most likely to happen in the future); Prescriptive Analytics (recommends actions you can take to affect those outcomes).

*[Comparing Descriptive, Predictive, Prescriptive, and Diagnostic Analytics; Brian Brinkmann (2019)](https://www.logianalytics.com/predictive-analytics/comparing-descriptive-predictive-prescriptive-and-diagnostic-analytics/)*

### 34. What is bias?
> In statistics, bias is the difference between the expected value of an estimator and its estimand. [...] (it) refers to results that are systematically off the mark. Think archery where your bow is sighted incorrectly. High bias doesn’t mean you’re shooting all over the place (that’s high variance), but may cause a perfect archer hit below the bullseye all the time.

*[What is AI bias?; Cassie Kozyrkov (2019)](https://towardsdatascience.com/what-is-ai-bias-6606a3bcb814)*

### 35. What is ETL?
> The step where the data is pulled processed and loaded into a data warehouse, this is generally done through an ETL pipeline. ETL stands for Extract, Transform and Load. ETL is a 3 steps process: (1) Extracting data from single or multiple Data Sources. (2) Transforming data as per business logic. Transformation is in itself a two steps process - data cleansing and data manipulation. (3) Loading the previously transformed data into the target data source or data warehouse.

*[The “Generic” Data Science Life-Cycle; Sivakar Siva (2020)](https://towardsdatascience.com/stoend-to-end-data-science-life-cycle-6387523b5afc)*

### 36. How to deal with missing values?
> Frequently data contains missing values or null values which lead to lower the potential of the model. So we try to impute the missing values. 1. For continuous values, we fill in the null values using the mean, mode or the median depending on the need. 2. For categorical values, we use the most frequently occurred categorical value.

*[The “Generic” Data Science Life-Cycle; Sivakar Siva (2020)]*

### 37. What is feature engineering?
> Feature engineering is the process of using domain knowledge to extract features from raw data via data mining techniques. These features can be used to strengthen the performance of machine learning models. Feature engineering can be considered as applied machine learning itself.

*[The “Generic” Data Science Life-Cycle; Sivakar Siva (2020)]*

> Outlier detection, one hot encoding, handling missing data are few basic examples of Feature Engineering.

*[What is feature engineering; CodeBasics (2020)](https://www.youtube.com/watch?v=pYVScuY-GPk)*

### 38. What are the differences between Descriptive Analysis and Inferential Statistics?
> Descriptive statistics describe a sample. That’s pretty straightforward. You simply take a group that you’re interested in, record data about the group members, and then use summary statistics and graphs to present the group properties. With descriptive statistics, there is no uncertainty because you are describing only the people or items that you actually measure. You’re not trying to infer properties about a larger population.[...] Inferential statistics takes data from a sample and makes inferences about the larger population from which the sample was drawn. Because the goal of inferential statistics is to draw conclusions from a sample and generalize them to a population, we need to have confidence that our sample accurately reflects the population. This requirement affects our process.

*[Difference between Descriptive and Inferential Statistics; Jim Frost (2020)](https://statisticsbyjim.com/basics/descriptive-inferential-statistics/)*

### 39. What is the basic difference between inferential statistics and machine learning?
> Inferential statistics is a way to learn from data, and one of the tool of Machine Learning. Both use a set of observations to discover underlying processes or patterns, then be able to predict. If you have all the houses characteristics and prices in a given area , you can find out what is determining the price, then predict the price for a new house. Simple statistical analysis. Now if you want to build an app to predict houses prices, it’s another story. You need a lot more work, on data pre-processing, multiple algorithms, other models of regression, etc … That’s machine learning territory. Inferential statistics is only one of the tool. Machine Learning also wants to learn from “big data”, high dimensional data, unstructured, streaming data, find connexions in a social network, group press releases by similar topics, recognize images, compress pictures etc. No nice excel-like data set for this. It requires a different set of tools (whose goal is basically to turn everything the messy world is throwing at us into a nice excel-like data set with matrices that compute fast). The techniques that deal with high dimensional and streaming data have all the attention today, but a lot of the implementations of Machine Learning are still classic regression. You hear a lot that a business can be “moneyballed”, referring to base ball statistics. The idea is that you can take something that is “obviously” not data driven (“I have been doing this business for 30 years and let me tell you it’s all about connecting with people”), and prove that it can be run more effectively with data. Most of that is indeed inferential statistics, plus additional techniques. It’s all “learning from data”.

*[Quora Answer; Philippe Hocquet (2017)](https://www.quora.com/What-is-the-basic-difference-between-inferential-statistics-and-machine-learning)*

### 40. What are the different types of data?
> Nominal, Ordinal, Interval and Ratio.

### 41. What is one hot encoding?
> One hot encoding is a process by which categorical variables are converted into a form that could be provided to ML algorithms to do a better job in prediction. [...] It is used to perform “binarization” of the category and include it as a feature to train the model.

*[What is One Hot Encoding? Why and When Do You Have to Use it? (2017)](https://hackernoon.com/what-is-one-hot-encoding-why-and-when-do-you-have-to-use-it-e3c6186d008f)*

### 42. What is the bias-variance trade-off?
> Bias is the difference between the average prediction of our model and the correct value which we are trying to predict. Model with high bias pays very little attention to the training data and oversimplifies the model. It always leads to high error on training and test data. Variance is the variability of model prediction for a given data point or a value which tells us spread of our data. Model with high variance pays a lot of attention to training data and does not generalize on the data which it hasn’t seen before. As a result, such models perform very well on training data but has high error rates on test data. If our model is too simple and has very few parameters then it may have high bias and low variance. On the other hand if our model has large number of parameters then it’s going to have high variance and low bias. So we need to find the right/good balance without overfitting and underfitting the data. This tradeoff in complexity is why there is a tradeoff between bias and variance. An algorithm can’t be more complex and less complex at the same time.

*[Understanding the Bias-Variance Tradeoff; Seema Singh (2018)](https://towardsdatascience.com/understanding-the-bias-variance-tradeoff-165e6942b229)*

### 43. What is underfitting?
> In supervised learning, underfitting happens when a model unable to capture the underlying pattern of the data. These models usually have high bias and low variance. It happens when we have very less amount of data to build an accurate model or when we try to build a linear model with a nonlinear data. Also, these kind of models are very simple to capture the complex patterns in data like Linear and logistic regression.

*Understanding the Bias-Variance Tradeoff; Seema Singh (2018)*

### 44. What is overfitting?
> In supervised learning, overfitting happens when our model captures the noise along with the underlying pattern in data. It happens when we train our model a lot over noisy dataset. These models have low bias and high variance. These models are very complex like Decision trees which are prone to overfitting.

*Understanding the Bias-Variance Tradeoff; Seema Singh (2018)*

### 45. What are the 5 V's of Big Data?
> Volume, velocity, variety, value and veracity.

### 46. What is the High Accuracy Paradox?
> Accuracy is not useful when trying to predict things that are not common. Accuracy is simply the proportion of correctly classified instances. It is usually the first metric you look at when evaluating a model. However, when the data is imbalanced (where most of the instances belong to one of the classes), or you are more interested in the performance on either one of the classes, accuracy doesn’t really capture the effectiveness of a classifier. Normally in classification problems, we're typically more concerned about the errors that we make. Because the target class is usually the area of interest that we're trying to focus on.  This is called accuracy paradox.

*[Machine Learning - Accuracy Paradox; Randy Lao (2017)](https://www.linkedin.com/pulse/machine-learning-accuracy-paradox-randy-lao/)*

> Accuracy is not a reliable metric to determine a model performance. That’s why it’s called a Paradox because, intuitively, you’d expect a Model with a higher Accuracy to have been the best Model but Accuracy Paradox tells us that this, sometimes, isn’t the case.

*[Accuracy Paradox in Classification Models; Amit Ranjan (2020)](https://medium.com/analytics-vidhya/accuracy-paradox-in-classification-models-d55a2884410)*

### 47. What is PAC Learning?
> PAC - probability for approximately correct - learning theory helps to analyze whether and under what conditions a learning algorithm will probably output an approximately correct classifier. 

*[The Hundred-Page Machine Learning Book; Andriy Burkov (2019)](https://medium.com/analytics-vidhya/accuracy-paradox-in-classification-models-d55a2884410)*

> A Concept Class (C) is PAC-learnable by a Learner (L) using a Hypothesis Space (H), if L will, with probability 1 - delta (with 'delta' being the certainty goal), output a hypothesis h (belonging to H) such that the error of h is less than epsilon (with 'epsilon' being the error goal) in time and samples polynomial in 1/epsilon, 1/delta.

*[PAC Learning - Georgia Tech - Machine Learning video (2015)](https://www.youtube.com/watch?v=e37nlms7Zi0)*

[**Back to Home Page**](https://bzamith.github.io/)
