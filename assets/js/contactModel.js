function contact(fName, lName, sAddress, vCity, vState, vZip, vEmail, vHome, vWork, vMobile){
	this.firstName = fName;
	this.lastName = lName;
	this.streetAddress = sAddress;
	this.city = vCity;
	this.state = vState;
	this.zip = vZip;
	this.email = vEmail;
	this.home = vHome;
	this.work = vWork;
	this.mobile = vMobile;
}

function viewModel() {

	this.contacts = ko.observableArray([
		]);

	this.addContact = function() {
		var fName = document.getElementById("fName").value;
		var lName = document.getElementById("lName").value;
		var sAddress = document.getElementById("address").value;
		var vCity = document.getElementById("city").value;
		var vState = document.getElementById("state").value;
		var vZip = document.getElementById("zip").value;
		var vEmail = document.getElementById("email").value;
		var vHome = document.getElementById("home").value;
		var vWork = document.getElementById("work").value;
		var vMobile = document.getElementById("mobile").value;

		var resultsTable = document.getElementById("resultsDiv");
		resultsDiv.style.visibility = "visible";

		this.contacts.push(new contact(fName, lName, sAddress, vCity, vState, vZip, vEmail, vHome, vWork, vMobile));
	}

	this.deleteContact = function(contact) {
		this.contacts.remove(contact);
	}
}

ko.applyBindings(new viewModel());