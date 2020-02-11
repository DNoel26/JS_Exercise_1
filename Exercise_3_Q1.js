let side_1_length, side_2_length, side_3_length, a, b, c, triangle_type;

side_1_length = a = parseFloat(prompt("Please enter the length of side 1 for triangle"));

side_2_length = b = parseFloat(prompt("Please enter the length of side 2 for triangle"));

side_3_length = c = parseFloat(prompt("Please enter the length of side 3 for triangle"));

// For Kadeem: Is there any way to group all three sides under one variable? E.g. any_side = side_1_length or side_2_length or side_3_length?

if(a < 0 || b < 0 || c < 0)
{
	alert("This is not a valid triangle");
}

else
	if(a != b && a != c && b != c)
	{
		triangle_type = "a scalene";
    
    	confirm(`This triangle is ${triangle_type} triangle because none of its sides are equal to each other. Press ok to print`);
	}

	else if((a == b && a != c) || (a == c && a != b) || (b == a && b != c) || (b == c && b != a) || (c == a && c != b) || (c == b && c != a))
	{
		triangle_type = "an isosceles";
    
    	confirm(`This triangle is ${triangle_type} triangle because two (2) of its sides are equal to each other. Press ok to print`);
	}

	else if(a == b && a == c && b == c)
	{
		triangle_type = "an equilateral";
    
    	confirm(`This triangle is ${triangle_type} triangle because all three (3) of its sides are equal to each other. Press ok to print`);
	}	
