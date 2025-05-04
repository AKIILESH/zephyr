export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log({ name, email, message }); // or save to database
    res.status(200).json({ success: true });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
