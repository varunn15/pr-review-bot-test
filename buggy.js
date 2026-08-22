function divide(a, b) {
  return a / b;
}

app.get('/user', async (req, res) => {
  const user = await User.findOne({
    email: req.query.email
  });
  res.json(user);
});
// Trigger fresh review
