
this
undefined
null
true
false
'string'
"string"
`string with tags ${ assign({}, {}) }`
Infinity
NaN
-30
0.01
1e30
0x00001
/^regexp$/
/^regexp(group)$/
/^regexp(group(group(group(group))))$/
/^regexp\(not-a-group\)|[chars](group|[chars](group|[chars](group|[chars](group|[chars])+)?)*){8}$/
// Comment
/* Comment */
() => ()
() => {}
function() { return; }
function name() { return; }
function*() { yield; }
function* name() { yield; }
async function() {}
async function name() {}
export function name() { return; }
export default function name() { return; }
import name     from './path/to.js';
import { name } from './path/to.js';
const array  = [];
const object = {};
const fn     = () => {};
throw new Error()
try {}
catch(e) {}

const expression = (n + 1);
const [ value, ...array ] = array;
const { property, ...collection } = object;

const name = n => n + 1;
let   name = n => n + 1;
var   name = n => n + 1;

const name = (n) => n + 1;
let   name = (n) => n + 1;
var   name = (n) => n + 1;

const name = (n) => { n + 1; };
let   name = (n) => { n + 1; };
var   name = (n) => { n + 1; };

name = n => n + 1;
name = n => n + 1;
name = n => n + 1;

name = (n) => n + 1;
name = (n) => n + 1;
name = (n) => n + 1;

name = (n) => { n + 1; };
name = (n) => { n + 1; };
name = (n) => { n + 1; };

const name = function(n) { return n + 1; }
let   name = function(n) { return n + 1; }
var   name = function(n) { return n + 1; }

const name = function name(n) { return n + 1; }
let   name = function name(n) { return n + 1; }
var   name = function name(n) { return n + 1; }

name = function(n) { return n + 1; }
name = function(n) { return n + 1; }
name = function(n) { return n + 1; }

name = function name(n) { return n + 1; }
name = function name(n) { return n + 1; }
name = function name(n) { return n + 1; }

function Name(parameter) {
    this.property = 1;
}

throw new Error('Help!')

try {}
catch(e) {}

const object = {
    0:            'string \escape',
    1:            "string",
    property:     true,
    'property':   1,
    "property":   2,
    method:       function() {},
    method:       function name() {},
    arrow:        (n) => n + 1,
    ['computed']: 'string',
    ['computed']: 1,
    ['computed']: { a: 1 },
    ['computed']: function() {},
    ['computed']: function name() {},
    ['computed']: async function name() {},
    ['computed']: () => {},
    ['computed']: async () => {},
    set name() {},
    get name() {}
};

let array = [
    'string',
    0,
    true,
    undefined
];

name(hell, no);




object.thing;
object.thing();
object.thing().stuff;
object.thing().stuff.thing((n) => n + 1);

let variable = window.property;

fetch('url', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
    },
    body: JSON.stringify(data, 3)
})
.then((response) => response.json())
.catch((error) => {
    console.error('Error:', error);
});

if (object.property) {

}
else {

}

function Name(one, two) {

}

async function name() {
    yield 5;
    return 4;
}

const dddre = function arse() {

};

formData.forEach(function(value, key) {
    data[key] = value;
});

parseInt('1324')

c = new Name(dddre);

export function renderString(values) {
    const strings = values[0];
    return reduce(strings.map((string, i) => (
        //console.log(typeof string, string)
        i <= values.length ?
            // Strings 0 to n - 1
            stringify(values[i + 1], string, toText) :
            // Final string
            string === '' ? undefined :
            string
    )));
}

export default function Renderer(node, options, element) {
    this.element  = element || node;
    this.node     = node;
    this.path     = options.path;
    this.id       = ++meta.count;
    this.count    = 0;
    this.template = options.template;
}
