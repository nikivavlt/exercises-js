import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parse } from '../src/index.js';

describe('HTML Builder', () => {
    describe('Basic tag parsing', () => {
        it('should parse simple tag with content', () => {
            const result = parse(['div', 'Hello']).toString();
            assert.equal(result, '<div>Hello</div>');
        });

        it('should parse tag with attributes', () => {
            const result = parse(['div', { class: 'container' }, 'text']).toString();
            assert.equal(result, '<div class="container">text</div>');
        });

        it('should parse tag with multiple attributes', () => {
            const result = parse(['div', { class: 'box', id: 'main' }]).toString();
            assert.match(result, /<div (class="box" id="main"|id="main" class="box")><\/div>/);
        });
    });

    describe('Self-closing tags', () => {
        it('should parse img tag', () => {
            const result = parse(['img', { src: 'pic.jpg', alt: 'Photo' }]).toString();
            assert.match(result, /<img (src="pic.jpg" alt="Photo"|alt="Photo" src="pic.jpg") \/>/);
        });

        it('should parse br tag', () => {
            const result = parse(['br']).toString();
            assert.equal(result, '<br />');
        });

        it('should parse input tag', () => {
            const result = parse(['input', { type: 'text', name: 'username' }]).toString();
            assert.match(result, /<input (type="text" name="username"|name="username" type="text") \/>/);
        });
    });

    describe('Nested structures', () => {
        it('should parse nested tags', () => {
            const dsl = [
                'div',
                [
                    ['p', 'Paragraph 1'],
                    ['p', 'Paragraph 2']
                ]
            ];
            const result = parse(dsl).toString();
            assert.equal(result, '<div><p>Paragraph 1</p><p>Paragraph 2</p></div>');
        });

        it('should parse deeply nested structure', () => {
            const dsl = [
                'html',
                [
                    ['head', [['title', 'Test']]],
                    ['body', [
                        ['h1', 'Title'],
                        ['div', [['span', 'Nested']]]
                    ]]
                ]
            ];
            const result = parse(dsl).toString();
            assert.equal(
                result,
                '<html><head><title>Test</title></head><body><h1>Title</h1><div><span>Nested</span></div></body></html>'
            );
        });
    });

    describe('Complex scenarios', () => {
        it('should handle mixed attributes and children', () => {
            const dsl = [
                'div',
                { class: 'wrapper' },
                [
                    ['h1', { id: 'title' }, 'Header'],
                    ['p', 'Content']
                ]
            ];
            const result = parse(dsl).toString();
            assert.equal(
                result,
                '<div class="wrapper"><h1 id="title">Header</h1><p>Content</p></div>'
            );
        });

        it('should handle empty tags', () => {
            const result = parse(['div']).toString();
            assert.equal(result, '<div></div>');
        });

        it('should handle tags with only attributes', () => {
            const result = parse(['div', { class: 'empty' }]).toString();
            assert.equal(result, '<div class="empty"></div>');
        });
    });

    describe('Error handling', () => {
        it('should throw on non-array DSL', () => {
            assert.throws(
                () => parse('not-an-array'),
                /DSL must be a non-empty array/
            );
        });

        it('should throw on empty array', () => {
            assert.throws(
                () => parse([]),
                /DSL must be a non-empty array/
            );
        });

        it('should throw on non-string tag name', () => {
            assert.throws(
                () => parse([123, 'content']),
                /First element must be a tag name/
            );
        });
        
        it('should throw on null element', () => {
            assert.throws(
                () => parse(['div', null]),
                /Invalid DSL element/
            );
        });
    });

    describe('Real-world example', () => {
        it('should parse complete HTML document', () => {
            const dsl = [
                'html',
                [
                    ['head', [
                        ['meta', { charset: 'UTF-8' }],
                        ['title', 'My Page']
                    ]],
                    ['body', [
                        ['header', [
                            ['h1', { class: 'title' }, 'Welcome']
                        ]],
                        ['main', [
                            ['p', 'First paragraph'],
                            ['img', { src: 'photo.jpg', alt: 'Photo' }],
                            ['p', 'Second paragraph']
                        ]],
                        ['footer', 'Copyright 2026']
                    ]]
                ]
            ];
            
            const result = parse(dsl).toString();
            assert.ok(result.includes('<html>'));
            assert.ok(result.includes('<h1 class="title">Welcome</h1>'));
            assert.ok(result.includes('<img src="photo.jpg" alt="Photo" />'));
            assert.ok(result.includes('</html>'));
        });
    });
});