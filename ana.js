var trainNumber = 1;
var totaltrains=12;
var charCounter = 65;

while(trainNumber<=8)
{
	alert("train#" + trainNumber + "is running");
	trainNumber++;

}

for(var i = trainNumber; i <= totaltrains; i++)
{
	if (i < 8) 
	{
		alert("train# " + i + " is running");
	} 
	else
	{
		if (i == 8) {
			for(var j = 1; j <= 4; j++,charCounter++)
			{
				alert("train# " + i + " " + String.fromCharCode(charCounter)+ " is special");
			}
			i = 9;
		}
		alert("train # " + i + " is not operational");
	}
}


