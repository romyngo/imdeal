Chats    = new Mongo.Collection('chats',    {idGeneration: 'STRING'});
Items    = new Mongo.Collection('items',    {idGeneration: 'STRING'});

// Make sure various documents get timestamped upon creation
Items.before.insert(function(userId, doc) {
  _.extend(doc, { createdAt: new Date() });
});