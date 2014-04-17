Template.welcome.events({
  'change input': function(ev) {  
    _.each(ev.currentTarget.files, function(file) {
      Meteor.saveFile(file, file.name);
    });
  }
});