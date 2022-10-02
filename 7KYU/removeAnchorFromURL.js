/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

Starter code:

function removeUrlAnchor(url){
  // TODO: complete
}

*/

// Solution 1:

function removeUrlAnchor(url){
    return url.replace(/#.+$/,'')
  }

//   Solution 2:

function removeUrlAnchor(url){
    return url.split('#')[0]
  }


//   Solution 3:

  function removeUrlAnchor(url){
    let result = ''
     for(let i = 0; i < url.length; i++){
       if(url[i] === '#'){
         break
       }else{
         result += url[i]
       }
     }
     return result
   }


//    Solution 4:

function removeUrlAnchor(url){
    let result = []
    let splitURL = url.split('')
    for(let i = 0; i < splitURL.length; i++){
      if(splitURL[i] === '#'){
        break
      }else{
        result.push(splitURL[i])
      }
    }
    return result.join('')
  }