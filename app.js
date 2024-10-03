
function calculateTip(){

    //get input type value
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    //Calculate tip and Total amount
    const tipAmount = billAmount * (tipPercentage/100);
    const totalAmount = tipAmount * billAmount;

    //Display the Result
    document.getElementById("tip-amount").textContent = "$" + tipAmount;
    document.getElementById("total-amount").textContent = "$" + totalAmount;
}