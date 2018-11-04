import User from '../models/user.model'
import _ from 'lodash'

function create (req, res, next){
    const user = new User(req.body);
    user.save((e,r) => {
      if (e) {
        return res.status(400).json({
          error: "Beep boop error" //TODO make error messages meaningful
        })
      }
      res.status(200).json({
        message: "User created successfully!"
      })
    })
}

function list (req, res){
    User.find((err, users) => {
        if (err) {
          return res.status(400).json({
            error: "Beep boop error" //TODO make error messages meaningful
          })
        }
        res.json(users)
      }).select('name email')
}

function userByID (req, res, next, id){
    User.findById(id).exec((err, user) => {
        if (err || !user)
        return res.status('400').json({
            error: "User not found."
        })
        req.profile = user;
        next();
    });
}

function read (req, res){
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}

function update (req, res, next){
    let user = req.profile;
    user = _.extend(user, req.body);
    user.updated = Date.now();
    user.save((err) => {
      if (err) {
        return res.status(400).json({
          error: "Beep boop error" //TODO make error messages meaningful
        })
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    })
}

function remove (req, res, next){
    let user = req.profile;
    user.remove((err, deletedUser) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      deletedUser.hashed_password = undefined;
      deletedUser.salt = undefined;
      res.json(deletedUser);
    })
}

export default { create, userByID, read, list, remove, update }