function takeANumber(katzDeliLine, name){
var placeInLine = katzDeliLine.length + 1;
katzDeliLine.push(name)
return "Welcome, " + name + ". You are number " + placeInLine + " in line."
};

function nowServing(katzDeliLine){
	if(katzDeliLine.length === 0){
		return "There is nobody waiting to be served!"
	} else{
		var nextInLine = katzDeliLine[0];
		var next = katzDeliLine.slice(0, 1)
		katzDeliLine.shift()
		return "Currently serving " + next + "."
	}
}