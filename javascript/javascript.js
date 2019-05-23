// hiển thị icon black heart
function changeIcon(e) {

	//lấytoàn bộ tên class (tim trắng)	
	var selector_class_name = e.querySelector(".far").className;

	//truy cập vô icon tim đen
	var tim_den_class = e.querySelector(".black-heart-icon"); 

	//truy cập vô icon tim trắng
	var tim_trang_class = e.querySelector(".far");
	//lưu querySelector() --> truy xuất vào phần tử đầu tiên
	
	//so sanh tên class được lấy 
	if (selector_class_name == "far fa-heart fa-lg") {
		
		tim_trang_class.style.display="none";

		tim_den_class.style.display="inline-block";

		//Đổi tên tạm class emty-heart
		tim_trang_class.className="far";
	}
	else {

		tim_trang_class.style.display="inline-block";
		tim_den_class.style.display="none";
		//Đổi tên tạm class emty-heart
		tim_trang_class.className="far fa-heart fa-lg";		
	}	
}	

// slideshow trangchitietsanpham 
var index = 1;//x là index hiện tại
showSlides(index); //khởi tạo giá trị mặc định

//tạo nút  next


function next(n) {
	showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) { //n vừa nhận giá trị index vừa nhận giá trị -1 /1 của hàm next
	var slides = document.getElementsByClassName('slidesInBox'); //biến slides chứa các slide
	var activeImg = document.getElementsByClassName('galerryItem'); //biến chứa các hình con chưa được active
	var i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';  //tắt tất cả các hình trước
	}
	for (i = 0; i < activeImg.length; i++) {
		activeImg[i].className = activeImg[i].className.replace(" active", ""); //tắt tất cả active trước đó
	}
	if (n < 1) {
		 index = slides.length;
	}
	if (n > slides.length) {
		index = 1;
	}
	slides[index-1].style.display = "block";   //bật hình hiện tại
	activeImg[index-1].className += ' active';
}


// Tạo tab cho chitietsanpham
function showTab(e,id) {
	var tabButton = document.getElementsByClassName("tab-button"); // lấy tên class của button 
	var tabContent = document.getElementsByClassName("tab-content");// lấy tên class của content  
	var i;
	//off active
	for(i = 0; i < tabButton.length; i++) {
		tabButton[i].className = tabButton[i].className.replace(" active","");
	}
	//none content
	for(i=0; i<tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}
	document.getElementById(id).style.display = 'block';//cẩn thận ko ghi: tabButton[i].className += " active"; vì lấy id từ bên ngoài vào
	e.currentTarget.className += ' active'; //nghe sự kiện trực tiếp

}
 	document.getElementById("default").click(); //mặc định mở tab