module.exports = {
  getPartialSearchQuery: (key, value) => {
    const lastChar = value.charCodeAt(value.length - 1) + 1;
    const endValue = `${value.slice(0, -1)}${String.fromCharCode(lastChar)}`;

    return {
      $or: [
        {
          $and: [
            {[key]: {$gte: value}},
            {[key]: {$lt: endValue}}
          ]
        }, {
          [key]: { $regex: value }
        }

      ]
    }
  },
};