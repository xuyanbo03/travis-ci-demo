'use strict';

var hello=require('./hello');

var expect=require('chai').expect;

describe('输出函数测试',function(){
    it('应该输出Hello World!',function(){
        expect(hello()).to.equal('Hello World!');
    });
});