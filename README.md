<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.853 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β29
* Fri May 21 2021 20:17:45 GMT-0700 (PDT)
* Source doc: Capstone Project SDLC
* Tables are currently converted to HTML tables.
----->



<table>
  <tr>
   <td>2020-2021 Capstone Project
   </td>
   <td>
   </td>
   <td>Desert Valley Weather
   </td>
  </tr>
  <tr>
   <td>Designer Names:
<ol>

<li>Connor Kobriger

<li>Jaxson Hunt

<li>William Gill

<li>Danny Chavez
</li>
</ol>
   </td>
   <td>
   </td>
   <td>Client Names:
<ol>

<li>Kyle Peck
</li>
</ol>
   </td>
  </tr>
</table>


<h1>Desert Valley Weather</h1>

**—**

_Planning_

_—_

This project will facilitate a weather monitoring service. It will feature live updates based on a certain day, with current, daily, hourly, and weekly weather updates and information. There is currently no existing website for this business. Many weather websites are really confusing, so we are setting out to change that and make a simple to read and easy to understand website that can be used by anyone, regardless of age or gender. Our main mission is to declutter busy weather sites and consolidate them into just the information that you need to know. We don’t want autoplaying videos or overly intrusive advertising on our site because that negatively impacts the user’s experience. Some of our competitors include popular sites like Weather.com and AccuWeather, as well as Google’s weather search. The deadline for this project is May 21st. In case we need any assistance with this project, we can contact Mr. Peck for help if necessary.

_Design for Computers & Large Displays_

_—_

![alt text](src\media\README-images\landing.png)

Above is the design of the landing page of Desert Sky Weather. The site has a dynamic color-changing background that syncs with the current time. It shows a brief overview of the current weather metrics, including the current temperature, the approximate “feels like” temperature, the humidity, and the estimated wind speed. On the top left, a slide-out navbar appears with three options: Today, the current page, Hourly, which gives a more in-depth look at certain metrics by the hour, and Weekly, which shows some metrics about each day of the week for seven days.

![alt text](src\media\README-images\hourly.png)

The next design is for the Hourly page of the site. This page shows the current temperature and location in the top left and right corners respectively. In the middle of the page, 24 block represent the 24 hours of the day, ranging from 1:00 AM to 12:00 AM the next day. Each block shows the time it represents, the temperature, and the weather condition represented by an icon, for example, a sun for a clear day. When the user hovers over any block with the cursor, it becomes a scrollable block that shows the "real-feel" temperature, the humidity, and the wind speed. The grid that contains the block is also scrollable.

![alt text](src\media\README-images\weekly.png)

The final design is the Weekly page. This page covers the high, low, and average temperatures as well as the expected weather condition, once again represented with an icon just like in Hourly. Each day is represented with a card that displays all of this information, with the date on the bottom of each card. If the window is small enough, the cards can be scrolled horizontally from left to right.

_Design for Mobile & Small Displays_

_—_

The design for the mobile sites are scaled down even further from the tablet sizing, though they remain functionally identical. The user can tap the blocks in hourly to expend them and the Weekly cards can still be scrolled from left to right.

_Design for Tablets & Medium Displays_

_—_

The design for all three pages of the site remain the same as they did on the desktop, only the dimensions of some of the parts of the page (i.e. grid size, number of blocks on screen, etc.) have been scaled down to accomodate the smaller screen size. On Hourly, the blocks go into the "hover mode" like they would on a computer when tapped.



_Development Log_

_—_

05/06/2021



*   Created and attempted to debug navbar, failed debugging
*   Installed all dependencies for react
*   Caught up on testing

05/07/2021



*   Finished navbar and made it responsive
*   Logo and favicon created, brand name also established (Desert Valley Weather)
*   Created all other component files for each aspect of the site (hourly, weekly, etc.)

05/10/2021



*   Added placeholder text to the landing page
*   Started hourly and weekly components, using placeholder information for now
*   Began to inject information from weather.json onto landing page

05/11/2021



*   Pushed all changes worked on yesterday because it was forgotten
*   Finished groundwork for both weekly.jsx and hourly.jsx respectively
*   Implemented animated background into landing page

05/12/2021



*   Created dynamic background on the landing page
*   Landing page responsive to phones, tablets, and desktops
*   Polished design of weekly.jsx

05/13/2021



*   Paused work on this project for an evaluation lesson from Mr. Peck

05/14/2021



*   Landing page finalized
*   Implemented temperatures into Hourly.jsx
*   Finished 7 boxes for each day in Weekly.jsx

05/15/2021



*   **_Weekend! Take a break! You have done good so far!_**

05/16/2021



*   **_Weekend! Take a break! You have done good so far!_**

05/17/2021



*   Converted svg icons found on the Internet to fit the color scheme of our site (white to black)
    *   Link to icon pack: https://dribbble.com/shots/1832162-Weather-Icons
*   Removed all trace of today.jsx, everything that would go in that file was consolidated to the landing page
*   Weekly.jsx styling tweaked to be more inline with the other pages

05/18/2021



*   Implemented more information in each block in hourly.jsx on hover
*   New background for weekly.jsx
*   New placeholder information with day highs and lows in weekly.jsx and a button to lead to night info 
*   Added name of the page to the Title

05/19/2021



*   Implemented accurate information about highs/lows in Weekly.jsx
*   Removed button that switches to “night mode” on Weekly.jsx
*   More hours added into Hourly.jsx, scrollable individual hours now display information properly

05/20/2021



*   Placeholder icons implemented in Weekly.jsx, will be changed soon
*   Prototyping backgrounds for hourly.jsx and weekly.jsx
*   Finished weekly.jsx page styling

05/21/2021



*   Backgrounds for hourly.jsx and weekly.jsx finalized
*   Weekly.jsx and Hourly.jsx now fully responsive
*   Project submitted

_Testing_

_—_

The final product is due on Friday, May 21st, but if the group needs the weekend to work that will be available. The project is expected to be graded on Sunday, May 23rd, 2021 at the latest.

_Delivery_

_—_

This project will be submitted to Google Classroom on Friday, May 21, 2021. Each person who worked on the project submitted the link to the GitHub repository to the site on Google Classroom alongside their individual portfolios which includes this project.

