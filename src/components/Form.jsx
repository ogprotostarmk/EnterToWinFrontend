import React, { useState } from 'react'
import ReCAPTCHA  from "react-google-recaptcha";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Form = ({team, code}) => {
    const [captcha, setCatpcha] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [rewards, setRewards] = useState([]);
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const [fieldsStatus, setFieldsStatus] = useState({
        name: false,
        phone: false,
        email: false,
    });

    const isValid = fieldsStatus.name &&
                    fieldsStatus.phone &&
                    fieldsStatus.email &&
                    isAgreementChecked &&
                    rewards.length !== 0 && 
                    captcha ? true : false;

    const handleAgreementChange = () => {
        setIsAgreementChecked(!isAgreementChecked);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            phone: phone,
            email: email,
            team: team,
            code: code,
            reward: rewards.length === 1 ? rewards[0] : rewards.join(",")
        }

        try {
            setIsSent(true);
            await toast.promise(
              axios.post(`https://api.playfuninc.org/api/v1/form/register`, body),
            //   axios.post(`http://localhost:3977/api/v1/form/register`, body),
              {
                loading: 'Loading',
                success: 'Sent!',
                error: 'An error occurred!',
              }
            );
            setTimeout(() => {
                setIsSent(false);
            }, 3000);
          } catch (error) {
            console.error(error);
            setIsSent(false)
          }

    }
   
  return (
        <div className={`lg:w-[1024px] m-auto flex flex-col items-start sm:items-center ${team === "saints" || team === "jaguars" ? "text-black" : "text-white"}`}>
            <div className="lg:flex-row lg:flex-wrap flex flex-col justify-start w-full">
                <div className='lg:mb-[30px] flex flex-col my-[25px] relative'>
                    <label htmlFor="name" className='mb-[5px] font-[700] flex flex-row items-center absolute left-0 top-[-35px]'>Name <span className='text-[red] text-[20px] font-[700]'>*</span></label>
                    <input type="text" id='name' className='xl:w-[480px] lg:w-[465px] sm:h-[50px] w-full h-[40px] rounded-[10px] text-[black] p-[10px]' 
                         onChange={(e) => {
                            setName(e.target.value);
                            setFieldsStatus((prev) => ({
                                ...prev,
                                name: e.target.value.length !== 0
                            }))
                         }}
                    />
                    
                </div>
                <div className='lg:mb-[0px] lg:ml-auto flex flex-col my-[25px] relative'>
                    <label htmlFor="phone" className='mb-[5px] font-[700] flex flex-row items-center absolute left-0 top-[-35px]'>Phone <span className='text-[red] text-[20px] font-[700]'>*</span></label>
                    <input type="text" id='phone' className='xl:w-[480px] lg:w-[465px] sm:h-[50px] w-full h-[40px] rounded-[10px] text-[black] p-[10px]' 
                        onChange={(e) => {
                            setPhone(e.target.value);
                            setFieldsStatus((prev) => ({
                                ...prev,
                                phone: e.target.value.length !== 0
                            }))
                        }}
                    />
                </div>
                <div className='lg:mb-[0px] flex flex-col my-[25px] relative'>
                    <label htmlFor="email" className='mb-[5px] font-[700] flex flex-row items-center absolute left-0 top-[-35px]'>Email <span className='text-[red] text-[20px] font-[700]'>*</span></label>
                    <input type="email" placeholder='e.g jhondoe@mail.com' id='email' className='xl:w-[480px] lg:w-[465px] sm:h-[50px] w-full h-[40px] rounded-[10px] text-[black] p-[10px]' 
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setFieldsStatus((prev) => ({
                                ...prev,
                                email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value),
                            }))
                            }
                        }
                    />
                </div>
            
            </div>

            <div className="flex flex-col gap-3 self-start">
                <p className={`mt-[25px] text-[18px] font-[600] ${team === "saints" || team === "jaguars" ? "text-black font-[700]" : "text-white"}`}>Choose as many as you would like to be entered to win. <span className='text-[red] font-[700] text-[20px]'>*</span></p>
                <div className='flex flex-row items-center'>
                    <input type="checkbox" id="home game" name="Home Game Tickets" value="Home Game Tickets" onClick={(e) => {
                        if(rewards.includes(e.target.value)){
                            const removed = rewards.filter(option => option !== e.target.value )
                            setRewards(removed);
                        } else{
                            setRewards([...rewards, e.target.value])
                        }
                    }} className='sm:w-[20px] sm:h-[20px]'/> <p className={`sm:text-[20px] ml-[5px] text-[16px] ${team === "saints" || team === "jaguars" ? "font-[600]" : ""}`}>Home Game Tickets (Est. value $500 - $800)</p>
                </div>
                <div className='flex flex-row items-center'>
                    <input type="checkbox" id="Signed Merchandise" name="Signed Merchandise" value="Signed Merchandise" onClick={(e) => {
                        if(rewards.includes(e.target.value)){
                            const removed = rewards.filter(option => option !== e.target.value )
                            setRewards(removed);
                        } else{
                            setRewards([...rewards, e.target.value])
                        }
                    }} className='sm:w-[20px] sm:h-[20px]'/> <p className={`sm:text-[20px] ml-[5px] text-[16px] ${team === "saints" || team === "jaguars" ? "font-[600]" : ""}`}>Signed Merchandise (Est. value $500)</p>
                </div>
                <div className='flex flex-row items-center'>
                    <input type="checkbox" id="Swag Prize Package" name="Swag Prize Package" value="Swag Prize Package" onClick={(e) => {
                        if(rewards.includes(e.target.value)){
                            const removed = rewards.filter(option => option !== e.target.value )
                            setRewards(removed);
                        } else{
                            setRewards([...rewards, e.target.value])
                        }
                    }} className='sm:w-[20px] sm:h-[20px]'/> <p className={`sm:text-[20px] ml-[5px] text-[16px] ${team === "saints" || team === "jaguars" ? "font-[600]" : ""}`}>Swag Prize Package (Est. value $300)</p>
                </div>
                <div className='flex flex-row items-center'>
                    <input type="checkbox" id="All Options" name="All Options" value="All Options" onClick={(e) => {
                        if(rewards.includes(e.target.value)){
                            const removed = rewards.filter(option => option !== e.target.value )
                            setRewards(removed);
                        } else{
                            setRewards([...rewards, e.target.value])
                        }
                    }} className='sm:w-[20px] sm:h-[20px]'/> <p className={`sm:text-[20px] ml-[5px] text-[16px] ${team === "saints" || team === "jaguars" ? "font-[600]" : ""}`}>Check this box to enter me in all options.</p>
                </div>
                {/* <p className="text-default-500 text-small">Selected: {rewards.join(", ")}</p> */}
            </div>
            <div className='lg:self-start mt-[25px] self-center'>
                <ReCAPTCHA sitekey='6LeD_pcoAAAAAHRJyaaztK9CnOcorApTh7vVjMVf' onChange={setCatpcha}/>
            </div>
            <div className='s-agreement:h-[80px] flex flex-row items-start self-start mt-[30px] w-full h-[100px]'>
                <div className='h-full flex items-start mt-[5px] mr-2'>
                    <input type="checkbox" id="agreement" name="agreement" checked={isAgreementChecked} onChange={handleAgreementChange} className='sm:w-[20px] sm:h-[20px] w-[22px] h-[22px]' /> 
                </div>
                <div className='h-full'>
                    <p className={`sm:text-[20px] ml-[5px] text-[16px] ${team === "saints" || team === "jaguars" ? "font-[600]" : ""}`}>
                        By clicking this box you agree to the <a href='https://www.americascardroom.net/terms-and-conditions/' target='_blank' className='lg:text-[20px] self-center underline font-[500]'>terms and conditions</a> and <a href='https://www.playfuninc.com/privacy-policy/' target='_blank' className='lg:text-[20px] self-center underline font-[500]'>privacy policy</a> of playfun Inc Dba: Americascardroom.net
                    </p>
                </div>
            </div>
            <button 
                    disabled={!isValid || isSent} 
                    className={`px-[20px] py-[15px] w-[200px] border border-black rounded-[50px] bg-black text-white lg:self-start mt-[30px] self-center mb-[40px] ${!isValid || isSent ? " opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handleOnSubmit}
                    >Submit</button>
            <div><Toaster/></div>
        </div>
  )
}

export default Form