Introduction to Python
======================

This guide will cover the absolute basics to start learning python 
First ensure you have python installed on your computer, this can be done by opening up a terminal
or command line on Windows and entering `python`. You should see which version of python you're running
appear. On Linux you will probably have to specify which version of python you want you can do this by 
typing `python3` to make sure you're running the latest version.

*Example Output*
```terminal
shailpa@SHAILPA-M-939W ~ % python3
Python 3.7.3 (default, Dec 13 2019, 19:58:14) 
[Clang 11.0.0 (clang-1100.0.33.17)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

If you have python this command will throw you into the python shell, you can escape by entering the 
break key which is normally set to CTRL + D on most systems by default.

The python shell evaluates python code one line at a time, this is known as a REPL *(Read Evaluate Print Loop)*.
The python shell is ideal for quickly testing code, but note that once you exit everything will be lost.

## Your first program! 

For some reason, everyone's first program when learning a new language is to write a program that says "Hello World". 
A key reason towards python's success is how little code you need to write to quickly solve a problem. In our case all
we'll need is a single line of code that uses python's `print` function.

*Hello world in the Python Shell*
```python
>>> print("Hello World")
Hello World
>>> 
```

Notice the set of quotes used inside the print function. This is called a `string`, a `string` is representation of text inside a program. 

## Variables

A `string` is really a type of variable, just like in math a variable is a place holder for some value. We can create variables by giving a name and using the equal sign to assign a value to it. Here's another method of printing "hello world" using variables.

```python
>>> my_message = "Hello World!"
>>> print(my_message)
Hello World
>>>
```

Notice why strings need quotes now, otherwise python wouldn't be able to tell the difference between a string and a variable. Variables must be one word and cannot be part of python's syntax i.e you cannot name a variable print(), otherwise python will think you're trying to call the print function instead!

Python's variables are used to express data to model the world. There are a couple of different *types* of data we can express.

| Type | Example | Meaning |
|------|---------|---------|
|Integer | x = 7 | Represents an integer, can be positive or negative | 
|Floating Point | x = 6.5 | Represents a decimal number, although technically a different type you can work with it the same way as an integer |
|Strings| x = "Shail" | Represents text |
|Boolean| x = False | A boolean can either be `True` or `False` which is useful for comparisons |

If you're unsure what type a variable is in your code, you can use the `type` function

```python
>>> foo = "Koalas"
>>> type(foo)
<class 'str'>
>>> foo = 25.4
>>> type(foo)
<class 'float'>
>>> 

```
These are some basic types we'll work with for now. Notice that you can assign and display all these values the same way and the same variable can be used multiple times, this is called re-assigning. 

```python
>>> x = 7
>>> print(x)
7
>>> x = 6.5
>>> print(x)
6.5
>>> x = "Shail"
>>> print(x)
Shail
>>> x = True
>>> print(x)
True
>>> 
```

It wouldn't be useful to only store data unless we could operate on it. There are some common operations you can expect such as basic arithmetic on numbers.

*Multiple variables can be printed by comma separating them inside of the print function*

```python

>>> x = 2
>>> y = x + 2
>>> print( "x is ", x, "y is ", y )
x is  2 y is  4
```

Other operators include `+ - / *`.
Notice in the above example we create a new variable `y` that is equal to `x + 2`. This will leave the value of `x` unchanged.
If we wanted to add 2 to x, we can write :
```python
x = 2
x = x + 2
```

However, this is a common action in python and so a quickhand is offered.

```python
x = 2
x += 2
```

This chunk of code is the same as the above, `x` now contains the value of 4. You can put an equal sign after any operators to perform the action on the left hand side variable. 

Some operators work on other types, for example the `+` operator can be used to combine two strings together
```python
>>> part1 = "Hello"
>>> part2 = "World!"
>>> msg = part1 + " " + part2
>>> print(msg)
Hello World!
>>> 
```

Try and test what different operations do with different types, you can tell when something isn't allowed when python shows you an error message,
also known as a *stacktrace*

```python
>>> test = "Hello!"
>>> test = 4 + test
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> 
```

A traceback is thrown whenever your program runs into an issue, essentially this is a list of things your program did until it crashed. Since our program is only 1 line long theres a single step where we get the error message `TypeError: unsupported operand type(s) for +: 'int' and 'str'`. 
Although this message is difficult to read you know which line the error occured at and the specific error class, in this case `TypeError`. If the message still doesn't make sense a quick online search will lead you to an answer as well.

## Running a python File

Its not very useful if all the code we write gets erased after we close the python shell. Programs are typically written in files and executed 
by the python interpreter. This method is similar to shell except we write our code into a text file first.

First create a new file, it can be called anything must have the `.py` extension. This allows your text editor too see what type of file this is and provide syntax highlighting.

Here is a file I named `hello.py`
```python
print("Hello World!")
```

After saving the file, from my terminal I can execute it by typing "python" and then the filename

```
shailpa@SHAILPA-M-939W introPy % ls    
hello.py
shailpa@SHAILPA-M-939W introPy % python3 hello.py 
Hello World!
shailpa@SHAILPA-M-939W introPy % 
```

Now, all of the output is displayed into your terminal or CMD. Make sure you're in the same directory as your textfile. On Linux/Mac you can confirm by typing `ls` to list all files in the current directory and use `cd` to change to a different directory. On windows you can use the `dir` command to list all files and `cd` to change directories. 


## Getting User Input 

A program usually needs to interact with the outside world to be useful, one way to do this is to ask the user for input. This can be done with 
the `input` function

The `input` function accepts a string which will shown as a prompt to the user. The `input` function returns a value which we can store into 
a variable.

```python
user_name = input("Enter your name")
print("Hello " + user_name)
```
Results in

```
shailpa@SHAILPA-M-939W introPy % python3 hello.py 
Enter your nameShail
Hello Shail
shailpa@SHAILPA-M-939W introPy % 
```

Notice the prompt is displayed in the same line as when the user types, one way would be to add a space to make it easier to read.
Most programs use a newline to indicate its the user's turn to start typing. There's no text representation of what a newline looks like 
so we use a special character to represent it, called a newline char : `\n`.

If we run this code with the newline at the end of our string we'll get this:
```python3
user_name = input("Enter your name\n")
print("Hello " + user_name)
```

```
shailpa@SHAILPA-M-939W introPy % python3 hello.py 
Enter your name
Shail
Hello Shail
shailpa@SHAILPA-M-939W introPy % 

