const user = require('./user')

const user1 = new user('ad' , 'name' , 'slala', 'adfafs')
const user2 = new user('a','a','adf','a')
console.log(user1.email)
console.log(user1)
console.log(user2)

user1.email = 'shudip.shahriar@gmail.com'
console.log(user1.email)