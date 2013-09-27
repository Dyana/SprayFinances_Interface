(function() {

    /**
     * @constructor
     */
    function sprayDom() {};

    /**
     * @constructor
     */
    function sprayDomElementNode() {};

    var el = {

        /**
         * Will set the HTML element to have the id passed; if no argument
         * is passed the id set to the element will be returned.
         *
         * @param id string
         * @returns this|string|null
         */
        id: function(id) {
            if (id !== undefined) {
                this.node.id = id;
                return this;
            }

            return (this.node.id) ? this.node.id : null;
        },

        /**
         * Allows the setting of 1 or more classes to an element; you may set
         * multiple classes by passing an array of className to set.
         *
         * @param className string|array
         * @returns this
         */
        addClass: function(className) {
            if (className !== undefined) {
                if (className instanceof Array) {
                    for (var i = 0, l = className.length; i < l; i++) {
                        this.node.classList.add(className[i]);
                    }
                } else {
                    this.node.classList.add(className);
                }
            }

            return this;
        },

        /**
         * Allows the removal of 1 or more classes from an element; you may
         * remove multiple classes by passing an array of className to remove
         *
         * @param className string|array
         * @returns this
         */
        removeClass: function(className) {
            if (className instanceof Array) {
                for (var i = 0, l = className.length; i < l; i++) {
                    this.node.classList.remove(className[i]);
                }
            } else {
                this.node.classList.remove(className);
            }

            return this;
        },

        /**
         * Allows easy determination if an element has a specific set of classNames
         * already added to it; you can check if multiple classes are present
         * by passing an array, if all classes in the array are not present
         * then false will be returned.
         *
         * @param className string|array
         * @returns boolean
         */
        hasClass: function(className) {
            var has = true;
            if (className instanceof Array) {
                for (var i = 0, l = className.length; i < l; i++) {
                    if (!this.node.classList.contains(className[i])) {
                        has = false;
                        break;
                    }
                }
            } else {
                has = this.node.classList.contains(className);
            }

            return has;
        },

        /**
         * Allows the retrieval and setting of an element's text content.
         *
         * @param val string|void
         * @returns this|string
         */
        text: function(val) {
            if (val !== undefined) {
                this.node.textContent = val;
                return this;
            }

            return this.node.textContent;
        },

        /**
         *
         * @param key string|object
         * @param val string|void
         * @return this|string
         */
        attr: function(key, val) {
            var a;
            if (key !== undefined && val !== undefined) {
                a = document.createAttribute(key);
                a.nodeValue = val;

                this.node.setAttribute(key, val);
                return this;
            }

            if (typeof key === 'object') {
                for (var prop in key) {
                    this.node.setAttribute(prop, key[prop]);
                }

                return this;
            }

            return this.node.getAttribute(key);
        },

        /**
         *
         * @param key string|object
         * @param val string|void
         */
        dataAttr: function(key, val) {

        },

        append: function(element) {

        }

    };

    var getElementNodeProps = function(node, typeId) {
        return {
            node: {
                get: function() { return node; },
                set: function() { throw 'You may not set the \'node\' property of a dom element'; }
            },
            typeId: {
                get: function() { return typeId; },
                set: function() { throw 'You may not set the \'typeId\' property of a dom element'; }
            }
        }
    };

    var elementNode = function(node, typeId) {
        sprayDomElementNode.prototype = Object.create(el, getElementNodeProps(node, typeId));
        return new sprayDomElementNode();
    };

    var readyConfig = {
        callbackSet: false,
        callbacks: [],
        readyEvent: null,
        mainCallback: function(event) {
            readyConfig.readyEvent = event;
            for (var i = 0, l = readyConfig.callbacks.length; i < l; i++) {
                readyConfig.callbacks[i].call(this, event);
            }
        }
    };

    var dom = {

        ready: function(callback) {
            if (!readyConfig.callbackSet) {
                window.addEventListener('DOMContentLoaded', function(event) {
                    readyConfig.mainCallback.call(window.sprayDom, event);
                }, false);

                readyConfig.callbackSet = true;
            }

            if (!readyConfig.readyEvent) {
                readyConfig.callbacks.push(callback);
            } else {
                callback.call(window.sprayDom, readyConfig.readyEvent);
            }
        },

        element: function(name) {
            var node = document.createElement(name),
                typeId = 'dom_' + name;

            return elementNode(node, typeId);
        },

        a: function() {
            return this.element('a');
        },

        abbr: function() {
            return this.element('abbr');
        },

        address: function() {
            return this.element('address');
        },

        area: function() {
            return this.element('area');
        },

        article: function() {
            return this.element('article');
        },

        aside: function() {
            return this.element('aside');
        },

        audio: function() {
            return this.element('audio');
        },

        b: function() {
            return this.element('b');
        },

        base: function() {
            return this.element('base');
        },

        bdi: function() {
            return this.element('bdi');
        },

        bdo: function() {
            return this.element('bdo');
        },

        blockquote: function() {
            return this.element('blockquote');
        },

        body: function() {
            return this.element('body');
        },

        br: function() {
            return this.element('br');
        },

        button: function() {
            return this.element('button');
        },

        canvas: function() {
            return this.element('canvas');
        },

        caption: function() {
            return this.element('caption');
        },

        cite: function() {
            return this.element('cite');
        },

        code: function() {
            return this.element('code');
        },

        col: function() {
            return this.element('col');
        },

        colgroup: function() {
            return this.element('colgroup');
        },

        data: function() {
            return this.element('data');
        },

        datalist: function() {
            return this.element('datalist');
        },

        dd: function() {
            return this.element('dd');
        },

        del: function() {
            return this.element('del');
        },

        details: function() {
            return this.element('details');
        },

        dfn: function() {
            return this.element('dfn');
        },

        div: function() {
            return this.element('div');
        },

        dl: function() {
            return this.element('dl');
        },

        dt: function() {
            return this.element('dt');
        },

        em: function() {
            return this.element('em');
        },

        embed: function() {
            return this.element('embed');
        },

        fieldset: function() {
            return this.element('fieldset');
        },

        figcaption: function() {
            return this.element('figcaption');
        },

        figure: function() {
            return this.element('figure');
        },

        footer: function() {
            return this.element('footer');
        },

        form: function() {
            return this.element('form');
        },

        h1: function() {
            return this.element('h1');
        },

        h2: function() {
            return this.element('h2');
        },

        h3: function() {
            return this.element('h3');
        },

        h4: function() {
            return this.element('h4');
        },

        h5: function() {
            return this.element('h5');
        },

        h6: function() {
            return this.element('h6');
        },

        head: function() {
            return this.element('head');
        },

        header: function() {
            return this.element('header');
        },

        hr: function() {
            return this.element('hr')
        },

        html: function() {
            return this.element('html');
        },

        i: function() {
            return this.element('i');
        },

        iframe: function() {
            return this.element('iframe');
        },

        img: function() {
            return this.element('img');
        },

        input: function() {
            return this.element('input');
        },

        ins: function() {
            return this.element('ins');
        },

        kbd: function() {
            return this.element('kbd');
        },

        label: function() {
            return this.element('label');
        },

        legend: function() {
            return this.element('legend');
        },

        li: function() {
            return this.element('li');
        },





        p: function() {
            return this.element('p');
        }
    };

    sprayDom.prototype = Object.create(dom, {
        version: {
            value: '0.1.0a',
            writable: false
        }
    });

    window.sprayDom = new sprayDom();
})();
