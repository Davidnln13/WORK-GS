/**Controller for sign up**/
class SignupController
{
	constructor(model)
	{
		this.model = model;
		this.setup();
	}

	setup()
	{
		var that = this;

		var signupButton = document.getElementById("signup-button");
		var email = document.getElementById("signup-email");
		var name = document.getElementById("signup-name");
    var surname = document.getElementById("signup-surname");
		var noun = document.getElementById("signup-noun");
		var password = document.getElementById("signup-password");
		var passwordConfirm = document.getElementById("signup-confirm-password");

		signupButton.addEventListener("click", function(){that.signup()} );
		signupButton.addEventListener("click", function(){track("signup-button")} );
		email.addEventListener("click", function(){track("signup-email")} );
		name.addEventListener("click", function(){track("signup-name")} );
		surname.addEventListener("click", function(){track("signup-surname")} );
		noun.addEventListener("click", function(){track("signup-noun")} );
		password.addEventListener("click", function(){track("signup-password")} );
		passwordConfirm.addEventListener("click", function(){track("signup-confirm-password")} );

	}

	signup(e)
	{
		var email = document.getElementById("signup-email").value;
		var teamName = "none";
		var name = document.getElementById("signup-name").value;
    	var surname = document.getElementById("signup-surname").value;
		var noun = document.getElementById("signup-noun").value;
		var password = document.getElementById("signup-password").value;
		var passwordConfirm = document.getElementById("signup-confirm-password").value;

		if (email !== "" && teamName !== "" && name !== "" && surname !== "" && noun !== "" && password !== "" && passwordConfirm !== "")
		{
			if (password === passwordConfirm)
			{
				this.model.signup(email, teamName, name, surname, noun, password);
				this.cleanSignup();
			}

			else
			{
				this.showError("Passwords do not match!");
			}
		}
		else
		{
			this.showError("You did not fill out everything!");
		}



	}


	cleanSignup()
	{
		// Clean values
		document.getElementById("signup-email").value = "";
		document.getElementById("signup-team-name").value = "";
		document.getElementById("signup-name").value = "";
		document.getElementById("signup-surname").value = "";
		document.getElementById("signup-noun").value = "";
		document.getElementById("signup-password").value = "";
		document.getElementById("signup-confirm-password").value = "";
	}

	showError(errMessage)
	{
		document.getElementById("signup-error").innerHTML = errMessage;
	}


}
