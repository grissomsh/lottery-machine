var remainingNumbers;
var timer;
var chosenIndex;

function startNewLottery(){
	numberOfCandidates = document.getElementById("numCandidates").value
	numberOfCandidates = parseFloat(numberOfCandidates)
	if (   numberOfCandidates>0 && (parseInt(numberOfCandidates)===numberOfCandidates)    ){
		document.getElementById("wrongValueAlert").style.display = "none"
		remainingNumbers = new Array(numberOfCandidates)
		for (var i =0; i<numberOfCandidates; i++){
			remainingNumbers[i] = i+1
		}
		document.getElementById("preparation").style.display = 'None';
		document.getElementById("ongoing").style.display = 'Block';
		document.getElementById("luckyNumber").innerHTML = '？？？';
		document.getElementById("lotteryButton").style.display = 'Block';
	}
	else{
		console.log("else")
		document.getElementById("wrongValueAlert").style.display = "Block"
	}
}

function generateRandomNumber(){
	if (remainingNumbers.length===0){
		document.getElementById("luckyNumber").innerHTML = '抽完了';
		document.getElementById("lotteryButton").style.display = 'None';
		document.getElementById("againButton").style.display = 'Block';
		return;
	}
	document.getElementById("lotteryButton").style.display = 'None'
	document.getElementById("stopButton").style.display = 'Block'
	clearInterval(timer);
	timer = setInterval('changeNumber()',40);
}

function again(){
	document.getElementById("preparation").style.display = 'Block'
	document.getElementById("ongoing").style.display = 'None';
	document.getElementById("againButton").style.display = 'None';
}


function changeNumber(){
  	chosenIndex = Math.floor((Math.random() * remainingNumbers.length) )
	document.getElementById("luckyNumber").innerHTML = remainingNumbers[chosenIndex]
}

function stop(){
	clearInterval(timer);
	remainingNumbers.splice(chosenIndex,1)
	console.log(remainingNumbers)
	document.getElementById("stopButton").style.display = 'None'
	document.getElementById("lotteryButton").style.display = 'Block'
}





