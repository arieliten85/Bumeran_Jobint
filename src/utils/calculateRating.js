const calculateRating = (arr) => {
  let rating = 0;
  arr.map((search) => (rating += Number(search.ratingRecruiter)));
  return rating / arr.length;
};

export default calculateRating;
