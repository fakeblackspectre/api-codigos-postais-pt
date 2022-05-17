const allRoles = {
  user: ['getDistritos'],
  admin: ['getUsers', 'manageUsers', 'getDistritos'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
