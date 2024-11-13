input1 = input("Enter the first operand:") #users first input 
operator = input('Enter operator:') #user choice operator choice 
input2 = input('Enter the second operand:') #users second input 

#numbers 

num1 = float(input1)
num2 = float(input2)

# checking operator

if operator == '+' :
 result = num1 + num2
elif operator == '-' :
 result = num1 - num2 
elif operator == '*' :
 result = num1 * num2 
elif operator == '/' :
 if num2 != 0:
  result = num1 / num2
 else:
  result = 'Can\'t divide by 0' 
else:
 result = 'invalid operator'  

# display operation
print( f"{num1}  {operator} {num2} = {result}")