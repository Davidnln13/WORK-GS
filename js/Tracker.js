class Tracker
{
    constructor(id, date, htmlName)
    {
      this.name = id;
      this.time = date;
      this.type = htmlName;
    }
    logThis()
    {
      console.log("at " + this.format_date(this.time) + " User pressed " + this.name + " which is of type " + this.type);
    }
    logAll(trackArr)
    {
      for (var i = 0; i < trackArr.length; i++)
      {
        console.log("at " + this.format_date(trackArr[i].time) + " User pressed " + trackArr[i].name + " which is of type " + trackArr[i].type);
      }
    }
    trackerString(trackArr)
    {
      var trackStrArr = [];
      for(var i = 0;  i < trackArr.length; i++)
      {
        trackStrArr.push(JSON.stringify(trackArr[i]));
      }
      return trackStrArr;
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
