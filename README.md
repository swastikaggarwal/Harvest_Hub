
  # Hárvest Hüb
  Let's Save the Future Together: Smart Food Quality Check system, get Freshness Updates and recipes you can make from it. 
  ---
  **Table of Contents:**
  
* [Project Summary](#project-summary)
    * [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)
    * [How our technology solution can help](#how-our-technology-solution-can-help)
   * [Our idea](#our-idea)
* [Technology implementation](#technology-implementation)
    * [IBM AI services used](#ibm-ai-services-used)
    * [Other IBM technology used](#other-ibm-technology-used)
    * [Solution Architecture](#solution-architecture)
 * [Presentation materials](#presentation-materials)
    * [Solution demo video](#solution-demo-video)
    * [Project development roadmap](#project-development-roadmap)
 * [Additional details](#additional-details)
    * [How to run the project](#how-to-run-the-project)
 * [Team details](#team-details)
    * [Authors](#authors)

## Project Summary 
### The Issue we are Hoping to Solve
---
***Global Food Challenge:***
About one-third of all the food produced worldwide is wasted or lost every year, while millions suffer from hunger every night. This happens because many folks lack knowledge about how to use, keep food fresh, and store it properly. The result is early spoilage of food. Fixing this lack of awareness is crucial for sustainable food practices. Examples include not knowing how to store food correctly or **misunderstanding expiration dates**, adding to the problem of having too much-wasted food and too many hungry people. <br>
### How our technology solution can help
 ---
 Introducing the platform **Hárvest Hüb** is a platform where you can check and analyze the Freshness of your Food and can Do Quality Control.
with the Help of Machine learning and a Data Tracking System, our platform will suggest your day-wise freshness level, Humidity, and Temperature level when it is going to be stale, and what Dishes you can make from a particular food item, etc.
## Our Idea 
**Hárvest Hüb** enhances awareness of sustainable food practices. Users can upload images of their fruits or vegetables to receive real-time percentage results for ***Freshness, Expiration Dates, Humidity, and Temperature***. The platform continues to provide daily updates until reaching 100% expiration, enabling users to make informed decisions about their food.

Additionally, Hárvest Hüb features a ***Recommendation system*** powered by ***Watsonx.ai***. Users now can inquire about food recipes or predict freshness levels for the next day based on room temperature conditions. This data-driven approach empowers users to determine the optimal time for consumption or repurposing, whether for cooking or blending into a smoothie.
### Our Mission 
At Harvest Hub, our mission is to revolutionize sustainable living by providing individuals with the tools and insights needed to make mindful choices about their food. We aim to reduce global food insecurity by empowering users to minimize waste and maximize the utility of their ingredients. Through real-time tracking, future predictions, and personalized recipe recommendations, we strive to create a community that actively contributes to Sustainable Development Goals (SDGs). Together, we envision a world where every plate tells a story of responsible consumption, reducing our environmental footprint and fostering a global movement towards a more secure and sustainable future.
### Market Analysis: How Harvest Hub is Unquie than Existing Solution!
  ***Harvest Hub vs Google vs Blogs/vlog on Internet***:
  1. Unlike traditional blogs and vlogs that leave you estimating freshness,**Harvest Hub** goes beyond by offering live tracking updates and future predictions 
     for your food. It's not just information; it's your personalized freshness assistant with recipe recommendations tailored to your ingredients.
  2. While blogs and vlogs merely provide information, Harvest Hub elevates your food management experience. With live tracking and predictive insights, it's your 
     go-to for understanding and utilizing food freshness. The added bonus? Customized recipe recommendations for every stage of your ingredients.
  3. Move over blogs and vlogs; enter Harvest Hub. Why settle for static information when you can have live tracking and future predictions for your food? It's not 
     just about guessing freshness; it's about having a dynamic assistant that recommends recipes based on your unique ingredients.   
## Technology implementation
### IBM AI services used
1. [Watsonx.ai](https://www.ibm.com/products/watsonx-ai): WHERE AND HOW THIS IS USED IN OUR SOLUTION
### Live demo of Watsonx.ai


## Solution Architecture
![Solution Architecture( Harvest Hub)](https://github.com/swastikaggarwal/Harvest_Hub/assets/103200961/320f3ddc-90c8-4e39-93c2-f56020c9336e)
1. The user navigates to the site and uploads an image of his/her Food (Fruits or vegetables).
2. Machine learning models will predict the Freshness of the food.
3. The Data Analytics Dashboard will monitor the Humidity, Moisture, and level and will predict how long food gonna remain fresh 
4. Watsonx.ai recommend suggestion to the user according to the freshness level such as recipes, Day-to-day predictions of the freshness of foods, etc.
## Presentation materials
### Solution demo video
### Project development roadmap
The project currently does the following things.
1. ***Real Time Statistics***: Harvest Hub offers updated real-time statistics based on accurate data collected from users of their Food,  enriching decision-making and improving cooking efficiency by providing a percentage of food freshness.
2. ***Recommendation system***: Harvest Hub offers an advanced system of recommendations adaptive to the needs of each user.Using **Watsonx.ai**, prompt services 
helps users to get answers to their specific  questions.
3. ***Real Time Monitoring***: Harvest Hub offers an advanced system of monitoring the needs of each user. Based on accurate data, this system provides specific guidance, from when to eat to how to manage Freshness, we aim to  **Reduce global food insecurity** and maximize the productivity of each crop. 
## Additional details
### How to run the project
  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>
  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view the project in the browser
  
