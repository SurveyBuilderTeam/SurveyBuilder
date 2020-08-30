function setupPoliceIncidentReportTemp(){
	//title
	document.getElementById("yourTitle").innerHTML = "Police Incident Report Template";
	document.getElementById("UserTitle").innerHTML = "Police Incident Report Template - SurveyBuilder";
	//clear
	document.getElementById("Insert-Object").innerHTML = "";
	//report date
	let startReportDate = document.createElement("DIV");
		 startReportDate.className = "Date";
		 let e = Math.random().toString(36).substring(7);
		 startReportDate.id = e;
		 
		  startReportDate.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>&nbsp;Report date: <input required='true' type='date' name='Date' id='Date' />";
		 document.getElementById("Insert-Object").appendChild(startReportDate);
		 //report time
		 let startReportTime = document.createElement("DIV");
		 startReportTime.className = "Time";
		 let f = Math.random().toString(36).substring(7);
		 startReportTime.id = f;
		 
		  startReportTime.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>&nbsp;Report time: <input required='true' type='time' name='Time' id='Time' />";
		 document.getElementById("Insert-Object").appendChild(startReportTime);
		 //Date when incident occurred
		 	let startIncidentDate = document.createElement("DIV");
		 startIncidentDate.className = "Date";
		 let g = Math.random().toString(36).substring(7);
		 startIncidentDate.id = g;
		 
		  startIncidentDate.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>&nbsp;Report Incident date: <input required='true' type='date' name='Date' id='Date' />";
		 document.getElementById("Insert-Object").appendChild(startIncidentDate);
		 //time when incident occurred
		 let startIncidentTime = document.createElement("DIV");
		 startIncidentTime.className = "Time";
		 let h = Math.random().toString(36).substring(7);
		 startIncidentTime.id = h;
		 
		  startIncidentTime.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>&nbsp;Report Incident time: <input required='true' type='time' name='Time' id='Time' />";
		 document.getElementById("Insert-Object").appendChild(startIncidentTime);
		 //issued by
		 let Issuename = document.createElement("DIV");
		 Issuename.className = "name";
		 let i = Math.random().toString(36).substring(7);
		 Issuename.id = i;
		 Issuename.innerHTML = "Incident report issued by:<br/><i class='fas fa-asterisk' style='color:red;'></i> First Name: <input type='text' placeholder='First Name' id='FirstName' name='FirstName' required='true'/><br/> <i class='fas fa-asterisk' style='color:red;'></i> Middle Name: <input type='text' placeholder='Middle Name' id='MName' name='MName' required='true'/><br/> <i class='fas fa-asterisk' style='color:red;'></i> Last Name: <input type='text' placeholder='Last name' id='LastName' name='LastName' required='true'/>";;
		 document.getElementById("Insert-Object").appendChild(Issuename);
		 //location
		 let LoI = document.createElement("DIV");
		 LoI.className = "Con"
		 let j = Math.random().toString(36).substring(7);
		 LoI.id = j;
		 LoI.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Incident Location (Please provide specific details): <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(LoI);
		 //NoI
		 let NoI = document.createElement("DIV");
		 NoI.className = "Con"
		 let k = Math.random().toString(36).substring(7);
		 NoI.id = k;
		 NoI.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Nature of incident: <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(NoI);
		 //Details
		  let IntDil = document.createElement("DIV");
		 IntDil.className = "Con"
		 let l = Math.random().toString(36).substring(7);
		 IntDil.id = l;
		 IntDil.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Incident details: <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(IntDil);
		 //MoI
		  let MoI = document.createElement("DIV");
		 MoI.className = "Con"
		 let m = Math.random().toString(36).substring(7);
		 MoI.id = m;
		 MoI.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> What motivated the incident?: <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(MoI);
		 //police
		   let Pol = document.createElement("DIV");
		 Pol.className = "Con"
		 let n = Math.random().toString(36).substring(7);
		 Pol.id = n;
		 Pol.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Was a report of the incident issued to the police?: <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(Pol);
		 //rush
		  let rush = document.createElement("DIV");
		 rush.className = "Con"
		 let o = Math.random().toString(36).substring(7);
		 rush.id = o;
		 rush.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Has anyone been arrested so far in relation to the incident?: <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(rush);
		 //name
		 let FullName = document.createElement("DIV");
		 FullName.className = "name";
		 let p = Math.random().toString(36).substring(7);
		 FullName.id = p;
		 FullName.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> First Name: <input type='text' placeholder='First Name' id='FirstName' name='FirstName' required='true'/><br/> <i class='fas fa-asterisk' style='color:red;'></i> Middle Name: <input type='text' placeholder='Middle Name' id='MName' name='MName' required='true'/><br/> <i class='fas fa-asterisk' style='color:red;'></i> Last Name: <input type='text' placeholder='Last name' id='LastName' name='LastName' required='true'/>";;
		 document.getElementById("Insert-Object").appendChild(FullName);
		 //Phone
		  let phoneNumber = document.createElement("DIV");
		 phoneNumber.className = "name";
		 let q = Math.random().toString(36).substring(7);
		 phoneNumber.id = q;
		 phoneNumber.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Phone Number: <input type='tel' placeholder='+#{##}(##)####-####' id='phoneNum' required='true' pattern='[\\+]\\d{1,3}[\\(]\\d{3}[\\)]\\d{3}[\\-]\\d{4}'/><br><i class='fas fa-asterisk' style='color:red;'></i> Area Code: <input type='text' placeholder='Area Code' required='true' pattern='[0-9]{3}'/>";
		document.getElementById("Insert-Object").appendChild(phoneNumber);
		//Address
		let Address = document.createElement("DIV");
		Address.className = "address";
		let r = Math.random().toString(36).substring(7);
		 Address.id = r;
		 let street = "<i class='fas fa-asterisk' style='color:red;'></i> Street 1: <input type='text' placeholder='Street 1' id='Street' required='true'/>";
		let street2 = "Street 2: <input type='text' placeholder='Street 2' id='Street2'/>";
	    let City = "<i class='fas fa-asterisk' style='color:red;'></i> City: <input type='text' placeholder='City' id='City' required='true'/>";
	    let State = "<i class='fas fa-asterisk' style='color:red;'></i> State: <input type='text' placeholder='State' id='State' required='true'/>";
	    let Zip = "<i class='fas fa-asterisk' style='color:red;'></i> Zip Code: <input type='text' placeholder='Zip code' pattern='[0-9]{3,5}' id='Zip' required='true'/>";
	    let Country = "<i class='fas fa-asterisk' style='color:red;'></i> Country: <select id='countries-select' required='true'><option value='dnt' disabled='true'>[Do Not Touch]</option></select>";
		let allData = street + "<br>" + street2 + "<br>" + City + "<br>" + Zip + "<br>" + Country;
	    Address.innerHTML = allData;
		document.getElementById("Insert-Object").appendChild(Address);
	var selects = document.getElementById("countries-select"),
	      arr = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
		
		for(var info = 0; info < arr.length; info++){
			 var options = document.createElement("OPTION");
			 txt = document.createTextNode(arr[info]);
			 options.appendChild(txt);
			 options.setAttribute("value", arr[info]);
			 selects.insertBefore(options,selects.lastChild);
			 //console.log(Selects);
		 }
		 let setdisplay = prompt("Enter a number from 0-195\nUse 0 to set Default\n0 is at the top of the list");
		 if(setdisplay == null){
			 console.error("Action was not selected")
		 }
		 document.getElementById("countries-select").options[setdisplay].setAttribute("selected", "selected");
		 //document.getElementById("countries-select").options[196].disabled = true;
	    //radio
		let contact = document.createElement("DIV");
		contact.className = "Con";
		let t = Math.random().toString(36).substring(7);
		 contact.id = t;
		 contact.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Do you want the police to get in touch with you?<br/><input type='radio' name='policeContact'/>Yes<br/><input type='radio' name='policeContact'/>No ";
		document.getElementById("Insert-Object").appendChild(contact);
		//questions
		  let question = document.createElement("DIV");
		 question.className = "Con"
		 let s = Math.random().toString(36).substring(7);
		 question.id = s;
		 question.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> Further Comments: <br/> <textarea style='margin: 0px; width: 541px; height: 85px;' name='Report_Of_location'></textarea>";
		 document.getElementById("Insert-Object").appendChild(question);
	   //confirm
	     let confirmation = document.createElement("DIV");
		 confirmation.className = "input";
		 let u = Math.random().toString(36).substring(7);
		 confirmation.id = u;
		 confirmation.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i> <input type='checkbox' name='confirm' required='true'/> I certify that the above information is true and correct.";
		 document.getElementById("Insert-Object").appendChild(confirmation);
		//submit
		let sub = document.createElement("DIV");
		sub.className = "input";
		let v = Math.random().toString(36).substring(7);
		 sub.id = v;
		 sub.innerHTML = "<input type='submit' value='submit'/>";
		 document.getElementById("Insert-Object").appendChild(sub);
}