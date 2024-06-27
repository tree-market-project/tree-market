"use client"

import { createContext, useContext,useState,ReactNode } from "react"
import { ProfileContextType, DeroID } from "@/types"

const ProfileContext = createContext<ProfileContextType | undefined >(undefined)

function getProfilesFromLocalStorage() {
  const profiles:DeroID[] = [];
  if(typeof window == 'undefined'){
    return profiles
  }
  
  const pattern = /^profile-/;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (pattern.test(key||"")) {
      const profile:DeroID = JSON.parse(localStorage.getItem(key||"")||"");
      profiles.push(profile);
    }
  }

  return profiles;
}



const profiles = getProfilesFromLocalStorage();

const initialProfileState:ProfileContextType={
    activeProfile:null,
    setActiveProfile:()=>{},
    profiles:profiles,
    setProfiles:()=>{},
    newDetails:null,
    setNewDetails:()=>{}

}

export const useProfileContext = ()=>{
    const context = useContext(ProfileContext);
    if(!context){
        throw new Error('useProfileContext must be used within a ProfileProvider');
    }
    return context;
}

type ProfileProviderProps = {
    children: ReactNode;
  };
  
  // Create the provider component
  export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
    const [activeProfile, setActiveProfile] = useState(initialProfileState.activeProfile);
    const [profiles,setProfiles] = useState(initialProfileState.profiles)
    const [newDetails,setNewDetails] = useState(initialProfileState.newDetails)
   
  
    const contextValue: ProfileContextType = {
      profiles,
      setProfiles,
      activeProfile,
      setActiveProfile,
      newDetails,
      setNewDetails
    };
  
    return (
      <ProfileContext.Provider value={contextValue}>
        {children}
      </ProfileContext.Provider>
    );
  };