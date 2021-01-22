# Aion

## INTRODUCTION
Are you part of the corporate drone-force who is inundated with recurring
meetings?  Do you use Google Calendar as your scheduling tool? Are you looking
to unblock your time in your calendar for meetings that you have no intention to
attend? Read on.

Project Aion provides utility functions that extend Google Calendar capabilities
to help you regain control of your calendar.

The programs are written in Google Appscript.


## UTILITIES
All of the functions are stored in the file named Code.gs.  There are no
additional dependencies.

### setMeetingTimeAsAvailable
This function sets time as "Free" for a set of recurring meetings to allow team
members to better understand availability and to have greater choice to schedule
single instance (and hopefully more productive) meetings. The default visibility
status in Google Calendar is "Busy".  The web interface allows a user to change
it to "Free" but it has be done manually for each instance.  There are no
settings that allow you to set the default visibility for meetings to "Free".
This function helps to overcome this limitation by setting the visibility for a
set of meetings.  Users can schedule this function to run on a recurring basis
using Timers in the Google Workspace.


## SETUP

1. Create a project

    1. Navigate to the [AppScript dashboard](https://script.google.com)
    2. Select "New project"
    3. Rename the project to "Aion" (or any other name of your choice)

2. Copy all of the source code

    1. Select all of the contents in [Code.gs](#) and copy it to the file with
       the same name in your project.

3. Set a schedule for recurring execution

    1. Expand the navigation menu on the left and select "Triggers"
    2. Select "Add Trigger"
    3. Make sure the value for the field "Choose which function to run" is set
       to "setMeetingTimeAsAvailable"
    4. Set the appropriate interval values based on your preference
    5. Select "Save"


## FREQUENTLY ASKED QUESTIONS

### Why is this project named "Aion"?
Aion (Greek: Αἰών) is a Hellenistic deity associated with time. See [Aion (deity)](https://en.wikipedia.org/wiki/Aion_(deity)).

### Are there other utilities that are planned?
Not at this time.  But check back periodically.
