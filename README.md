[![Say 
Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/lifebalance@gmail.com)

Also see [this](https://people.ok.ubc.ca/ylucet/DS/Huffman.html)
![img](https://i.imgur.com/5eRciER.jpg)

# Huffman Encoding Visualizer
Originally assigned as a group project for the Baylor University undergraduate 
algorithms course, we decided to take it one step further. We wanted to create 
something that not only met the project requirements, but also exceeded 
expectations, resulting in a project that is open source, useful, and 
innovative, plus looks mighty fine. Created using only JavaScript, HTML, and 
CSS, the project can be run locally with the source code, or on any web server, 
because it has no server-side dependencies.

## How to use
There are multiple ways to use our Huffman Encoding Visualizer. First, is to 
simply type your input into the text box, and watch the tree, bits, and 
compression percentage dynamically change with each character. Or, if you want, 
you can drag and drop a text file into the text box, and the Visualizer will 
automatically populate the text field, as well as build the tree, display the 
bits, and show the compression percentage for the file you dropped. After doing 
either of these, if you want to keep the encoding that you just created, you 
can click on the "Download" button, and your browser will initiate a download 
of the encoded file. However, your typical text editor will not be able to 
correctly interpret this file, because of its encoding. If you wish to see the 
decoded contents of your encoded file, you may drag and drop the file into the 
bits display box, or use the "Upload" button, and like magic, everything will 
be populated!

_NOTE: This project is only tested to work on Google Chrome currently. There 
are likely compatibility issues with other browsers. Track our progress on this 
at [issue #5](../../issues/5)._

## How it works
Using the input from the user, we build a Huffman Tree. This is a binary tree 
where each leaf represents a unique character from the input. Once this is 
done, we use the structure of the tree to map each unique character to a 
specific encoding. These encodings are then used in conjunction with the user 
input to create the series of bits that represents the input. Metadata is 
constructed using the character mappings, and then added to an array in 
preparation for writing to a file. The series of bits is divided into one byte 
chunks, and appended to the array, completing the download file. When an 
encoded file is uploaded, the process is essentially reversed. The mapping 
metadata is used to reconstruct the user input from the bit series, and then 
that input is used once again to reconstruct the tree. The compression 
percentage is calculated by subtracting the size of the encoded file divided by 
what would have been the size of the plain text file from one, and displayed in 
a nifty bar below the output.

## Authors
Created by [@WesCossick](https://github.com/WesCossick) and 
[@Evan-Green](https://github.com/Evan-Green)