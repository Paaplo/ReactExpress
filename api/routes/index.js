'use strict';
import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
const Post = mongoose.model('Post');

router.route('/').get(function (req, res) {
	return res.send('Hello from api');
});


router.route('/posts')
	.post(function(req, res){

		var post = new Post();
		post.text = req.body.text;
		post.title = req.body.title;
		post.created_by = req.body.created_by;
		post.save(function(err, post) {
			if (err){
				return res.send(500, err);
			}
			return res.json({SUCCESS: post});
		});
	})
	.get(function(req, res){
		Post.find(function(err, data){
			if(err){
				return res.send(500, err);
			}
			return res.send(data);
		});
	});

router.route('/posts/:id')
	.get(function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err){
				return res.send({ERROR: err});
			}
			return res.json(post);
		});
	}) 
	//updates specified post
	.put(function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err){
				return res.send({ERROR: err});
			}
			post.created_by = req.body.created_by;
			post.text = req.body.text;		
           	post.title = req.body.title;

			post.save(function(err, post){
				if(err){
					return res.send({ERROR: err});
				}
				return res.json({UPDATED: post});
			});
		});
	})
	//deletes the post
	.delete(function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if(err) {
                res.json({ERROR: err});
            } else {
                post.remove(function(err){
                    if(err) {
                        res.json({ERROR: err});
                    } else {
                        res.json({REMOVED: post});
                    }
                });
            }
        });
	});

export default router;
