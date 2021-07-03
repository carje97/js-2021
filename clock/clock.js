var hour = new Date().getHours()
hour = 18
if (hour < 12 && hour > 1) {
   document.write("Buna dimineata!") 
} else if (hour >= 12 && hour < 18) {
    document.write("Buna Ziua!")
} else if (hour >= 18 && hour <= 23) {
    document.write("Buna Seara!")
} else {
    document.write("Somn usor!")
}
