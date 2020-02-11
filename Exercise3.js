let day, month_number, year, leap_year, date;

day = parseInt(prompt("Please enter the day of the month in the format dd/mm/yyyy"));

if(day > 0 && day < 10)
{
	day = "0" + day;
}

month_number = prompt("Please enter the month of the year in the format dd/mm/yyyy").toUpperCase();

if(month_number == "JANUARY" || month_number == "JAN" || month_number == 1)
{
	month_number = "0" + 1;
}

else if(month_number == "FEBRUARY" || month_number == "FEB" || month_number == 2)
{
	month_number = "0" + 2;
}

else if(month_number == "MARCH" || month_number == "MAR" || month_number == 3)
{
	month_number = "0" + 3;
}

else if(month_number == "APRIL" || month_number == "APR" || month_number == 4)
{
	month_number = "0" + 4;
}

else if(month_number == "MAY" || month_number == 5)
{
	month_number = "0" + 5;
}

else if(month_number == "JUNE" || month_number == "JUN" || month_number == 6)
{
	month_number = "0" + 6;
}

else if(month_number == "JULY" || month_number == "JUL" || month_number == 7)
{
	month_number = "0" + 7;
}

else if(month_number == "AUGUST" || month_number == "AUG" || month_number == 8)
{
	month_number = "0" + 8;
}

else if(month_number == "SEPTEMBER" || month_number == "SEP" || month_number == 9)
{
	month_number = "0" + 9;
}

else if(month_number == "OCTOBER" || month_number == "OCT")
{
	month_number = 10;
}

else if(month_number == "NOVEMBER" || month_number == "NOV")
{
	month_number = 11;
}

else if(month_number == "DECEMBER" || month_number == "DEC")
{
	month_number = 12;
}

year = parseInt(prompt("Please enter the year in the format dd/mm/yyyy"));

leap_year = year % 4;

date = day + "/" + month_number + "/" + year;

if(day < 1 || day > 31)
{
	alert(`The date ${date} is invalid`);
}

else if(month_number < 1 || month_number > 12)
{
	alert(`The date ${date} is invalid`);
}

else if(year < 1000 || year > 9999)
{
	alert(`The date ${date} is invalid`);
}

else if(day > 28 && month_number == 2 && leap_year != 0)
{
	alert(`The date ${date} is invalid`);
}

else if(day > 29 && month_number == 2 && leap_year == 0)
{
	alert(`The date ${date} is invalid`);
}

else if(day > 30 && month_number == 4)
{
	alert(`The date ${date} is invalid`);
}

else if(day > 30 && month_number == 6)
{
	alert(`The date ${date} is invalid`);
}

else if(day > 30 && month_number == 9)
{
	alert(`The date ${date} is invalid`);
}

else if(day > 30 && month_number == 11)
{
	alert(`The date ${date} is invalid`);
}

else
alert(`The date ${date} is valid`);
