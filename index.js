var customerName = "bob";

function upperCaseCustomerName() {
  customerName=customerName.toUpperCase()
 
}
function setBestCustomer() {
  bestCustomer='not bob'
}
function overwriteBestCustomer() {
  return bestCustomer='maybe bob'
}
const leastFavoriteCustomer = 'john'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer='not john'
}
  console.log(changeLeastFavoriteCustomer())