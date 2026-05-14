export default async function handler(req, res) {

  const response = await fetch("https://smmgen.com/api/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      key: "3ee46c0db7aa26eb0574765950e8f36e",
      action: "services"
    })
  });

  const data = await response.json();

  res.status(200).json(data);

}
