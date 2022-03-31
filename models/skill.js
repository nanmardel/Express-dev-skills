const skills = [
    {id:0, skill: 'JavaScript', learned: true},
    {id:1, skill: 'HTML', learned: true},
    {id:2, skill: 'CSS', learned: true}
];
module.exports = {
    getAll,
    getOne,
    addSkill,
    deleteSkill
    
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function addSkill(skill) {
    skill.id = skills.length
    skill.learn = false
    return skills.push(skill)
}

function deleteSkill(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}