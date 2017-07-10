export default = function (instance, options, Component) {
  var data = instance.get();
  instance.teardown();
  return new Component(Object.assign({}, options, { data: data }));
};
