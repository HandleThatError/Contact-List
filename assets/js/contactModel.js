function contact(fName, lName, sAddress, vCity, vState, vZip, vEmail, vHome, vWork, vMobile){
	var self = this;
	self.firstName = fName;
	self.lastName = lName;
	self.streetAddress = sAddress;
	self.city = vCity;
	self.state = vState;
	self.zip = vZip;
	self.email = vEmail;
	self.home = vHome;
	self.work = vWork;
	self.mobile = vMobile;
}

function viewModel() {
	var self = this;

	self.contacts = ko.observableArray([
		]);

	self.addContact = function() {
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

		self.contacts.push(new contact(fName, lName, sAddress, vCity, vState, vZip, vEmail, vHome, vWork, vMobile));
	}
}

ko.applyBindings(new viewModel());