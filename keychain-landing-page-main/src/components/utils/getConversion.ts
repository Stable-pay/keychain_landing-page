"use server";


export const exchangeRate = async (currency :string) => {
  if (currency === "INR") {
    try{
        const onrampMoneyData = await fetch(
          'https://keychain-api.onrender.com/api/exchange/',
          // 'http://localhost:8000/api/exchange/exchange-rate/',
          {
            next:{
              revalidate:300,
            }
          }
        );
    
        const response=await onrampMoneyData.json();
          // console.log("INR:response",response);


        return response.data.rate;
        
      }catch(err){
        console.log("Data fetching onramp error:",err);
      }
      
  }
  return null;
};
