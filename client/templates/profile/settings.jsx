Template.settings.events({
  'click .toggle': function(event) {
    event.preventDefault();
    $(event.target).closest('.toggle').toggleClass('active');
  },

  'click .logout-btn': function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  },

});