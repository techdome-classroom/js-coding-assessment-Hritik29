const decodeTheRing = function (s, p) {
  if (s.length !== p.length) return false;

  for (let i = 0; i < s.length; i++) {
      if (p[i] !== '*' && s[i] !== p[i]) {
          return false;
      }
  }

  return true;
};

module.exports = decodeTheRing;
