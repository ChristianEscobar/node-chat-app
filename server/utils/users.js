[{
  id: 'dfadfad',
  name: 'Chris',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    // return user that was removed
    return this.users.filter((user, index) => {
      if(user.id === id) {
        this.users.splice(index, 1);
        return true
      }

      return false;
    })[0];
  }
  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList(room) {
    let users = this.users.filter((user) => user.room === room);
    let namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

// users = new Users();
// users.users = [{
//   id: '1',
//   name: 'Mike',
//   room: 'Node Course'
// },{
//   id: '2',
//   name: 'Jen',
//   room: 'React Course'
// },{
//   id: '3',
//   name: 'Julie',
//   room: 'Node Course'
// }];

// console.log(users.getUser('100'));

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person('Chris', 18);
// var description = me.getUserDescription();
// console.log(description);

module.exports = {Users};