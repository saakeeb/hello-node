let count = 0;
function viewCount(req, res, next) {
    count++;
    console.log('Count: ', count);
    // res.send('view count');
    next();
}
module.exports = viewCount;