class Listened
{
  constructor()
  {

  }
  setUpListening()
  {
    //list of children of the body
    var docBodyChildren = document.getElementsByTagName("body")[0].children;
    console.log(docBodyChildren);

    this.recursiveCheck(docBodyChildren);

  }

  recursiveCheck(docBodyIn)
  {
    //for every element in the body
    for (var i=0; i<docBodyIn.length; i++)
    {
      //if it has at least 1 child
      if(docBodyIn[i].children.length > 0)
      {
        //recursively pass in that child to this method
        //check if it has children
        this.recursiveCheck(docBodyIn[i].children);
        //console.log("going to child of", docBodyIn[i].id);
      }
      else
      {
        try
        {
          //if the element has no children try add an addEventListener to it which will only work if it has an id which is what we want
          //  elementsToTrack.push(docBodyIn[i].id);
          if(docBodyIn[i].id !== null)
          {
            document.getElementById(docBodyIn[i].id).addEventListener("click", function(){track(this.id)} );
            console.log("adding tracker to ", docBodyIn[i].id);
          }
        }
        catch (e)
        {
          //if it doesnt have an id it doesnt need to be tracked
          //console.log("element doesnt have an id so doesnt need to be tracked");
        }
      }
    }

   }

}
