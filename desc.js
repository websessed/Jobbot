
/* 
v1

job format: 
  -title 
  -company
  -type 
  -link 
  
  source → weworkremotely, remoteok


welcome menu: 
  "welcome! what do you want to do?"
  [latest jobs] [saved jobs] [current plan]
*/

/*
commands list

  /start start the bot & show welcome menu
  /fetch fetch jobs of the day → options: save, apply, skip
  /saved display saved jobs → options: remove, apply
  /lsplan list current plan features → upgrade to premium prompt
  /doc display bot tutorial / guide for users
  /addskills add new skills/tools (comma-separated) → appends to existing skills
  /updateskills replace all existing skills with new list
  /viewskills view current skills stored in the bot
  /setfilters set advanced filters (location, job type, work arrangement, salary range)

*/ 

/*
basic features (free)
  - jobs per day: 3 jobs/day
  - save jobs: save interesting jobs to view later
  - job alerts: simple notifications when new jobs appear
  - basic filters:
      - 1 location or 1 work arrangement (remote / on-site)
      - 1 job type (full-time / part-time / contract / freelance / internship)
  - commands: /start, /fetch, /saved, /lsplan, /doc, /addskills, /viewskills (skill matching not applied)

premium features ($2/month or $100 lifetime)
  - jobs per day: unlimited jobs (1 job/hour, ~24/day)
  - advanced filters:
    - multiple locations (cities, countries)
    - multiple work arrangements (remote, on-site, hybrid)
    - multiple job types
    - salary range (min & max)
  - skill matching: match user-entered skills to job descriptions → rank jobs by relevance
  - job alerts: custom alerts based on filters + skills
  - commands: all basic commands + /updateskills
  - upgrade flow: stripe integration → webhook → database → premium features unlocked

*/





