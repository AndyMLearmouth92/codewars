/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

Starter code:

function domainName(url){
    //your code here
  }
  */

//   Solution 1:

  function domainName(url){
    return url.replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('.')[0]
  }

//   Solution 2:

function domainName(url){
    let prefixRemoved = url.replace('http://', '').replace('https://', '').split('.')
    if(prefixRemoved[0] === 'www'){
      return prefixRemoved[1]
    }else{
      return prefixRemoved[0]
    }
  }
