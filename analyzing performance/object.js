const hursun = {
    name1: 'hursun',
    name2: 'hursun2',
    name3: 'hursun3'
}
hursun['name1'] = 'dhaya'


console.log(Object.hasOwnProperty('hursun2'))
console.log(Object.keys(hursun))
console.log('name1' in Object.keys(hursun))