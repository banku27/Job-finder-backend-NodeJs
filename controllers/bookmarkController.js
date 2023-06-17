const Bookmark= require("../models/Bookmark");


module.exports = {
    createBookmark: async (req, res) => {
        const newBook=new Bookmark(req.body);
        try {
            await newBook.save();
            res.status(201).json("Bookmark successfully created");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteBookmark: async (req, res) => {
        try{
            await Bookmark.findByIdAndDelete(req.params.id);
            // const {__v,createdAt,updatedAt, ...updatedJobInfo }=updateJob._doc;
            res.status(200).json("Bookmark Successfully Deleted");
        } catch (error) {
            res.status(500).json(error)
        }
        },
        getBookmarks: async (req, res) => {
            try{
                const bookmarks= await Bookmark.find({
                    userId:req.params.userId
                });
                // const {__v,createdAt,updatedAt, ...updatedJobInfo }=updateJob._doc;
                res.status(200).json(bookmarks);
            } catch (error) {
                res.status(500).json(error)
            }
            },

}