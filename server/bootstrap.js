'use strict';

Meteor.startup(function() {
  if (Chats.find().count() === 0) {
    Messages.remove({});
    Items.remove({});

    var messages = [
      {
        text: 'You on your way?',
        timestamp: moment().subtract(1, 'hours').toDate(),
      },
      {
        text: 'Hey, it\'s me',
        timestamp: moment().subtract(2, 'hours').toDate(),
      },
      {
        text: 'I should buy a boat',
        timestamp: moment().subtract(1, 'days').toDate(),
      },
      {
        text: 'Look at my mukluks!',
        timestamp: moment().subtract(4, 'days').toDate(),
      },
      {
        text: 'This is wicked good ice cream.',
        timestamp: moment().subtract(2, 'weeks').toDate(),
      },
    ];

    messages.forEach(m => {
      Messages.insert(m);
    });

    var chats = [
      {
        name: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      },
      {
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
      },
      {
        name: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
      },
      {
        name: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
      },
      {
        name: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
      },
    ];

    var items = [
      {
        name:        'Base ball',
        askingPrice: 310,
        location:    'New York',
        picture:     'http://thecatapi.com/api/images/get?format=src&type=png',
      },
      {
        name:        'iPhone 6 Plus',
        askingPrice: 80040,
        location:    'Melbourne',
        picture:     'http://thecatapi.com/api/images/get?format=src&type=png',
      },
      {
        name:        'Cat',
        askingPrice: 40,
        location:    'Hanoi',
        picture:     'http://thecatapi.com/api/images/get?format=src&type=png',
      },
      {
        name:        'Ice cream',
        askingPrice: 200,
        location:    'Antarctica',
        picture:     'http://thecatapi.com/api/images/get?format=src&type=png',
      },
      {
        name:        'Macbook Pro',
        askingPrice: 309,
        location:    'Taipei',
        picture:     'http://thecatapi.com/api/images/get?format=src&type=png',
      },
    ];

    for (var i = 0; i < items.length; i++) {
      let message = Messages.findOne({chatId: {$exists: false}});
      chats[i].lastMessage = message;
      let chatId = Chats.insert(chats[i]);
      Messages.update(message._id, {$set: {chatId: chatId}});

      let itemId = Items.insert(items[i]);
      Chats.update(chatId, {$set: {itemId: itemId}});
    }
  }
});