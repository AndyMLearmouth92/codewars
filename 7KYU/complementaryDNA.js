/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

Starter code:

function DNAStrand(dna){
  //your code here
}

*/

// Solution 1:

let pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(x){ return pairs[x] }).join('');
}

// Solution 2:

function DNAStrand(dna){
  return dna.split('').map(x => x === 'A'? 'T': x === 'T'? 'A' : x === 'C'? 'G' : x === 'G'? 'C' : false).join('')
}


// Solution 3:

const DNAStrand = dna => dna.split('').map(x => x === 'A'? 'T': x === 'T'? 'A' : x === 'C'? 'G' : x === 'G'? 'C' : false).join('')


// Solution 4:

function DNAStrand(dna){
  let result = []
  let splitDNA = dna.split('')
  splitDNA.forEach(x => {
    if(x === 'A'){
      result.push('T')
    }else if(x === 'T'){
      result.push('A')
    }else if(x === 'C'){
      result.push('G')
    }else{
      result.push('C')
    }
  })
  return result.join('')
}

// Solution 5:

function DNAStrand(dna){
  let result = []
  let splitDNA = dna.split('')
  for(let i = 0; i < splitDNA.length; i++){
    if(splitDNA[i] === 'A'){
      result.push('T')
    }else if(splitDNA[i] === 'T'){
      result.push('A')
    }else if(splitDNA[i] === 'C'){
      result.push('G')
    }else{
      result.push('C')
    }
  }
  return result.join('')
}

