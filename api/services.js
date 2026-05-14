export default async function handler(req, res) {

  const response = await fetch("https://smmgen.com/api/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      key: "YOUR_API_KEY",
      action: "services"
    })
  });

  const data = await response.json();

  res.status(200).json(data);

}
