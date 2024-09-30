"use strict";

const Post = require("../models/Post");

const postCtrl = {
    process: {
        create: async(req, res) => {
            try { 
                const post = new Post(req.body, req.file);
                const response = await post.create();
                res.status(response.code).end();         
            } catch(err) {
                res.status(500).json({message: "실패했음"});
            };
        }
    }
};

module.exports = postCtrl;