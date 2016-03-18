function boardgamenightemail() {
 var calendar = CalendarApp.getCalendarById('crkkh6hgfvhi2caqagqcea5ef8@group.calendar.google.com');
 Logger.log('The calendar is named "%s".', calendar.getName());
 
 var now = new Date();
 var sevenDaysFromNow = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
 var events = calendar.getEvents(now, sevenDaysFromNow);
 Logger.log('Number of events: ' + events.length);
  
 for(var i=0; i<events.length; i++) {
   if(events[i].getTitle() == "Board Game Night") {
     Logger.log('Sending e-mail!');
     GmailApp.sendEmail("p-space@googlegroups.com", "Board Game Night", events[i].getDescription());
   }
 }
}
