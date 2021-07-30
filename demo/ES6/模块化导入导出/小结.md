### import/export
本小结使用import...from... / export 导入导出

ES6 Module通过export导出模块，import … from '…'或import '…'同步导入模块。

### require()
import()与引号形式import的核心区别是，`import()`导入模块是异步的，而引号形式`import...from...`导入的模块是同步的。

webpack中常用

### CommonJS
CommonJS通过`module.exports`导出模块，`require('…')`同步导入模块。