function totalCost(arr) {
  const rta = arr.reduce((acc, item) => {
    if (item.cost) {
      acc += parseInt(item?.cost);
    }

    return acc;
  }, 0);
  return rta;
}

module.exports = totalCost;
