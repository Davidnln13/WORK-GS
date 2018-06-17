class Listened
{
  constructor()
  {

  }
  setUpListening()
  {
    var docBody = document.getElementsByTagName("body")[0];
    console.log("Testing");
    console.log(docBody);

    var docBodyChildren = document.getElementsByTagName("body")[0].children;
    console.log(docBodyChildren);

  //  this.recursiveCheck(docBody);

  }
  recursiveCheck(docBodyIn)
  {
    console.log(docBodyIn);
    for (var i=0; i<docBodyIn.length; i++)
    {
      if(docBodyIn[i].hasChildNodes())
      {
        //	console.log(elementList[i].children)
      }
      console.log(docBodyIn[i]);
    }
  }
}
