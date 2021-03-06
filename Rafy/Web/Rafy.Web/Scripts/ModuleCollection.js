﻿/*******************************************************
 * 
 * 作者：胡庆访
 * 创建时间：201201
 * 说明：
 * 运行环境：.NET 4.0
 * 版本号：1.0.0
 * 
 * 历史记录：
 * 创建文件 胡庆访 201201
 * 
*******************************************************/

Ext.define('Rafy.ModuleCollection', {
    //private
    extend: 'Ext.util.MixedCollection',//key:keyLabel value:moduleObj
    _root: null,

    //getByLabel: function (keyLabel) {
    //    /// <summary>
    //    /// 根据模块的唯一名称来查找模块元数据
    //    /// </summary>
    //    /// <param name="keyLabel">模块的唯一名称</param>
    //    /// <returns>模块元数据</returns>
    //    return this.getByKey(keyLabel);
    //},
    getRoot: function () {
    	/// <summary>
    	/// 获取根模块（根模块只是一个二级模块的容器，不对应任何具体的模块。）
    	/// </summary>
    	/// <returns></returns>
        return this._root;
    },

    _setRoot: function (rootModule) {
        /// <summary>
        /// internal
        /// 设置模块的根对象
        /// </summary>
        /// <param name="rootModule">
        /// 模块类型是纯 json 对象，对应服务端的 ModuleJson 类型，有以下属性：
        /// kayLabel, templateType, model, url, viewName,
        /// children
        /// </param>

        this._root = rootModule;
        this._addRecur(this._root);
    },
    _addRecur: function (item) {
        this.add(item.keyLabel, item);

        var children = item.children;
        if (children) {
            for (var i = 0; i < children.length; i++) {
                this._addRecur(children[i]);
            }
        }
    }
});