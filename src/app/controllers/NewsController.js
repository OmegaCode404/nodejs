class NewsController {
    // [GET] method
    index(req, res) {
        res.render('new');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();
