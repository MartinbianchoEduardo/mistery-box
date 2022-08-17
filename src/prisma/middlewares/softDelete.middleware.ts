export const softDeleteMiddleware = async (params, next) => {
  // Check incoming query type
  if (params.action == 'delete') {
    // Delete queries
    // Change action to an update
    params.action = 'update';
    params.args['data'] = { deleted: new Date() };
  }
  if (params.action == 'deleteMany') {
    // Delete many queries
    params.action = 'updateMany';
    if (params.args.data != undefined) {
      params.args.data['deleted'] = new Date();
    } else {
      params.args['data'] = { deleted: new Date() };
    }
  }

  if (params.action === 'findUnique' || params.action === 'findFirst') {
    // Change to findFirst - you cannot filter
    // by anything except ID / unique with findUnique
    params.action = 'findFirst';
    // Add 'deleted' filter
    // ID filter maintained
    params.args.where['deleted'] = null;
  }
  if (params.action === 'findMany') {
    // Find many queries
    if (params.args.where) {
      if (params.args.where.deleted == undefined) {
        // Exclude deleted records if they have not been explicitly requested
        params.args.where['deleted'] = null;
      }
    } else {
      params.args['where'] = { deleted: null };
    }
  }

  if (params.action == 'update') {
    // Change to updateMany - you cannot filter
    // by anything except ID / unique with findUnique
    params.action = 'updateMany';
    // Add 'deleted' filter
    // ID filter maintained
    params.args.where['deleted'] = null;
  }
  if (params.action == 'updateMany') {
    if (params.args.where != undefined) {
      params.args.where['deleted'] = null;
    } else {
      params.args['where'] = { deleted: null };
    }
  }

  return next(params);
};
