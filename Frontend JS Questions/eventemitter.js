function Emitter() {
  this._subs = {};
}
Emitter.prototype = {
  publish: function (name, data) {
    if (this._subs[name]) {
      this._subs[name].forEach((sub) => {
        sub(data);
      });
    }
  },
  subscribe: function (name, fn) {
    const self = this;
    if (this._subs[name]) {
      this._subs[name].push(fn);
    } else {
      this._subs[name] = [fn];
    }
    return function () {
      if (self._subs[name]) {
        self._subs[name] = self._subs[name].filter((sub) => fn !== sub);
      }
    };
  },
  unsubscribe: function (name, fn) {
    if (this._subs[name])
      this._subs[name] = this._subs[name].filter((sub) => fn !== sub);
  },
};

Emitter.prototype.constructor = Emitter;
