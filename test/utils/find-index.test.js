'use strict';

const test = require('ava');

const findIndex = require('../../lib/utils').findIndex;

test('should not find non existing block', t => {
    var decl = [{ block: 'block' }];

    t.is(findIndex(decl, { block: 'other-block' }), -1);
});

test('should not find non bem block', t => {
    t.is(findIndex(['string'], 'string'), -1);
});

test('should find block', t => {
    var entity = { block: 'block' },
        decl = [entity];

    t.is(findIndex(decl, entity), 0);
});

test('should find modifier of block', t => {
    var entity = { block: 'block', modName: 'mod', modVal: 'val' },
        decl = [entity];

    t.is(findIndex(decl, entity), 0);
});

test('should find element', t => {
    var entity = { block: 'block', elem: 'elem' },
        decl = [entity];

    t.is(findIndex(decl, entity), 0);
});

test('should find modifier of element', t => {
    var entity = { block: 'block', elem: 'elem', modName: 'mod', modVal: 'val' },
        decl = [entity];

    t.is(findIndex(decl, entity), 0);
});

test('should find equal entity', t => {
    var decl = [{ block: 'other-block' }, { block: 'block' }, { block: 'other-block' }];

    t.is(findIndex(decl, { block: 'block' }), 1);
});

test('should find equal entity by other object', t => {
    t.is(findIndex([{ block: 'block' }], { block: 'block' }), 0);
});

test('should find first equal entity', t => {
    var decl = [{ block: 'block' }, { block: 'other-block' }, { block: 'block' }];

    t.is(findIndex(decl, { block: 'block' }), 0);
});
