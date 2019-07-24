var amigos = ("../app/data/amigos.js");

module.exports = function (app) {

    app.get("/api/amigos", function (req, res) {
        res.json(amigos);
    });
    app.post("/api/amigos", function (req, res) {
        var bestMatch = {
            name: '',
            photo: '',
            amigoLikeness: 1000
        };
        var useData = req.body;
        var useScores = usedata.scores;
        var totalLikeness = 0;
        for (var i = 0; i < amigos.length; i++) {
            console.log(amigos[i].length);
            totalLikeness = 0;
            for (var j = 0; j < amigos[i].scores[j]; j++) {
                totalLikeness = + Math.abs(parseInt(useScores[j]) - parseInt(amigos[i].scores[j]));
                if (totalLikeness <= bestMatch.amigoLikeness) {
                    bestMatch.name = amigos[i].name;
                    bestMatch.photo = amigos[i].photo;
                    bestMatch.amigoLikeness = totalLikeness;
                }
            }
        }
        amigos.push(useData);
        res.json(bestMatch);
    })
}