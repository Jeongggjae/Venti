const members = require('./member');

function getFemale(members) {
  return new Promise(function (resolve, reject) {
      setTimeout(function(){
          const female = resolve(members.filter(memeber => member.gender === '여'));
          resolve(female)
      })
  })
}

function getYB(members) {
  return new Promise(function (resolve, reject) {
      setTimeout(function(){
          const yb = resolve(members.filter(member => member.status === 'YB'));
          resolve(yb);
        })
  })
}

function getiOS(members) {
  return new Promise(function (resolve, reject) {
      setTimeout(function(){
          const ios = resolve(members.filter(member =>  member.part === 'iOS' ));
          resolve(ios);
      })
  })
}

getFemale() //
  .then((member) => getYB(members))
  .then((member) => getiOS(members) )
  .then((member) => {
      console.log(members);
  });
