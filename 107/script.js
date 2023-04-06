'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'asd',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
	data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) {
        // throw 'error: no id';
       throw new SyntaxError(`The element ${i + 1} have no id attribute`);
    }

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
	});
} catch(e) {
	if(e.name === 'SyntaxError') {
		console.log(e.message);
	} else throw e;
}

/* const err = new ReferenceError(`Random Message`);
console.log(err.name, err.message, err.stack); */