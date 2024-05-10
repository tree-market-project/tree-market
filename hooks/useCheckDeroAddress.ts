"use client"
import nameToAddress from "@/API/nameToAddress";
import checkRegistration from "@/API/checkRegistration";
import { DeroAddress } from "@/types";

export function useCheckDeroAddress(){
const checkDeroAddress = async(input:string)=>{
    var addressObject:DeroAddress ={address:"",name:"",registered:false}
    let registered = await checkRegistration(input)
   if(registered){
    addressObject.address = input
    addressObject.registered = true
   }else{
    let address = await nameToAddress(input)
    if(address){
        addressObject.address = address
        addressObject.name = input
        addressObject.registered = true
    }
   }
   return addressObject
    
}

return checkDeroAddress;
}