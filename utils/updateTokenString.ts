"use client"

function updateTokenString(amount:number,setTokenString:any){
        const thousands = Math.floor(amount/1000)
        const hundreds = Math.floor(amount%1000/100)
        const fifties = Math.floor(amount%100/50) 
        const tens = Math.floor(amount%50/10) 
        const ones = amount % 10
        var newTokenString = ""
        for(let i=0;i<thousands;i++){
          newTokenString+="🎄"
        }
        for(let i=0;i<hundreds;i++){
          newTokenString+="🌳"
        }
        for(let i=0;i<fifties;i++){
          newTokenString+="🌿"
        }
        for(let i=0;i<tens;i++){
          newTokenString+="☘"
        }
        for(let i=0;i<ones;i++){
          newTokenString+="🌱"
        }
        setTokenString(newTokenString)
      
}

export default updateTokenString;