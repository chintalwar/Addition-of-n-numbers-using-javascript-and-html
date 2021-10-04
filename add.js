var i=0, no, temp,sum=0;
function enter()
{
  no = parseInt(document.getElementById("totalNo").value);
  if(no)
  {
    document.getElementById("numberVal").innerHTML = no;
    document.getElementById("tmep").innerHTML = i+1;
    i++;
    temp = document.getElementById("NoOfEntry");
    temp.style.display = "block";
  }
}

function add()
{
  if(i==no)
  {
    
    temp = document.getElementById("result");
    temp.style.display = "block";
  }
  num = parseInt(document.getElementById("no").value);
  if(num)
  {
    sum = sum + num;
    document.getElementById("no").value = null;
    document.getElementById("tmep").innerHTML = i+1;
    i++;
  }
}
function result()
{
  document.getElementById("add").value = sum;
}