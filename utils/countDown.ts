"use client";

function timeRemaining(){
    const days = (1712494800000 - Date.now() )/(1000*60*60*24)
    const hours = (days-Math.floor(days))*24
    const mins = (hours-Math.floor(hours))*60
  
  return({days:Math.floor(days),hrs:Math.floor(hours),mins:Math.round(mins)})
} 
export default timeRemaining;