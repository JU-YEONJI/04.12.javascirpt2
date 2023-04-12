// console.log('welcome')

const all = {
    type : 'it',
    title : 'javascript',
    'all-time':300,
    num:[0,1,2],
    str:{
        a:'no01',
        b:'no02'
    }
}

// 객체 인덱싱기법

//[a,b,c,d]->
// 0 1 2 3

console.log(all.type);
console.log('title');
console.log(all['all-time'])
console.log(all.num[1]);
console.log(all['num'][1]);
console.log(all.str.a);
console.log(all['str']);
console.log(all['str'].a);
console.log(all['str']['a']);