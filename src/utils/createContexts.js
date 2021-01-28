export function createFunctionalContext(node) {
  const newFunctionalContext = {
    name: node.id.name,
    context: 'functional'
  };

  return newFunctionalContext;
};

export function createGlobalContext() {
  const newGlobalContext = {
    name: 'global',
    context: 'global'
  };

  return newGlobalContext;
};
