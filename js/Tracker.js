class Tracker
{
    constructor(id, date, htmlName, userID)
    {
      this.name = id;
      this.time = date;
      this.type = htmlName;
      this.userID = userID;
    }
    logThis()
    {
      console.log("at " + this.format_date(this.time) + " User " + this.userID + " pressed " + this.name + " which is of type " + this.type);
    }
    logAll(trackArr)
    {
      for (var i = 0; i < trackArr.length; i++)
      {
        console.log("at " + this.format_date(trackArr[i].time) + " User " + this.userID + " pressed " + trackArr[i].name + " which is of type " + trackArr[i].type);
      }
    }
    format_date(d)
    {
     var dformat;
      dformat = [d.getDate(),
               d.getMonth()+1,
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds(),
               d.getMilliseconds()].join(':');
     return dformat;
    }
}
