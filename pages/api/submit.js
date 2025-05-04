export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, pn,email, message } = req.body;
    console.log({ name,pn, email, message }); // or save to database
    res.status(200).json({ success: true });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
