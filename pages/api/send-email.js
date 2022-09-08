

export default async function handler(req, res) {

  res.status(200).json({ name: "Message sent: %s" })
}
  