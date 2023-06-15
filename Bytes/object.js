const CORRECT_INPUT = {
    type: 'support.task',
    attributes: {
        type: '1234567',
        email:"jodieeast@diversecare.com",
        replaceemail:"sdhk-2000@prenetics.com"
        
    },
}

const newobj= Object.assign({...CORRECT_INPUT},{extraAttribute:"extra"})
console.log(newobj);