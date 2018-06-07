class AssignmentsTeacherController
{
	constructor(model)
	{
		this.model = model;
		this.setup();
	}

	setup()
	{
		var controller = this;
		console.log(this.model);

		var addBtn = document.getElementById("add-assignment-button");


		addBtn.addEventListener("click", function()
		{
			controller.createAddAssignmentModal();
		});

		// var name = document.getElementById("assignment-name");
		// var deadline = document.getElementById("assignment-submission-deadline");
		// var reviewDeadline = document.getElementById("assignment-review-deadline");
		// var description = document.getElementById("assignment-description");
		// var reviewersAmount = document.getElementById("assignment-total-reviewers");
		//
		// name.addEventListener("click", function(){track("assignment-name")});
		// deadline.addEventListener("click", function(){track("assignment-submission-deadline")});
		// reviewDeadline.addEventListener("click", function(){track("assignment-review-deadline")});
		// description.addEventListener("click", function(){track("assignment-description")});
		// reviewersAmount.addEventListener("click", function(){track("assignment-total-reviewers")});
	}


	createAddAssignmentModal()
	{
		//for some reason doesnt work as its own call
		track("add-assignment-button");

		var controller = this;

		// Init Modal
		var modalBody = app.modalContentManager.getModalContent("add-assignment");
		var modalData = app.uiFactory.createModal("add-assignment", "Add Assignment", modalBody, true);
		document.body.appendChild(modalData.modal);
		modalData.modal.style.display = "block";

		//Set minimum datetime and current datetime to now.
		var today = new Date().toISOString();
		today = today.substr(0, today.lastIndexOf("."));	

		document.getElementById("assignment-submission-deadline").min = today;
		document.getElementById("assignment-submission-deadline").value = today;

		document.getElementById("assignment-review-deadline").min = today;
		document.getElementById("assignment-review-deadline").value = today;


		var submitBtn = modalData.submit;
		submitBtn.addEventListener("click", function ()
		{
			controller.createAssignment();
			var parentNode = modalData.modal.parentNode;
			parentNode.removeChild(modalData.modal);
        });


	}

	createAssignment()
	{

		var name = document.getElementById("assignment-name").value;
		var deadlineDate = document.getElementById("assignment-submission-deadline").value.split('T')[0];
		var deadlineTime = document.getElementById("assignment-submission-deadline").value.split('T')[1];
		var reviewTillDate = document.getElementById("assignment-review-deadline").value.split('T')[0];
		var reviewTillTime = document.getElementById("assignment-review-deadline").value.split('T')[1];

		var totalColons = deadlineTime.split(":").length-1;
		// Remove seconds
		if (totalColons === 2) {
			deadlineTime = deadlineTime.substring(0, deadlineTime.lastIndexOf(":"));
		}


		totalColons = reviewTillTime.split(":").length-1;
		// Remove seconds
		if (totalColons === 2) {
			reviewTillTime = reviewTillTime.substring(0, reviewTillTime.lastIndexOf(":"));
		}


		var description = document.getElementById("assignment-description").value;
		var reviewersAmount = document.getElementById("assignment-total-reviewers").value;


		this.model.createAssignment(name, deadlineTime, deadlineDate,reviewTillTime, reviewTillDate,  description, reviewersAmount);
	}

	deleteAssignment(id)
	{
		this.model.deleteAssignment(id);
	}



	update()
	{

	}
}