```


The type of any value from the `input` function will always be a string. If we wanted a number we would need to tell python to
convert the string representation to an actual number. For example `2` is a string to python and we won't be able to perform 
numeric operations on it. The process of converting one type to another is called *casting*.

```python
num = input('Enter a number\n')
print(type(num))
num = int(num)
print(type(num))
num = str(num)
print(type(num))
```

```
Enter a number
10
<class 'str'>
<class 'int'>
<class 'str'>
```


## Conditionals

Out of all the types in python `Booleans` are usually the strangest to people.
*Booleans are called that after George Boole, a logician who invented Boolean Algebra in the 1800s, his work was fundamental to the development of the computer!* 

We typically don't declare `Booleans` directly but instead use their implicit values when making comparisons. For example 
we can compare two variables with the double equal sign operator : `==`. This operation takes a variable on the left and right side and 
returns a `Boolean`, True if they're equal, false otherwise.

E.g:

```python
>>> print( 2 == 2 )
True
>>> print ( "Test" == "test" )
False
>>> 
```

There are other comparison operators we can use as well.

|operator|meaning|
|--------|-------|
| ==     | compares if equal |
| >     | compares if greater than |
| >=     | if greater than or equal to |
| < | less than |
| <= | less than or equal to |

The real importance of a boolean is when used in a condition or *if statement*.
An if statement takes a boolean expression and executes the block of code under it if the boolean is true.


```python
my_bool = 2 > 3
if (my_bool):
    print("2 is greater than 3!!!")

```

Python uses indents to indicate a block of code. You can use the TAB key to start an indent. You can put as many lines of code into a block as you want, in the above example everything within that indent or block will be executed if the variable `my_bool` is true, which in this case it is. 

Instead of creating a variable to store a result we can perform the comparison within the if statement itself.

```python
if (2 > 3):
    print("2 is greater than 3!!!")
```


We use `else` statements which execute when the above if statement is false. Note `else` statements can only be placed directly after an `if` conditional.

```python
if ( 2 > 3):
	print("2 is greater than 3!!!")
else:
	print("Oh no if you're reading this something has gone very wrong")
 
```

`elif` statements work like `else` statements but accept a boolean and will only execute their block of code if the above statement is false and their boolean expression is true.

```python
if ( statement1 ):
	# CODE
elif ( statement2 ):
	# I'll only run if the statement1 is false!
else:
	#I'll only run if statement2 is false!
```

For simple comparisons like this, its easier to read.
Here is a more practical example of using if statements that collects information about a user

```python
name = input("Please enter your name\n")
response = input("Do you have an email address, (enter yes or no)\n")

if ( response == "yes" ):
    email = input("Please enter your email\n")
elif ( response == "no" ):
    # do nothing
    pass
else:
    print("I didn't quite understand that")


print("Your name is :", name)

if ( response == "yes" ):
    print("Your email is :", email)

```

```
shailpa@SHAILPA-M-939W introPy % python3 hello.py
Please enter your name
shail
Do you have an email address, (enter yes or no)
yes        
Please enter your email
foo@foo.foo
Your name is : shail
Your email is : foo@foo.foo
```


Booleans have two operators, `and` and `or`
`and` takes two booleans and returns True if both are True, it will return False otherwise

`or` takes two booleans and returns True if either or both are True, and False if both are False.


```python

