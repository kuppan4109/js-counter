var c=0;

function startCount()
{
  document.getElementById('txt').value=c;
  c=c+1;
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