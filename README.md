# Trip Buddy

## How we work

### Check in (how are you? How do you feel about working on this larger project?)

CH - Feeling ok. Excited to pull something together with a bit more time. Motivation has been hard the last few weeks with baby being more demanding. Looking forward to finishing strong!
Josh - Struggling with motivation, looking forward to finish, hav ing more time to complete
Lei - I am excited. I was expecting more team members than group porject in fianl project.
Joy - struggling a bit with motivation too. 

### Wellbeing (when I'm stressed ... I need...) (general needs eg. kids, illness, sleep etc)

CH - Sometimes I need to just duck off to sort things out with kids. My availability is sporadic. 
All - sometimes too many people solving problems. Sometimes stress eating, or napping!

### Expectation setting and agreements (what do we each want out of this time, what hours will we keep, what do we do when conflict arises, how will we communicate, especially what hours work will happen over the weekend)

CH - Looking forward to finishing strong and making a great product. Hard to forecaset my timing availability, but during the day, and week nights. Weekends are harder.


Conflict Resolution Plan - 
1. Address the issues, not attack the person
2. Be open to other peoples points of view / perspective
3. Communicate respectully, listen actively, listen and loop
4. Notice signs of conflict, eg. decreased productivity, communication breakdowns, increased tension. 
5. Identify root cause of conflict. 
6. Schedule meetings times, agree roles


### How will you make decisions together? How will you handle conflict?

CH - Hoping to take some direction from Product Owner about what features they are looking for. 
All - Agree on concensus, different points of view, joint decision making. 

### How will you, individually and as a team, get the help you need both technically and non-technically?

CH - Reach out for help when it's needed. Communicate openly, use the help desk. 

### How will you make sure everyone feels included?

CH - Regular check ins. Being open and transparent about how we are feeling and whats going on. 

### How will you decide who needs to be present for which conversations

CH - up to the individual I think. Ask yourself - do I need to be here, or am I more productive elsewhere. 

### How will we work (what roles and what agile rituals will we use etc)

CH - Lessons from earlier projects! 1) Start early! 2) Merge regularly, branches working before merging into develop. 3) Chat only on text channel, not voice channel. 4) I prefer to work horizonally (1 person all CSS or all backend etc.) as this seems to help with separation of duties / files / merge conflicts. 

In general we prefer horizontal, but can be flexible. 

### How will you survive (Will you eat together? How will you break the tension? What is your fun times plan?)

Heads up. Smile, open to others' ideas, support eachother. End goal in mind!

Have fun, enjoy the process!

## Trip Buddy 







### What is your MVP? How much work do you think it will take to achieve it?

Travel planner
- Use authentication
- Trip Management Section - create / manage / add location
- Stretch - being able to share itinerary with other users. 
- API - fetch and display accomodation booking / activities

STRETCH - Flight Planning

Components
Home Page / Dashboard - Existing itineraries + Click to add new Attractions
Attractions Search Page - incl. food, sightseeing, theme parks etc. 
Accomodation Search Page 
Itinerary Page - create / manage / add Attractions and Accomodation


### What tech will you be using? Is there anything you need to research?

APIs - sourcing attractions


### GitFlow. How will you arrange your work?

CH - have set up 'develop' branch, as the one we will merge WORKING features into. Merge regularly.

### Roles. Which will you use? Who will be accountable for which areas?

CH - Happy with any

### What might a day look like? What agile rituals will happen? When during the day will you do the hard tech? Will you go outside as a team?

CH - Plan out Tasks, Assign, Review regularly

### Documentation. Set up a repo and a readme, start adding things to it

CH - Have setup https://github.com/karaka-2024/tripBuddy

### Set up a kanban board (To Do, Up Next, In Progress, Done)

CH - Have setup at bottom of existing MIRO board https://miro.com/app/board/uXjVKVuYUQA=/

### Draw your wireframes, make some user stories, do some DB diagrams, global store plans, etc.

CH - Just putting some initial thoughts down:

- Users ( STRETCH multiple) have Trips ( multiple) ie. One TripID could be edited by multiple users? (share with friends)
- Trips have (multiple) Places (restaurants, sightseeing, hotels )

So the tables would be: 
- User
- Trips
- Places

Joining tables:
- Users-Trips
- Trips-Places


























# Boilerplate: Fullstack with Sass

### Setup

#### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* frontend routing via react-router
* an auth0 setup waiting to be configured
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Vitest and testing library
* configuration for server-side debugging in VS Code
* configuration for preprocessing css with tailwind support

#### Installation

###### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

###### **From the command line**

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-fullstack)
