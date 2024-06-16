const trimStr = (str) => str.trim().toLowerCase();

exports.trimStr = trimStr;

const convData = (Obj) => parseInt(JSON.stringify(Obj).match(/\d+/));

exports.convData = convData;