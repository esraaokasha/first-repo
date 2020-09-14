var productNameInput  = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var productNameAlert = document.getElementById("productNameAlert");
var  productPriceAlert=document.getElementById("productPriceAlert")
   

 function validatProductName(){
     

       var regex = /^[A-Z][a-z]{2,8}$/
         if(regex.test(productNameInput.value)== true)
         {

            productNameAlert.classList.replace("d-block","d-none");
            productNameInput.classList.add("is-valid")
            productNameInput.classList.remove("is-invalid");
         }
         else
         {
            productNameAlert.classList.replace("d-none","d-block");
            productNameInput.classList.add("is-invalid")
            productNameInput.classList.remove("is-valid");

         }

 }
 function validatProductPrice(){
     

    var regex = /^([5-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|10000)$/
      if(regex.test(productPriceInput.value)== true)
      {

         productPriceAlert.classList.replace("d-block","d-none");
         productPriceInput.classList.add("is-valid")
         productPriceInput.classList.remove("is-invalid");
      }
      else
      {
         productPriceAlert.classList.replace("d-none","d-block");
         productPriceInput.classList.add("is-invalid")
         productPriceInput.classList.remove("is-valid");

      }

}
 productNameInput.addEventListener("keyup",validatProductName);
 productPriceInput.addEventListener("keyup",validatProductPrice);
  
var productList ;
if (localStorage.getItem("ourproducts")==null)
     {
         productList=[];
     }
 else
     {
         productList=JSON.parse(localStorage.getItem("ourproducts"));
         display();
     }


function addProduct(){
    var product =
    { 
        name:productNameInput.value ,
        price:productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productList.push(product);
    localStorage.setItem("ourproducts",JSON.stringify(productList));
   display();
   clear();
}

function display()
{
 var cartoona =``;
    for(var i =0; i< productList.length; i++){
        cartoona+=`<tr>
                       <td>${i}</td>
                       <td>${productList[i].name}</td>
                       <td>${productList[i].price}</td>
                       <td>${productList[i]. category}</td>
                       <td>${productList[i].desc}</td>
                       <td> <button  class="btn btn-warning"> update</button></td>
                       <td> <button onclick="deleteProduct(${i});" class="btn btn-danger"> delete</button></td>
                    </tr> `;
    }
    document.getElementById("tablebody").innerHTML= cartoona;


}
function clear(){
    productNameInput.value='';
    productPriceInput.value='';
    productCategoryInput.value=``;
    productDescInput.value='';
}
function deleteProduct(index){
    productList.splice(index,i)
    localStorage.setItem("ourproducts",JSON.stringify(productList));
    display();}
     

    var searchInput=document.getElementById("searchInput");
    function searchProduct(){
        
    }


    
     





