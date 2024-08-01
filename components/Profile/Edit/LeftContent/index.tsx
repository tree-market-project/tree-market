"use client"
import ActiveWalletBox from "@/components/Wallet/ActiveWalletBox"
import { useEditDeroID } from "@/hooks/useEditDeroID"
import { useSearchParams } from "next/navigation"
import { useState,useEffect } from "react"
import { useProfileContext } from "@/contexts"
import { DeroID } from "@/types"
import getDeroID from "@/API/getDeroID"

interface FormState {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  website: string;
  fb: string;
  insta: string;
  twitter: string;
  linkedin: string;
  otherSocials: { label: string; url: string }[];
  billingAddress:{line1:string; line2: string; city:string;state:string; zip: string; country: string};
  shippingAddress:{line1:string; line2: string; city:string;state:string; zip: string; country: string};
}

const initialState: FormState = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  website: '',
  fb: '',
  insta: '',
  twitter: '',
  linkedin: '',
  otherSocials: [{ label: '', url: '' }],
  billingAddress:{line1:'',line2:'',city:'',state:'',zip:'',country:''},
  shippingAddress:{line1:'',line2:'',city:'',state:'',zip:'',country:''}
};

const LeftContent:React.FC<{setShowSaveProfile:any,setShowRegisterDeroIDModal:any,toasterRef:any}> = ({setShowSaveProfile,setShowRegisterDeroIDModal,toasterRef})=>{
  
 

  const getID = async()=>{
    let newID = await getDeroID(scid)
    if(typeof newID == "string"){
      return
    }
    setID(newID)
  }

  useEffect(()=>{
    getID()
  },[])
  const editDeroID = useEditDeroID()
  const searchParams = useSearchParams()
  const scidParam = searchParams.get("scid")
  const scid = Array.isArray(scidParam)?scidParam[0]:scidParam||''
  const [id,setID] = useState<DeroID>({scid:scid})
  const [addressForm,setAddressForm] = useState("billing")

  const [image,setImage] = useState("")
  const [description,setDescription] = useState("")
  const {setNewDetails} = useProfileContext()
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleAddOtherSocial = () => {
    setFormState(prevState => ({
      ...prevState,
      otherSocials: [...prevState.otherSocials, { label: '', url: '' }]
    }));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number, field?: 'label' | 'url') => {
    const { name, value } = e.target;
    if (index !== undefined && field) {
      setFormState(prevState => {
        const otherSocials = [...prevState.otherSocials];
        otherSocials[index][field] = value;
        return { ...prevState, otherSocials };
      });
    }else if (name.startsWith("billingAddress") || name.startsWith("shippingAddress")) {
      const [addressType, addressField] = name.split(".");
      setFormState((prevState) => ({
        ...prevState,
        [addressType]: {
          ...prevState[addressType as 'billingAddress' | 'shippingAddress'],
          [addressField]: value,
        },
      }));
    } 
    else {
      setFormState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleChangeImage = (e:any)=>{
    setImage(e.target.value)
  }

  const handleChangeDescription = (e:any)=>{
    setDescription(e.target.value)
  }

  const handleSave = async ()=>{
    let newProfile:DeroID = {image:image||id.image,
      scid:scid,
      description:description||id.description,
      fname:formState.fname||id.fname,
      lname:formState.lname||id.lname,
      email:formState.email||id.email,
      website:formState.website||id.website,
      phone:formState.phone||id.phone,
      fb:formState.fb || id.fb,
      insta:formState.insta || id.insta,
      twitter:formState.twitter || id.twitter,
      linkedin:formState.linkedin || id.linkedin,
      otherSocials:formState.otherSocials || id.otherSocials,
    billingAddress:formState.billingAddress || id.billingAddress,
  shippingAddress:formState.shippingAddress || id.shippingAddress}
    setNewDetails(newProfile)
    setShowSaveProfile(true)
    //const txid = await editDeroID("image_url",image,"S",scid)
  }
    return(
        <div className="profile-content">
        {/* <!-- COMPONENT Content Container --> */}
        <div className="clear-both h-8"></div>
        <div className="content-container relative mx-auto w-full px-5 sm:px-6">
          <div className="item-contents flex flex-col gap-6">
            <div className="content-title">
              <h3 className="text-xl font-bold">
                Edit DeroID
              </h3>
            </div>{/* <!-- content-title --> */}

            <div className="description relative space-y-4">
              <p>DeroID is your cross-dAPP pseudonymous identity. You can add metadata such as image, description, website, or anything else. <u>All fields are optional.</u></p>
            </div>{/* <!-- description --> */}

            <div className="content-section relative grid gap-6">

              {/* <!-- COMPONENT Notification.active wallet --> */}
               <div className="notification active-wallet grid gap-2 bg-blue-50 px-4 py-2 rounded-lg shadow-sm shadow-gray-400 lg:hidden">
              <ActiveWalletBox toasterRef={toasterRef}/>
             
               
              </div>{/* <!-- notification --> */}

              {/* <!-- COMPONENT DeroID Name --> */}
              <div className="deroidname relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">DeroID Name</h3>
                  <div className="hidden registered text-xs bg-amber-50 px-2 py-1 rounded-full shadow-sm shadow-gray-400 cursor-default">Unregistered</div>
                </div>
                <div className="flex flex-col gap-2">
                  
                    {id.registeredNames?
                    id.registeredNames?.map((name,i)=><div key={i} className="deroid-name bg-gray-100 px-2 rounded-sm">{name}</div>)
                  :"Unnamed"}
                  
                  <p className="text-sm px-2">This is a unique name for your DeroID. This name is case insensitive. Once it is registered it cannot be used by anyone else.</p>
                  <hr />
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs bg-green-100 text-green-900 px-4 py-1 rounded-full">Requires <b>1 DNS</b> token for name registration</div>
                    <div onClick={()=>setShowRegisterDeroIDModal(true)} className="text-sm bg-[#3E7A57] text-white px-4 py-1 rounded-md cursor-pointer" >Register</div>
                  </div>
                </div>
              </div>{/* <!-- deroidname --> */}

              <div className="deroiddetails relative grid gap-4 bg-white w-full mx-auto rounded-lg p-4 shadow-sm shadow-gray-400">     
                <h3 className="font-semibold">DeroID Data</h3>
                <div className="input-fields flex flex-col gap-4">
                                        
                  <div className="input-deroid-img relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="didimg" className="text-sm font-semibold px-2">Image</label>
                    <input value={image} onChange={handleChangeImage} type="text" name="didimg" id="didimg" placeholder={id.image||"https://imageurl.website" }className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-deroid-img --> */}

                  <div className="input-deroid-bio relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <div className="flex items-center justify-between gap-2 pb-2">
                      <label htmlFor="didbio" className="text-sm font-semibold px-2">Bio</label>
                      <div className="flex items-center rounded-full text-xs shadow-sm shadow-gray-400">
                        <div className="selected shadow-inner shadow-gray-400 px-3 py-1 rounded-l-full cursor-default">Text</div>
                        <div className="unselected bg-gray-200 hover:shadow-inner hover:shadow-gray-400 px-3 py-1 rounded-r-full cursor-pointer">Visual</div>
                      </div>
                    </div>
                    <textarea value={description} onChange={handleChangeDescription} name="didbio" id="didbio" placeholder={id.description||"Add a description for this DeroID."} className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2 h-28"></textarea>
                  </div>{/* <!-- input-deroid-bio --> */}

                  <div>
      <div className="separator flex items-center justify-between gap-4 my-2">
        <div className="text-gray-700 font-medium shrink-0">Contact Information</div>
        <div className="h-2 border-b border-gray-200 w-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="input-firstname relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="fname" className="text-sm font-semibold px-2">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={formState.fname}
            onChange={handleChange}
            placeholder={id.fname||"John"}
            className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
          />
        </div>

        <div className="input-lastname relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
          <label htmlFor="lname" className="text-sm font-semibold px-2">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={formState.lname}
            onChange={handleChange}
            placeholder={id.lname||"Smith"}
            className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
          />
        </div>
      </div>

      <div className="input-email relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
        <label htmlFor="email" className="text-sm font-semibold px-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          placeholder={id.email||"example@email.com"}
          className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
        />
      </div>

      <div className="input-phone relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
        <label htmlFor="phone" className="text-sm font-semibold px-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder={id.phone||"(123)-456-7890"}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
        />
      </div>

      <div className="input-website relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
        <label htmlFor="website" className="text-sm font-semibold px-2">Website</label>
        <input
          type="text"
          name="website"
          id="website"
          value={formState.website}
          onChange={handleChange}
          placeholder={id.website||"https://yourwebsite.com"}
          className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
        />
      </div>
    </div>{/* <!-- input-website --> */}

                <>  
                <div className="separator flex items-center justify-between gap-4 my-2">
                    <div className="text-gray-700 font-medium shrink-0">Social Links</div>
                    <div className="h-2 border-b border-gray-200 w-full"></div>
                  </div>

                  <div className="input-fb relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="fb" className="text-sm font-semibold px-2">Facebook</label>
                    <input value={formState.fb} onChange={handleChange} type="text" name="fb" id="fb" placeholder="https://facebook.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-fb --> */}

                  <div className="input-insta relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="insta" className="text-sm font-semibold px-2">Instagram</label>
                    <input value={formState.insta} onChange={handleChange} type="text" name="insta" id="insta" placeholder="https://instagram.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-insta --> */}

                  <div className="input-twitter relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="twitter" className="text-sm font-semibold px-2">X (twitter)</label>
                    <input value={formState.twitter} onChange={handleChange} type="text" name="twitter" id="twitter" placeholder="https://twitter.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-twitter --> */}

                  <div className="input-linkedin relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                    <label htmlFor="linkedin" className="text-sm font-semibold px-2">LinkedIn</label>
                    <input value={formState.linkedin} onChange={handleChange} type="text" name="linkedin" id="linkedin" placeholder="https://linkedin.com/your_page_name" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                  </div>{/* <!-- input-linkedin --> */}

                  {formState.otherSocials.map((social, index) => (
                      <div key={index} className="grid grid-cols-2 gap-2 col-span-2">
                        <div className="input-deroid-other-label relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                          <label htmlFor={`other-label-${index}`} className="text-sm font-semibold px-2">Social Media Label</label>
                          <input
                            value={social.label}
                            onChange={(e) => handleChange(e, index, 'label')}
                            type="text"
                            name={`other-label-${index}`}
                            id={`other-label-${index}`}
                            placeholder="Label"
                            className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
                          />
                        </div>{/* <!-- input-deroid-other-label --> */}

                        <div className="input-deroid-other-url relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                          <label htmlFor={`other-url-${index}`} className="text-sm font-semibold px-2">URL</label>
                          <input
                            value={social.url}
                            onChange={(e) => handleChange(e, index, 'url')}
                            type="text"
                            name={`other-url-${index}`}
                            id={`other-url-${index}`}
                            placeholder="URL"
                            className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"
                          />
                        </div>{/* <!-- input-deroid-other-url --> */}
                      </div>
                    ))}

                  <div className="flex">
                    <div onClick={handleAddOtherSocial} className="text-sm bg-gray-200 px-4 py-2 rounded-md shadow-sm shadow-gray-400 cursor-pointer">Add Another</div>
                  </div>
                  </>

                   <>
                  <div className="separator flex items-center justify-between gap-4 my-2">
                    <div className="text-gray-700 font-medium shrink-0">Addresses</div>
                    <div className="h-2 border-b border-gray-200 w-full"></div>
                  </div>

                  <div className="address-toggle flex items-center justify-between gap-4">
                    <div onClick={()=>setAddressForm("billing")} className={`physical text-sm text-center py-2 ring-1 ring-gray-600 rounded-md w-full cursor-pointer ${addressForm=="billing"?'shadow-inner shadow-gray-400':'bg-gray-100 hover:shadow-inner hover:shadow-gray-400'}`}>Billing</div>
                    <div onClick={()=>setAddressForm("shipping")} className={`mailing text-sm text-center py-2 ring-1 ring-gray-600 rounded-md w-full cursor-pointer ${addressForm=="shipping"?'shadow-inner shadow-gray-400':'bg-gray-100 hover:shadow-inner hover:shadow-gray-400'}`}>Shipping</div>  
                  </div>{/* <!-- address-toggle --> */}

                  {addressForm=="billing"&&<div className="billing-address-fields flex flex-col gap-4">
                    <div className="address-public grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                      <input id="address_public" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                      <label htmlFor="address_public" className="checkbox text-sm font-medium">Make my billing address publicly viewable.</label>
                    </div>{/* <!-- address-public --> */}

                    <div className="input-address1 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="address1" className="text-sm font-semibold px-2">Address Line 1</label>
                      <input value={formState.billingAddress.line1} onChange={handleChange} type="text" name="billingAddress.line1" id="address1" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-address1 --> */}

                    <div className="input-address2 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="address2" className="text-sm font-semibold px-2">Address Line 2</label>
                      <input value={formState.billingAddress.line2} onChange={handleChange} type="text" name="billingAddress.line2" id="address2" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-address2 --> */}

                    <div className="input-city relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="city" className="text-sm font-semibold px-2">City</label>
                      <input value={formState.billingAddress.city} onChange={handleChange} type="text" name="billingAddress.city" id="city" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-city --> */}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="input-state relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label htmlFor="state" className="text-sm font-semibold px-2">State/Province</label>
                        <input value={formState.billingAddress.state} onChange={handleChange} type="text" name="billingAddress.state" id="state" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-state --> */}

                      <div className="input-zipcode relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label htmlFor="zipcode" className="text-sm font-semibold px-2">Zip/Postal Code</label>
                        <input value={formState.billingAddress.zip} onChange={handleChange} type="text" name="billingAddress.zip" id="zipcode" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-zipcode --> */}
                    </div>

                    <div className="input-country relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="country" className="text-sm font-semibold px-2">Country</label>
                      <input value={formState.billingAddress.country} onChange={handleChange} type="text" name="billingAddress.country" id="country" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-country --> */}

                  </div>}{/* <!-- billing-address-fields --> */}

                  {addressForm=="shipping"&&<div className="shipping-address-fields flex flex-col gap-4">
                    <div className="copy-physical grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                      <input id="copy_billing" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                      <label htmlFor="copy_billing" className="checkbox text-sm font-medium">Shipping address is the same as billing.</label>
                    </div>{/* <!-- copy-physical --> */}

                    <div className="shipaddress-public grid grid-flow-col justify-start items-center gap-3 mx-auto w-full px-2">
                      <input id="shipping_public" type="checkbox" value="" className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"/>
                      <label htmlFor="shipping_public" className="checkbox text-sm font-medium">Make my shipping address publicly viewable.</label>
                    </div>{/* <!-- address-public --> */}

                    <div className="input-address1 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="address1" className="text-sm font-semibold px-2">Address Line 1</label>
                      <input value={formState.shippingAddress.line1} onChange={handleChange} type="text" name="shippingAddress.line1" id="address1" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-address1 --> */}

                    <div className="input-address2 relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="address2" className="text-sm font-semibold px-2">Address Line 2</label>
                      <input value={formState.shippingAddress.line2} onChange={handleChange} type="text" name="shippingAddress.line2" id="address2" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-address2 --> */}

                    <div className="input-city relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="city" className="text-sm font-semibold px-2">City</label>
                      <input value={formState.shippingAddress.city} onChange={handleChange} type="text" name="shippingAddress.city" id="city" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-city --> */}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="input-state relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label htmlFor="state" className="text-sm font-semibold px-2">State/Province</label>
                        <input value={formState.shippingAddress.state} onChange={handleChange} type="text" name="shippingAddress.state" id="state" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-state --> */}

                      <div className="input-zipcode relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                        <label htmlFor="zipcode" className="text-sm font-semibold px-2">Zip/Postal Code</label>
                        <input value={formState.shippingAddress.zip} onChange={handleChange} type="text" name="shippingAddress.zip" id="zipcode" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                      </div>{/* <!-- input-zipcode --> */}
                    </div>

                    <div className="input-country relative grid items-center px-2 py-2 bg-gray-50 shadow-inner shadow-gray-400 ring-1 ring-gray-900/5 mx-auto w-full rounded-lg">
                      <label htmlFor="country" className="text-sm font-semibold px-2">Country</label>
                      <input value={formState.shippingAddress.country} onChange={handleChange} type="text" name="shippingAddress.country" id="country" placeholder="" className="py-1 text-sm sm:text-base bg-transparent focus:border-none focus:ring-0 focus:ring-inset px-2"/>
                    </div>{/* <!-- input-shipcountry --> */}

                  </div>}
                  </>{/* <!-- shipping-address-fields --> */}

                </div>{/* <!-- input-fields --> */}

                <hr />

                <div onClick={handleSave} className="btn grid text-center items-center bg-[#3E7A57] rounded-md h-[64px] cursor-pointer">
                  <div className="text-lg text-gray-50">Save Details</div>
                </div>
              </div>{/* <!-- deroiddetails --> */}

            </div>{/* <!-- content-section --> */}

          </div>{/* <!-- item-contents --> */}
        </div>{/* <!-- content-container --> */}
      </div>   
    )
}

export default LeftContent