const paginate = (model) => async (req, res, next) => {

  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;

  
  const results = {};

  try {

    const totalDocuments = await model.countDocuments().exec();
  
    results.totalPages = Math.ceil(totalDocuments / limit);
    results.currentPage = page;
    results.totalDocuments = totalDocuments;

    if (startIndex + limit < totalDocuments) {
      results.nextPage = page + 1;
    } else {
      results.nextPage = null;
    }

    if (startIndex > 0) {
      results.previousPage = page - 1;
    } else {
      results.previousPage = null;
    }

    results.data = await model.find().limit(limit).skip(startIndex).exec();

    
    res.paginatedResults = results;

    next();
  } catch (error) {
    res.status(500).json({ message: "Error with pagination", error: error.message });
  }
};

module.exports = paginate;
