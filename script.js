
//style="background-color:#57ba98; color:#FFFFFF; border: 4px groove black; font-size: 40px; font-family: monospace; border-radius: 65px;"
Content-Security-Policy: script-src 'self' 'unsafe-eval';

let cavPoints = 0; 
let chiPoints = 0;
let gdPoints = 0;
let iwPoints = 0;
let leoPoints = 0;
let sbPoints = 0;
let gerPoints = 0;
let sibPoints = 0;
let dobPoints = 0;
let borPoints = 0;
let staPoints = 0;
let bosPoints = 0;
let beaPoints = 0;
let dacPoints = 0;
let schPoints = 0;
let labPoints = 0;

document.getElementById("darkButton").addEventListener("click", darkchanger);
document.getElementById("lightButton").addEventListener("click", lightchanger);

function darkchanger() {
		console.log("hi");;
		document.getElementById("box1").style.backgroundColor = "#3D3C53";
		document.getElementById("box2").style.backgroundColor = "#3D3C53";
		document.getElementById("box3").style.backgroundColor = "#3D3C53";
		document.getElementById("fieldset").style.backgroundColor = "#3D3C53";
	}

	function lightchanger() {
		console.log("hi");
		document.getElementById("box1").style.backgroundColor = "#ffffff";
		document.getElementById("box2").style.backgroundColor = "#ffffff";
		document.getElementById("box3").style.backgroundColor = "#ffffff";
		document.getElementById("fieldset").style.backgroundColor = "#ffffff";
	}

