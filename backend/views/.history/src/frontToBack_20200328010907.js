
import Axios from 'axios'
  function sendTokenToSever(id,token){
    console.log('olllaaaaa i am ge',token)
   try {
       Axios({
        url: 'http://localhost:9000/saveToken',
        method: 'post',
        data: {
          donarId:id,
          token:token
        }
      }).then(r=>{console.log(r)}).catch(e=>{console.log(e)})
   } catch (error) {
       
   } 
}
function push(token){
  console.log('push'+ token)
  const fetchOptions = {
    "method":"cors",
    "method":"post",
    "headers": {
 
    "Content-Type":"application/json",
    "Authorization":"key=AAAAZrExCXs:APA91bHy3crCKk2gGwCxBOpRDe2Vmn5FxUnDtg4PPVFIkaVaMTcqR7RDZNX126NhcVyovxdI61431MEzJgL-aVAoNyZNJ_qZdjDljZ0AIw2IKwW6FjWRSGjIto6yJ-KS4zlQIo3tvzsv",
    },
    "notification" : {
        "body" : "O+ blood needed",
        "title": "Some is looking for blood ",
        "icon": "http://www.liberaldictionary.com/wp-content/uploads/2019/02/icon-0326.jpg"
    },
    
     "to": "d8IQ6aH0zFqnc5ToyYGvHM:APA91bH73HGYHnd81RxiukJwJ7IAmRX3Wwd-6kMSTZgGc41ZuHPXT7qO7o_7_-x7ZI6rUIIhPu9GWGBAkCUOjH5ozOs0q8cpCCvSUxLRXwfp3ebXLqHCsnceTWroRi9VOlihZHpS0kJc"
   }
   var postData = {
    "notification" : {
      "body" : "Someone needs blood of your group",
      "title": "please click here to contact the person",
      "icon": "http://www.liberaldictionary.com/wp-content/uploads/2019/02/icon-0326.jpg"
  },
  
   "to": `${token}`
  };
   let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Authorization":"key=AAAAZrExCXs:APA91bHy3crCKk2gGwCxBOpRDe2Vmn5FxUnDtg4PPVFIkaVaMTcqR7RDZNX126NhcVyovxdI61431MEzJgL-aVAoNyZNJ_qZdjDljZ0AIw2IKwW6FjWRSGjIto6yJ-KS4zlQIo3tvzsv",
    }
  };
   Axios.post('https://fcm.googleapis.com/fcm/send', postData, axiosConfig)
       
   
}
export {sendTokenToSever,push}
