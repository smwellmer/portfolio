# Project Overview
## Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.
|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete
## Project Description

    For my portfolio site:
    - sophisticated, but fun look
    - "hover" events
    - clean layouts, easy to read and locate
    - projects move vertically when going from desktop to mobile
    -

    I like the feel of this site:
    [https://www.desbfittraining.com/]


## Portfolio I want to Emulate
Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.
    Link To Site                | One Thing I'd Like To Incorporate | 
|   -------------               |            -------------          |
| [https://www.frolycoding.com/]| (simplistic and fun aesthetic)    |
|[https://coryhughart.com/]     | (moving background animations)    |
| [https://sebkay.com/]         |    (layout of the projects)       |
---


## Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  
- [Mobile](https://imgur.com/7oOGkCY)
- [Desktop](https://imgur.com/5aCKs0i)
Wireframing Resources:
- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)



## Time/Priority Matrix 
[Link](https://imgur.com/kw9S97R)
Include a full list of features that have been prioritized based on the `Time and Priority` Matrix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 
Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  
Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 
Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 


### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  


MVP and PostMVP spreadsheet:
https://docs.google.com/spreadsheets/d/1noRhtCXd-YiHVrazrl5HJSBNVDtSQgKxdzsnAXZ81TA/edit?usp=sharing

## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.
#### MVP

Component	   |  Priority |	Time Est.  |   Actual time
Flexbox- Navbar	    H	           3	           2
Hamburger	        M	           2	           2
JSON setup	        H	           2	           1
GRID setup	        H	           3	           3
Contact Form	    L	           2	           0.5
Project Cards	    M	           3	           2
Responsive Design	H	           3	           3
Social Media Icons	L	           1	           0.5
Buttons	            L	           1	           0
CSS Design      	M	           4	           6
			
			
	                     Total:    24	            20



#### PostMVP

Component	        | Priority	| Time Est.	| Comments
Img hover event	        L	           3	    1
Navbar hover event	    L	           3	    0
animated background	    M	           3	    1			
			
	                        Total:     9	    2



## Additional Libraries
 jQuery

## Code Snippet
This is the portion I wrote to make the hover effect on my personal photo.

.headshot{
    height: 8em;
    width: 8em;
    border-radius: 50%;
    object-fit: cover;
    transform: translate3d(0px, 0, 0) scale(1.2);
    transition: all 0.35s;
}
.headshot:hover{
    opacity: .5;
    transform: translate3d(0px, 0, 0) scale(2);
}


## Issues and Resolutions
    I struggled with incorportating some items after the rest of the site was built.
    Example: I wanted to change my hamburger to have a dropdown menu, but when I was 
    attempting that, my projects cards disappeared. I did not complete the dropdown
    menu portion.