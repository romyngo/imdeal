'use strict';

Template.chat.helpers({

  // Returns relevant user data needed by the view
  getUserData(userId = Meteor.userId() : string) {
    const fromUser = Meteor.users.findOne(userId);

    return {
      username: fromUser.username,
      avatar:   fromUser.profile.avatar,
    };
  },

  // Returns all messages of this chat, limited to amount specified
  getLimitedMessages(limit = 10 : number) {
    return Template.currentData().chat.messages.splice(0, limit);
  },

});

Template.chat.events({

  // Callback for submitting reply
  'submit .reply-form': function(event) {
    event.preventDefault();

    // Get boolean denoting whether or not message is from originator of chat
    const userFromStatus = Template.currentData().chat.fromUserId === Meteor.userId();

    // Construct new message document
    const newMessageEntry = {
      _id:      new Meteor.Collection.ObjectID().valueOf(),
      userFrom: userFromStatus,
      text:     event.target.reply.value,
    };

    // Add new message to the chat
    Meteor.call(
      'addNewMessageToChat',
      Template.currentData().chat._id,
      newMessageEntry,
      (error) => {
        if (error) {
          return console.error('Cannot add new message to chat:\n' + error);
        }
        // Clear the field if nothing went wrong
        event.target.reply.value = '';
      }
    );
  },

});