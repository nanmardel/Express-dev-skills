const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}

function deleteSkill(req, res) {
    console.log(req.params.id, '<- this id is the id of the skill thats being deleted');
    Skill.deleteSkill(req.params.id)
    res.redirect('/skills')
}

function index(req,res){
    res.render('skills/index',{
        skills: Skill.getAll()
    });
}

function show(req,res){
    console.log(req.params, '< req.params in show function')
    res.render('skills/show', {
        skillType: req.params.id,
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    Skill.addSkill(req.body)
    res.redirect('/skills')

}