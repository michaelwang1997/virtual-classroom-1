/*****************************************************************************/
/* Stream: Event Handlers */
/*****************************************************************************/
Template.Stream.events({
	'click #recorder-modal-trigger': function() {
		// #('#recorder-modal').modal('open')
		$('#recorder-modal').openModal()
		Session.set('recorder', true)
	}
});

/*****************************************************************************/
/* Stream: Helpers */
/*****************************************************************************/
Template.Stream.helpers({
	recorderIsActive: function() {
		var modal = document.getElementById('recorder-modal')

		if (Session.get('recorder') === true) return "muted"
	}
});

/*****************************************************************************/
/* Stream: Lifecycle Hooks */
/*****************************************************************************/
Template.Stream.onCreated(function () {
});

Template.Stream.onRendered(function () {
	var courseCode = Router.current().params.code
	var title = Router.current().params.lecture
	var lecture = Lectures.findOne({$and: [{title: title}, {courseCode:courseCode}]})
	Session.set('lectureId', lecture._id)

	Session.set('recorder', false)
	//$('#recorder-modal').modal()
});

Template.Stream.onDestroyed(function () {
});
