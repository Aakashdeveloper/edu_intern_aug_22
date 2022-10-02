> map is use to iterate over the array of elements
> it always return the same length of output array as input array
> it is use to apply the logics(add,sub, mul, print in html)

// a.map(()=>{})
var a = [4,5,6,34,23,3,47,56,8,12,30,88,67];
a.map((data) => {return data*2})
[8, 10, 12, 68, 46, 6, 94, 112, 16, 24, 60, 176, 134]

var a = [4,5,6,34,23,3,47,56,8,12,30,88,67];
a.map((data) => {return `<p>${data*2}</p>`})

['<p>8</p>', '<p>10</p>', '<p>12</p>', '<p>68</p>',
 '<p>46</p>', '<p>6</p>', '<p>94</p>', '<p>112</p>',
  '<p>16</p>', '<p>24</p>', '<p>60</p>', '<p>176</p>', '<p>134</p>']


> Filter is use to filter out the data
> it may or may not return the same length of output as input array
> filter only return those data for ehich output/condition is true


var a = [4,5,6,34,23,3,47,56,8,12,30,88,67];
a.filter((data) => {return data>50})
[56, 88, 67]

var a = [4,5,6,34,23,3,47,56,8,12,30,88,67];
a.map((data) => {return data>50})
[false, false, false, false, false, false, false, true, false, false, false, true, true]