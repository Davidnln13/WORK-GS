class Listened
{
  constructor(lisArr)
  {
    this.classesToListen = lisArr;
  }
  setUpListening()
  {
    var className = document.getElementsByClassName(this.classesToListen);
    for(var i = 0; i < className.length; i++)
    {
      classname[i].addEventListener('click', function(){track(document.getElementById(className[i].id))}, false);
    }
  }
}
