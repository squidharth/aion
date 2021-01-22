/**
 * Mark time as 'Free' for all meetings that meet the following criteria:
 * 
 * 1. Number of days to include in the future: 14
 * 2. The meeting is a recurring meeting.
 * 3. The meeting has not been accepted by the owner of this script.
 *
 * 
 */
function setMeetingTimeAsAvailable() {

  const DAYS_LOOK_AHEAD = 14;
  const DAYS_MAX_LOOK_AHEAD = new Date(Date.now() + (DAYS_LOOK_AHEAD * 24 * 60 * 60 * 1000));

  var now = new Date();
  
  try {

    var calendarID = CalendarApp.getDefaultCalendar().getId();
    
    var eventList = Calendar.Events.list( calendarID, 
                                          { timeMin: new Date().toISOString(),
                                            timeMax: DAYS_MAX_LOOK_AHEAD.toISOString(),
                                            singleEvents: true,
                                            orderBy: 'startTime',
                                            maxResults: 100 });
    
    
    if(eventList.items && eventList.items.length > 0) {
      for (var i = 0; i < eventList.items.length; i++) {
        var eventItem = eventList.items[i];
        
        if( isRecurringEvent(eventItem) && 
            isCommittedToMeeting(eventItem.attendees) == false &&
            isMarkedAsBusy(eventItem) ) {
              
              eventItem.transparency = 'transparent';
              Calendar.Events.update(eventItem, calendarID, eventItem.id);
              Logger.log("Event = " + eventItem.summary + "    " + eventItem.start.dateTime);
        }
      }
    }
    
  } catch (e) {
    Logger.log('Someting bad has happend ' + e);
  }
}

function isRecurringEvent(eventItem) {
  return eventItem.recurringEventId != undefined;
}

function isMarkedAsBusy(eventItem) {
  return eventItem.transparency == undefined;
}

function isCommittedToMeeting(attendeeList) {

  // No point proceeding if there are no attendees
  if(attendeeList == undefined) {
    return false;
  }

  return attendeeList.some(function(attendee) {
    return attendee.self == true && attendee.responseStatus === 'accepted';
  });

}



