let sett = new Set()

sett.add(1);
sett.add(2);
sett.add(3);
sett.add(4);

sett.add(4);

if(sett.has(4)){
    console.log("The set already contains 4");
}

sett.delete(4)
console.log(sett);
console.log("Size of new set is ",sett.size);


for (const element of sett) {
    console.log("Element: ",element);
}

/* OUTPUT
The set already contains 4
Set(3) { 1, 2, 3 }
Size of new set is  3
Element:  1
Element:  2
Element:  3
*/