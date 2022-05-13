const inform = (req, res, next) => {
  const { infos } = req.body;
  if (!infos || !Object.keys(infos)) return res.status(400).json({ "message": "O campo infos é obrigatório" });

  next();
};

module.exports = inform;