False and False #false
True and False #false
True and True #true

False or False #false
True or False # true
True or True #true

```

The `not` operator takes a boolean and flips it to its opposite

```python
not False #True
not True #False
```

## Loops 

One of the key advantages of programs is they can do tasks repeatedly. Say for example we wanted to print all even numbers for 0 to a 
range. Or if we're prompting the user, keep prompting the same response until they give us something we understand.

There are two main types, `for` loops and `while` loops. For loops start at an index and go up to a value (exclusive by default). A while loop takes a condition and loops as long as that condition is True.

Here's the syntax for `for` loops. 

```python
#print the numbers from 0 to 4


#i is just a variable name, it can be anything
for i in range(5):	#remember up to but no including!
	print(i)

#print the numbers from 4 to 6
for var in range(4,7):
	print(var)

#print 'hi' twice
for i in range(2):
	print('hi')

```

We don't need to use the variable if we don't want but it will take the place of the current value of the range we gave the loop.
Even though the numbers inside of the range are hardcoded we could replace them with variables as well.


```python

counter = 0
while( counter < 10):
	print(counter)
	counter += 1

```

The while loop will run as long as the variable "counter" is under 10, so this will print out the values 0 to 9.
Notice what will happen if we removed the `counter += 1` from our program, the loop will never terminate and the program
will print out 0 forever!


**Printing Even Numbers**

This code uses for loops to print out all even numbers from 0 to a user entered value

```python
upper = input("Enter a number to count up to\n")
upper = int(upper)

print("The even numbers from 0 to", upper, "are")

for counter in range(upper):
    #the definition of an even number is :
    #An even number is an integer that can be divided by two and remain an integer or has no remainder

    remainder = counter % 2

    if ( remainder == 0 ):
        #found an even number! print it
        print( counter )

```

Will result in 
```
Enter a number to count up to
10
The even numbers from 0 to 10 are
0
2
4
6
8
```

** User input correction **

The code used to collect user info has been modified to keep asking the user until they say yes or no, something our program can
understand.

```python
name = input("Enter your name\n")
response = input("Do you have an email (yes/no)?\n")

while(response != "yes" and response != "no"):
    response = input("Do you have an email (yes/no)?\n")


if (response == "yes"):
    email = input("Enter your email\n")

print("Your name is " + name )

if (response == "yes"):
    print("Your email is", email)

```

Notice the specific condition we gave to the while loop, it can be helpful to read the statement in this way:
If the response is not equal to "yes" and the response is not equal to "no". Then ask the user again and loop.

```
Enter your name
shail
Do you have an email (yes/no)?
foo
Do you have an email (yes/no)?
help
Do you have an email (yes/no)?
yes
Enter your email
foo
Your name is shail
Your email is foo
shailpa@SHAILPA-M-939W introPy % 
```


## Lists 

Lists allow us to collect values and variables into a data structure.
Python indicates lists by square brackets `[` `]`.

```python
#basic list usage


#make a list
my_stuff = [ 'a', 'b' ]
#append to it
my_stuff.append( 2 )

#access information about it
print( len(my_stuff) )  #number of elements in the list
print ( my_stuff[ 0 ] )	#called indexing, access position 0 of the list
print (my_stuff)

```

```
3
a
['a', 'b', 2]
```

Iterating through lists, python `for` loops have a special syntax for lists

```python
my_list = ['a', 'b', 1 , 2, 3]
for i in my_list:
	print(i)
```

```
a
b
1
2
3
```

In fact a string is just a list of individual letters

```python
my_name = "shail"
print("First letter : ", my_name[0] )
print("Length : ", len(my_name) )

for x in my_name:
    print(x)

```

```
First letter :  s
Length :  5
s
h
a
i
l

```

## Functions

Previously we've been writing functions that are included into python by default, we can also write our own functions.
The advantage of a function allows us to wrap a block of code into one place. This allows us to organize our code better
and also helps us reduce the amount of code we write.

```python
def example()
	#code
	#code

example()
 
```

Heres the basic syntax above.
Notice a function needs to be defined above where it gets called from.


When python calls a function it will jump execution from wherever the function gets called to wherever the code block is.
Functions can accept and return values just like the function's we've been calling.

```python
def isEven( number ):
	status = number % 2
	return status == 0

def isOdd( number ):
	return not isEven( number )
```

Here is an example of using functions above. The isEven function takes a number which is stored in the variable also named "number"
and returns a boolean value if that value is even or not. The isOdd function uses the isEven function and takes advantage of python's
not operator and inverts whatever the isEven function returns. Since a function is either even or odd.

We can then use this function like any other 

```python
print( isEven( 5 ) )
print( isOdd ( 5 ) )
```


**[Main Menu](index.md)**





