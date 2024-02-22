function AddingNumbers(){
function add (a: number , b: number){
    return a + b;
}

const twoPlusfour = add(2,4);
console.log(twoPlusfour );
return(

    <div>
        <h2>Functions</h2>
        <h3>Legacy ES5 functions</h3>
        twoPlusfour = {twoPlusfour} <br/>
        add(2, 4) = { add(2, 4) }<br />
    </div>
);
}

export default AddingNumbers;