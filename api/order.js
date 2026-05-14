export default async function handler(req, res) {

  if(req.method !== "POST"){
    return res.status(405).json({
      message:"Method not allowed"
    });
  }

  const { service, link, quantity } = req.body;

  const serviceMap = {
    "Instagram Followers": 1,
    "Facebook Followers": 2,
    "TikTok Likes": 3,
    "YouTube Views": 4
  };

  const serviceId = serviceMap[service];

  try{

    const response = await fetch("https://smmgen.com/api/v2",{
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body:new URLSearchParams({
        key:"558ef90ab6390256c30877184e8fcc03",
        action:"add",
        service:serviceId,
        link:link,
        quantity:quantity
      })
    });

    const data = await response.json();

    return res.status(200).json(data);

  }catch(error){

    return res.status(500).json({
      message:"Server Error"
    });

  }

}