function calculateScore() {

  let button = document.querySelector(".submit");
  let result = document.querySelector(".result");

	user = "hi";
	


   

  // let dogSize = document.querySelector(".dogSize").value;
  // let kidFriendly = document.querySelector(".kidFriendly").value;
  // let dogEnergy = document.querySelector(".dogEnergy").value;
  // let dogExercise = document.querySelector(".dogExerise").value;
  // let dogBarking = document.querySelector(".dogBarking").value;
  // let dogShedding = document.querySelector(".dogShedding").value;

	// Labrador Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	labPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	labPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	labPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	labPoints += 0;
	};
  
  // Chihuahua Score
  if (document.forms.theForm.dogSize.value == "Medium") {
	chiPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	chiPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	chiPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	chiPoints += 20;
	};
	
	// Great Dane Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	gdPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	gdPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	gdPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	gdPoints += 10;
	};
	
	// Saint Bernard Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	sbPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	sbPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	sbPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	sbPoints += 10;
	};
 
  // Labrador Score
  if (document.forms.theForm.kidFriendly.value == "Yes") {
	labPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	labPoints += 3;
	};
	
	// Chihuahua Score
  if (document.forms.theForm.kidFriendly.value == "Yes") {
	chiPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	chiPoints += 3;
	};
	
	// Great Dane Score
    if (document.forms.theForm.kidFriendly.value == "Yes") {
	gdPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	gdPoints += 3;
	};
	
	// Saint Bernard Score
  if (document.forms.theForm.kidFriendly.value == "Yes") {
	sbPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	sbPoints += 3;
	};

 // Labrador Score
  if (document.forms.theForm.dogEnergy.value == "High") {
	labPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	labPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	labPoints += 6;
	};
	
	// Chihuahua Score
  if (document.forms.theForm.dogEnergy.value == "High") {
	chiPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	chiPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	chiPoints += 6;
	};
	
	// Great Dane Score
    if (document.forms.theForm.dogEnergy.value == "High") {
	gdPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	gdPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Small") {
	gdPoints += 3;
	};
	
	// Saint Bernard Score
  if (document.forms.theForm.dogEnergy.value == "High") {
	sbPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	sbPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	sbPoints += 3;
	};
	
	// Labrador Score
  if (document.forms.theForm.dogExercise.value == "High") {
	labPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	labPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	labPoints += 6;
	};
	
	// Chihuahua Score
  if (document.forms.theForm.dogExercise.value == "High") {
	chiPoints += 6;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	chiPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	chiPoints += 0;
	};
	
	// Great Dane Score
	if (document.forms.theForm.dogExercise.value == "High") {
	gdPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	gdPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Small") {
	gdPoints += 3;
	};
	
	// Saint Bernard Score
  if (document.forms.theForm.dogExercise.value == "High") {
	sbPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	sbPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	sbPoints += 3;
	};
	
	// Labrador Score
  if (document.forms.theForm.dogBarking.value == "High") {
	labPoints += 3;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	labPoints += 0;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	labPoints += 3;
	};
	
	// Chihuahua Score
  if (document.forms.theForm.dogBarking.value == "High") {
	chiPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	chiPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	chiPoints += 6;
	};
	
	// Great Dane Score
	if (document.forms.theForm.dogBarking.value == "High") {
	gdPoints += 3;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	gdPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Small") {
	gdPoints += 3;
	};
	
	// Saint Bernard Score
  if (document.forms.theForm.dogBarking.value == "High") {
	sbPoints += 6;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	sbPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	sbPoints += 0;
	};
	
 // Labrador Score
  if (document.forms.theForm.dogShedding.value == "Yes") {
	labPoints += 6;
	} else if (document.forms.theForm.dogShedding.value == "Kinda") {
	labPoints += 3;
	}else if (document.forms.theForm.dogShedding.value == "no") {
	labPoints += 0;
	};
	
	// Chihuahua Score
  if (document.forms.theForm.dogShedding.value == "Yes") {
	chiPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Kinda") {
	chiPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "No") {
	chiPoints += 3;
	};
	
	// Great Dane Score
	if (document.forms.theForm.dogEnergy.value == "High") {
	gdPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	gdPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Small") {
	gdPoints += 6;
	};
	
	// Saint Bernard Score
  if (document.forms.theForm.dogShedding.value == "High") {
	sbPoints += 0;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	sbPoints += 3;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	sbPoints += 6;
	};
	
	// Irish Wolfhound Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	iwPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	iwPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	iwPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	iwPoints += 10;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	iwPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	iwPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	iwPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	iwPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	iwPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	iwPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	iwPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	iwPoints += 6;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	iwPoints += 6;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	iwPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	iwPoints += 0;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	iwPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	iwPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	iwPoints += 3;
	};
	
	// Leonberger Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	leoPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	leoPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	leoPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	leoPoints += 10;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	leoPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	leoPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	leoPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	leoPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	leoPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	leoPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	leoPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	leoPoints += 3;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	leoPoints += 3;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	leoPoints += 0;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	leoPoints += 3;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	leoPoints += 0;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	leoPoints += 3;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	leoPoints += 6;
	};
	
	
	
	// German Shepherd Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	gerPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	gerPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	gerPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	gerPoints += 0;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	gerPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	gerPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	gerPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	gerPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	gerPoints += 6;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	gerPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	gerPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	gerPoints += 6;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	gerPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	gerPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	gerPoints += 6;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	gerPoints += 0;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	gerPoints += 3;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	gerPoints += 6;
	};
	
	// Siberian Husky Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	sibPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	sibPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	sibPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	sibPoints += 0;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	sibPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	sibPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	sibPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	sibPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	sibPoints += 6;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	sibPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	sibPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	sibPoints += 6;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	sibPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	sibPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	sibPoints += 6;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	sibPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	sibPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	sibPoints += 3;
	};
	
	// Doberman Pinscher Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	dobPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	dobPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	dobPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	dobPoints += 0;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	dobPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	dobPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	dobPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	dobPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	dobPoints += 6;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	dobPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	dobPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	dobPoints += 3;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	dobPoints += 6;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	dobPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	dobPoints += 0;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	dobPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	dobPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	dobPoints += 3;
	};
	
	// Border Collie Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	borPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	borPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	borPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	borPoints += 10;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	borPoints += 3;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	borPoints += 0;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	borPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	borPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	borPoints += 6;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	borPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	borPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	borPoints += 6;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	borPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	borPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	borPoints += 6;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	borPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	borPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	borPoints += 3;
	};
	
	// Stafford Bull Terrier Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	staPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	staPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	staPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	staPoints += 10;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	staPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	staPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	staPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	staPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	staPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	staPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	staPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	staPoints += 6;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	staPoints += 3;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	staPoints += 0;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	staPoints += 3;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	staPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	staPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	staPoints += 3;
	};
	
	// Boston Terrier Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	bosPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	bosPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	bosPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	bosPoints += 10;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	bosPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	bosPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	bosPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	bosPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	bosPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	bosPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	bosPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	bosPoints += 3;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	bosPoints += 3;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	bosPoints += 0;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	bosPoints += 3;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	bosPoints += 6;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	bosPoints += 3;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	bosPoints += 0;
	};
	
	// Beagle Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	beaPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	beaPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	beaPoints += 20;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	beaPoints += 10;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	beaPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	beaPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	beaPoints += 0;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	beaPoints += 3;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	beaPoints += 6;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	beaPoints += 0;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	beaPoints += 3;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	beaPoints += 6;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	beaPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	beaPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	beaPoints += 6;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	beaPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	beaPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	beaPoints += 3;
	};
	
	// Miniature Dashchund Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	dacPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	dacPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	dacPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	dacPoints += 20;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	dacPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	dacPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	dacPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	dacPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	dacPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	dacPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	dacPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	dacPoints += 3;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	dacPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	dacPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	dacPoints += 6;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	dacPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	dacPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	dacPoints += 3;
	};
	
	// Miniature Schnauzer Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	schPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	schPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	schPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	schPoints += 20;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	schPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	schPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	schPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	schPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	schPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	schPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	schPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	schPoints += 3;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	schPoints += 0;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	schPoints += 3;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	schPoints += 6;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	schPoints += 6;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	schPoints += 3;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	schPoints += 0;
	};
	
	// Cavalier King Charles Spaniel Score
    if (document.forms.theForm.dogSize.value == "Medium") {
	cavPoints += 10;
	} else if (document.forms.theForm.dogSize.value == "Small") {
	cavPoints += 0;
	} else if (document.forms.theForm.dogSize.value == "Giant") {
	cavPoints += 30;
	} else if (document.forms.theForm.dogSize.value == "Large") {
	cavPoints += 20;
	};

  if (document.forms.theForm.kidFriendly.value == "Yes") {
	cavPoints += 0;
	} else if (document.forms.theForm.kidFriendly.value == "No") {
	cavPoints += 3;
	};
	
  if (document.forms.theForm.dogEnergy.value == "High") {
	cavPoints += 3;
	} else if (document.forms.theForm.dogEnergy.value == "Medium") {
	cavPoints += 0;
	}else if (document.forms.theForm.dogEnergy.value == "Small") {
	cavPoints += 3;
	};
	
  if (document.forms.theForm.dogExercise.value == "High") {
	cavPoints += 3;
	} else if (document.forms.theForm.dogExercise.value == "Medium") {
	cavPoints += 0;
	}else if (document.forms.theForm.dogExercise.value == "Small") {
	cavPoints += 3;
	};
	
  if (document.forms.theForm.dogBarking.value == "High") {
	cavPoints += 3;
	} else if (document.forms.theForm.dogBarking.value == "Medium") {
	cavPoints += 0;
	}else if (document.forms.theForm.dogBarking.value == "Small") {
	cavPoints += 3;
	};
	
  if (document.forms.theForm.dogShedding.value == "High") {
	cavPoints += 3;
	} else if (document.forms.theForm.dogShedding.value == "Medium") {
	cavPoints += 0;
	}else if (document.forms.theForm.dogShedding.value == "Small") {
	cavPoints += 3;
	};
	
	
	if ( (chiPoints < labPoints) && (chiPoints < gdPoints) && (chiPoints < sbPoints) && (chiPoints < iwPoints) && (chiPoints < leoPoints) && (chiPoints < gerPoints) && (chiPoints < sibPoints) && (chiPoints < dobPoints) && (chiPoints < borPoints) && (chiPoints < bosPoints) && (chiPoints < beaPoints) && (chiPoints < staPoints) && (chiPoints < dacPoints) && (chiPoints < schPoints) && (chiPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Chihuahua!";
		document.getElementById("info").innerHTML = "Chihuahuas are small dogs. They are intelligent and trainable, high in energy levels, need low exercise, have high barking habits, and not so bad shedding";
		document.getElementById('image2').src = "Images/chihuahua_image.jpg";
	} else if ( (labPoints < chiPoints) && (labPoints < gdPoints) && (labPoints < sbPoints) && (labPoints < iwPoints) && (labPoints < leoPoints) && (labPoints < gerPoints) && (labPoints < sibPoints) && (labPoints < dobPoints) && (labPoints < borPoints) && (labPoints < bosPoints) && (labPoints < beaPoints) && (labPoints < staPoints) && (labPoints < dacPoints) && (labPoints < schPoints) && (labPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Labrador Retriever!";
		document.getElementById("info").innerHTML = "Labrador Retrievers are playful dogs. Labrador retrievers are also great disability assistance dogs. They are large, very kid-friendly, high in energy, need lots of exercise, their barking habits aren't so bad, and they tend to shed a lot. But they're adorable!";
		document.getElementById('image2').src = "Images/LR_image.jpg";
	} else if ( (gdPoints < labPoints) && (gdPoints < chiPoints) && (gdPoints < sbPoints) && (gdPoints < iwPoints) && (gdPoints < leoPoints) && (gdPoints < gerPoints) && (gdPoints < sibPoints) && (gdPoints < dobPoints) && (gdPoints < borPoints) && (gdPoints < bosPoints) && (gdPoints < beaPoints) && (gdPoints < staPoints) && (gdPoints < dacPoints) && (gdPoints < schPoints) && (gdPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Great Dane!";
		document.getElementById("info").innerHTML = "Great Danes are huge dogs! They're very kid-friendly, though. They have not-so-bad energy levels, need not so much exercise, and don't bark that much. Their only weakness is that they shed a lot! They're the perfect dog for you!";
		document.getElementById('image2').src = "Images/greatdane_image.jpg";
	} else if ( (sbPoints < labPoints) && (sbPoints < chiPoints) && (sbPoints < gdPoints) && (sbPoints < iwPoints) && (sbPoints < leoPoints) && (sbPoints < gerPoints) && (sbPoints < sibPoints) && (sbPoints < dobPoints) && (sbPoints < sbPoints) && (sbPoints < bosPoints) && (sbPoints < beaPoints) && (sbPoints < staPoints) && (sbPoints < dacPoints) && (sbPoints < schPoints) && (sbPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Saint Bernard!!";
		document.getElementById("info").innerHTML = "Saint B's are fluffy and amazing! They love kids, have medium energy, need medium amounts of exercise, have low rates of barking, and they're not bad shedders! You should get one!";
		document.getElementById('image2').src = "Images/saintb_image.jpg";
	} else if ( (iwPoints < labPoints) && (iwPoints < chiPoints) && (iwPoints < gdPoints) && (iwPoints < sbPoints) && (iwPoints < leoPoints) && (iwPoints < gerPoints) && (iwPoints < sibPoints) && (iwPoints < dobPoints) && (iwPoints < borPoints) && (iwPoints < bosPoints) && (iwPoints < beaPoints) && (iwPoints < staPoints) && (iwPoints < dacPoints) && (iwPoints < schPoints) && (iwPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Irish Wolfhound";
		document.getElementById("info").innerHTML = "The gentle giant. They're good with kids, have medium energy levels, low levels of barking, don't shed that much, and need lots of exercise. They're perfect for hikers and athletic families!";
		document.getElementById('image2').src = "Images/irishwolfhound_image.jpg";
	} else if ( (leoPoints < labPoints) && (leoPoints < chiPoints) && (leoPoints < gdPoints) && (leoPoints < sbPoints) && (leoPoints < iwPoints) && (leoPoints < gerPoints) && (leoPoints < sibPoints) && (leoPoints < dobPoints) && (leoPoints < borPoints) && (leoPoints < bosPoints) && (leoPoints < beaPoints) && (leoPoints < staPoints) && (leoPoints < dacPoints) && (leoPoints < schPoints) && (leoPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Leonberger!";
		document.getElementById("info").innerHTML = "The fluffiest dog you can imagine! They adore kids and need moderate exercise. Their energy levels are average, and so is their barking. I hope you don't mind the shedding!";
		document.getElementById('image2').src = "Images/leonberger-image.jpg";
	} else if ( (gerPoints < labPoints) && (gerPoints < chiPoints) && (gerPoints < gdPoints) && (gerPoints < sbPoints) && (gerPoints < iwPoints) && (gerPoints < leoPoints) && (gerPoints < sibPoints) && (gerPoints < dobPoints) && (gerPoints < borPoints) && (gerPoints < bosPoints) && (gerPoints < beaPoints) && (gerPoints < staPoints) && (gerPoints < dacPoints) && (gerPoints < schPoints) && (gerPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a German Shepherd!";
		document.getElementById("info").innerHTML = "They are very high maintenance; they shed a bunch, bark a lot, need lots of exercise, and have a lot of energy. But hey! They love kids! German shepherds are guard dogs, normally found in use with the military and police departments. They’re loyal, easily trained, and known as one of the world’s top workers.";
		document.getElementById('image2').src = "Images/germanshepherd_image.jpg";
	} else if ( (sibPoints < labPoints) && (sibPoints < chiPoints) && (sibPoints < gdPoints) && (sibPoints < sbPoints) && (sibPoints < iwPoints) && (sibPoints < leoPoints) && (sibPoints < gerPoints) && (sibPoints < dobPoints) && (sibPoints < borPoints) && (sibPoints < bosPoints) && (sibPoints < beaPoints) && (sibPoints < staPoints) && (sibPoints < dacPoints) && (sibPoints < schPoints) && (sibPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Siberian Husky!";
		document.getElementById("info").innerHTML = "Stubborn sweethearts. Huskies love kids, and they've got lots of energy. They need a lot of exercise, they don't shed too much, and they bark a lot";
		document.getElementById('image2').src = "Images/husky_image.jpg";
	} else if ( (dobPoints < labPoints) && (dobPoints < chiPoints) && (dobPoints < gdPoints) && (dobPoints < sbPoints) && (dobPoints < iwPoints) && (dobPoints < leoPoints) && (dobPoints < gerPoints) && (dobPoints < sibPoints) && (dobPoints < borPoints) && (dobPoints < bosPoints) && (dobPoints < beaPoints) && (dobPoints < staPoints) && (dobPoints < dacPoints) && (dobPoints < schPoints) && (dobPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Doberman Pinscher!";
		document.getElementById("info").innerHTML = "Dobermans are intelligent and obedient dogs. They’re good with kids, have lots of energy to play, need moderate exercise, and they don’t bark so much. Plus, they barely shed!";
		document.getElementById('image2').src = "Images/doberman_image.jpg";
	} else if ( (borPoints < labPoints) && (borPoints < chiPoints) && (borPoints < gdPoints) && (borPoints < sbPoints) && (borPoints < iwPoints) && (borPoints < leoPoints) && (borPoints < gerPoints) && (borPoints < sibPoints) && (borPoints < dobPoints) && (borPoints < bosPoints) && (borPoints < beaPoints) && (borPoints < staPoints) && (borPoints < dacPoints) && (borPoints < schPoints) && (borPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Border Collie!";
		document.getElementById("info").innerHTML = "Collies are amazing! Their intelligence and obedience are great for herding, using their barking and lots of energy to keep the animals under control. They adore kids and don’t shed too much. Make sure to give them lots of exercise!";
		document.getElementById('image2').src = "Images/collie_image.jpg";
	} else if ( (bosPoints < labPoints) && (bosPoints < chiPoints) && (bosPoints < gdPoints) && (bosPoints < sbPoints) && (bosPoints < iwPoints) && (bosPoints < leoPoints) && (bosPoints < gerPoints) && (bosPoints < sibPoints) && (bosPoints < dobPoints) && (bosPoints < borPoints) && (bosPoints < beaPoints) && (bosPoints < staPoints) && (bosPoints < dacPoints) && (bosPoints < schPoints) && (bosPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Boston Terrier!";
		document.getElementById("info").innerHTML = "Look at that face, aren’t they a good-looking dog? They’re perfect for families with kids, and they need moderate exercise and have moderate energy levels. They don’t bark often, and they hardly shed at all. Are they perfect or what?";
		document.getElementById('image2').src = "Images/boston_image.jpg";
	} else if ( (beaPoints < labPoints) && (beaPoints < chiPoints) && (beaPoints < gdPoints) && (beaPoints < sbPoints) && (beaPoints < iwPoints) && (beaPoints < leoPoints) && (beaPoints < gerPoints) && (beaPoints < sibPoints) && (beaPoints < dobPoints) && (beaPoints < borPoints) && (beaPoints < bosPoints) && (beaPoints < staPoints) && (beaPoints < dacPoints) && (beaPoints < schPoints) && (beaPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Beagle!";
		document.getElementById("info").innerHTML = "Beagles are lovable and loving dogs. Take them for rabbit hunts, and they’ll put their high energy to use and use their barking to scare off any pests at your home.";
		document.getElementById('image2').src = "Images/beagle_image.jpg";
	} else if ( (staPoints < labPoints) && (staPoints < chiPoints) && (staPoints < gdPoints) && (staPoints < sbPoints) && (staPoints < iwPoints) && (staPoints < leoPoints) && (staPoints < gerPoints) && (staPoints < sibPoints) && (staPoints < dobPoints) && (staPoints < borPoints) && (staPoints < bosPoints) && (staPoints < beaPoints) && (staPoints < dacPoints) && (staPoints < schPoints) && (staPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Stafford Bull Terrier!";
		document.getElementById("info").innerHTML = "Sweet-tempered, highly intelligent and extremely courageous dogs. Got kids? They love them! Love walking? So do they! They don’t bark too much, barely shed, and have moderate energy! Quite the mix of stay-at-home and need-to-be-out dogs, aren’t they? ";
		document.getElementById('image2').src = "Images/staff_image.jpg";
	} else if ( (dacPoints < labPoints) && (dacPoints < chiPoints) && (dacPoints < gdPoints) && (dacPoints < sbPoints) && (dacPoints < iwPoints) && (dacPoints < leoPoints) && (dacPoints < gerPoints) && (dacPoints < sibPoints) && (dacPoints < dobPoints) && (dacPoints < borPoints) && (dacPoints < bosPoints) && (dacPoints < beaPoints) && (dacPoints < staPoints) && (dacPoints < schPoints) && (dacPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Miniature Dachshund!";
		document.getElementById("info").innerHTML = "Mini Dachshunds are one of the cutest dogs you’d ever see. Their coat types include smooth hair, long-haired, and wire-haired varieties. They’re a good family dog and need moderate exercise for their moderate energy. They bark a bit at visitors or strangers, and they do shed a bit, but they love tummy scratches!";
		document.getElementById('image2').src = "Images/Dachshund_image.jpg";
	} else if ( (staPoints < labPoints) && (schPoints < chiPoints) && (schPoints < gdPoints) && (schPoints < sbPoints) && (schPoints < iwPoints) && (schPoints < leoPoints) && (schPoints < gerPoints) && (schPoints < sibPoints) && (schPoints < dobPoints) && (schPoints < borPoints) && (schPoints < bosPoints) && (schPoints < beaPoints) && (schPoints < dacPoints) && (schPoints < staPoints) && (schPoints < cavPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Miniature Schnazuer!";
		document.getElementById("info").innerHTML = "My lovelies! Mini Schnauzers are best dogs for family homes! They're breed to be guard dogs, so they use their bark to scare off any intruders! They hardly ever shed, little to none, need moderate exercise, and have moderate energy!";
		document.getElementById('image2').src = "Images/schnauzer_image.jpg";
	} else if ( (cavPoints < labPoints) && (cavPoints < chiPoints) && (cavPoints < gdPoints) && (cavPoints < sbPoints) && (cavPoints < iwPoints) && (cavPoints < leoPoints) && (cavPoints < gerPoints) && (cavPoints < sibPoints) && (cavPoints < dobPoints) && (cavPoints < borPoints) && (cavPoints < bosPoints) && (cavPoints < beaPoints) && (cavPoints < dacPoints) && (cavPoints < schPoints) && (cavPoints < staPoints) ){
		document.getElementById("breed").innerHTML = "You should get a Cavalier King Charles Spaniel!";
		document.getElementById("info").innerHTML = "Cavalier King Charles Spaniels are intelligent, trainable, happy, and affectionate dogs. They make great family dogs and companions. They are also a great choice for therapy dogs and have excellent obedience.";
		document.getElementById('image2').src = "Images/cavalier_image.jpg";
	}
}	

	
