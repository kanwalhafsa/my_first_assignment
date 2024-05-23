// Question 37


function make_shirt(size:string = 'Large',message:string = 'I love Typescript'){
    console.log(`Making a ${size} t_shirt with the message ${message} printed on it. `);
}
make_shirt();

make_shirt('Medium');

make_shirt('Small','I love Python');