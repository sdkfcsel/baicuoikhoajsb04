// Quay lại đầu trang
let mybutton = document.getElementById("qldt2");
window.onscroll = function ()
{
  scrollFunction();
}

function scrollFunction() 
{
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "block";
  }
}
function topFunction()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Validate form
 function validateForm()
  {
   var ten = document.forms["form1"]["ten"].value;
   var tuoi = document.forms["form1"]["tuoi"].value;
   var sodienthoai = document.forms["form1"]["sodienthoai"].value;

   if (ten == "" || tuoi == "" || sodienthoai == "") 
   {
     alert("Thiếu thông tin");
     return false;
   }

   if (isNaN(tuoi) || isNaN(sodienthoai))
  {
     alert("Tuổi và số điện thoại không đúng định dạng");
     return false;
  }

   return true;
}

// Chuyển sang trang chính
 function page_redirect () 
 {
  if (ten == "" || tuoi == "" || sodienthoai == "") {
    
    return false;
  }
  else
  {
    window.location.assign("baicuoikhoa.html"); 
  }
   
}