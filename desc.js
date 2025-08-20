
/* 
v1

job format: 
    -title 
    -company
    -type
    -link 

welcome menu: 
    "welcome! what do you want to do?"
    [latest jobs] [saved jobs] [current plan]

commands: 
    -/start - starts the bot 
    -/fetch - jobs of the day (3) → save, apply, skip 
    -/saved - display saved jobs → remove, apply 
    -/lsfeature - list current plan features → basic, premium 

basic features: 
    -3 jobs/day 
    -save jobs 
    -job alerts 

premium ($2/month): 
    -unlimited jobs
    -advanced filters (loation, type, salary)
    -skill matching
    
    User clicks upgrade → Stripe → Supabase → Bot unlocks features


Flow Summary:
    User clicks /start.
    Bot sends welcome message + buttons.
    User clicks /fetch or button → bot shows jobs.
    Free users see limits, premium users get full access.
    Optional upgrade prompt shows naturally in flow.
*/