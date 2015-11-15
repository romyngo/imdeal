Chats    = new Mongo.Collection('chats',    {idGeneration: 'STRING'});
Items    = new Mongo.Collection('items',    {idGeneration: 'STRING'});

// Only run timestamping hooks on server (using server time)
if (Meteor.isServer) {

  // Make sure various documents get timestamped upon creation
  Items.before.insert(function addTimestampToItem(userId, doc) {
    _.extend(doc, { createdAt: new Date() });
  });

  // Make sure all new messages are timestamped upon creation
  Chats.before.update(function addTimestampToMessage(userId, doc, fieldNames, modifier) {
    const isNewMessage = _.contains(fieldNames, 'messages') && _.has(modifier, '$push');

    // Only timestamp this update if it definitely is adding a new message to the chat
    if (isNewMessage) {
      _.extend(modifier.$push.messages, { timestamp: new Date() });
    }
  });

}