export default function handler(req, res){
    res.setPreviewData({user: 'bivas'})
    res.redirect(req.query.redirect)
}