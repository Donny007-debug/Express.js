const roles = {
    admin : ['read', 'create', 'update', 'delete'],
    user  : ['read', 'create', 'update'],
    guest : ['read']
}

module.exports = roles;