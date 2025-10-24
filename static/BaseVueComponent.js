(function() {
    class BaseVueComonent {
        constructor() {
        }
        parse(obj) {
            // return JSON.parse(JSON.stringify(obj));
            return obj
        }

        static new(ops) {
            return new this(ops)
        }

        // vue 的 template 模板 要 return 出去， 继承子类可覆盖直接编写改方法
        baseHtml() {}

        // vue 的配置项 可自行编辑 覆盖 父类方法原始构造
        baseConfig() {
            return {};
        }

        // 生成该组件的 vue 配置项例如 methods props data 等
        baseOpt() {
            let t = this.baseHtml();
            let opt = {
                template: t,
                mixins: [this.baseConfig()]
            };

            return opt;
        }

        // 得到最后符合 vue 规范的组件配置进行 dom 挂载
        create() {
            return this.baseOpt();
        }

    }

    window.BaseVueComonent = BaseVueComonent
})();
