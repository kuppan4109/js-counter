var c=0;
document.getElementById('txt').value=c;
function startCount()
{
  c=parseInt(document.getElementById('txt').value)
  if(c<10 && c>=0)
  {
  c=c+1;
  }
  document.getElementById('txt').value=c;
}

function stopCount()
{
    if(c>0)
    {
c=c-1;
document.getElementById('txt').value=c;
    }
}

function resetCount()
{
c=0
document.getElementById('txt').value=c;
}
