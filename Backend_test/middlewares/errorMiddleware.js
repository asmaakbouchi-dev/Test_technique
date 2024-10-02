// Middleware pour gérér l'erreur 404
const Erreur404 = (req, res) => {
    res.status(404).send(`erreur 404`);
};

module.exports = Erreur404;