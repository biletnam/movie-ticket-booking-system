/**
 * Created by Dhanuka Perera on 6/25/2017.
 */
angular.module('ticketBookingApp').controller('buyController', buyCtrl);

buyCtrl.$inject = ['$http', '$scope'];

function buyCtrl($http, $scope){

    $scope.test = function () {
        console.log("I am inside buy controller");
    }

    $scope.getTheaterData = function () {
        $http.get('http://192.168.1.6:9763/MovieService_1.0.0/services/movie_service/movieservice/GetAllTheaters').then(function (result) {
            var vm = this;
            vm.theaterData = result.data;
            $scope.theaters = vm.theaterData.theater;
            console.log($scope.theaters);
        });
    }

    $scope.test();
    $scope.getTheaterData();
    $scope.noOfTickets = 1;

    // Get list of movies, show times and categories for a selected theater
    $scope.getMoviesForAMovie= function (name ) {
        for(let i=0;i<$scope.theaters.length;i++)
        {
            if($scope.theaters[i].name == name){
                $scope.MovieList = $scope.theaters[i].moviesList;
                $scope.showTimeList = $scope.theaters[i].showTimes;
                $scope.categoryList = $scope.theaters[i].avaiableCategories;
                console.log($scope.theaters[i].moviesList);
                return;
            }
        }
    }

    // Get Restaurant information
    $scope.getFoodDeatils = function () {
        $http.get('http://192.168.1.6:9763/ResturentSservice_1.0.0/services/restaurant_service/GetAllFoodItems').then(function (result) {
            var vm = this;
            vm.foodData = result.data;
            $scope.foods = vm.foodData.restaurant;
            console.log($scope.foods);

            console.log($scope.foods[0].foodList[0].amount);

        });
    }
    
  /*  $scope.foodAndDrink = function () {
        
    }*/
  
    $scope.addFoodItems = function () {
        console.log("Clicked");
        let item = [];
        item.push($scope.selectedFoodItem1);
        item.push($scope.foodItemQty);

        $scope.foodAndDrinks= (item);

        console.log($scope.foodAndDrinks);

    }
    
    $scope.getFoodItemsForAType =function (foodType) {
        console.log(foodType);
        let arr = [];
        for(let i=0; i<$scope.foods.length ; i++)
        {
            if($scope.foods[i].type==foodType){
                console.log("fond");
                for(let j =0 ;j<$scope.foods[i].foodList.length ;j++){
                    arr.push($scope.foods[i].foodList[j].name);
                }

            }
        }
        console.log("dd"+arr);
        $scope.foodItemList = arr;
    }


    $scope.makePayment = function () {

        $http.post(`http://192.168.1.6:9763/PaymentService_1.0.0/services/payment_service/PaymentService/get/${$scope.cardNo}/${$scope.total}`).then(function (result) {
            console.log(result)
            $scope.result = result
        })

    }
    

    $scope.getFoodDeatils();

       // --- Seat Booking System

    // Define the color for unselected seats;
    $scope.on = {
        "background-color" : "coral"
    }
    // Define the color for selected seats;
    $scope.off ={
        "background-color" : "PaleGreen"
    }

    // Define array to store seat numbers
    $scope.seats = [];



    $scope.def1 = $scope.on;
    $scope.def2 = $scope.on;
    $scope.def3 = $scope.on;
    $scope.def4 = $scope.on;
    $scope.def5 = $scope.on;
    $scope.def6 = $scope.on;
    $scope.def7 = $scope.on;
    $scope.def8 = $scope.on;
    $scope.def9 = $scope.on;
    $scope.def10 = $scope.on;

    $scope.def11 = $scope.on;
    $scope.def12 = $scope.on;
    $scope.def13 = $scope.on;
    $scope.def14 = $scope.on;
    $scope.def15 = $scope.on;
    $scope.def16 = $scope.on;
    $scope.def17 = $scope.on;
    $scope.def18 = $scope.on;
    $scope.def19 = $scope.on;
    $scope.def20 = $scope.on;

    $scope.def21 = $scope.on;
    $scope.def22 = $scope.on;
    $scope.def23 = $scope.on;
    $scope.def24 = $scope.on;
    $scope.def25 = $scope.on;
    $scope.def26 = $scope.on;
    $scope.def27 = $scope.on;
    $scope.def28 = $scope.on;
    $scope.def29 = $scope.on;
    $scope.def30 = $scope.on;

    $scope.def31 = $scope.on;
    $scope.def32 = $scope.on;
    $scope.def33 = $scope.on;
    $scope.def34 = $scope.on;
    $scope.def35 = $scope.on;

    $scope.s1Clicked = false;
    $scope.s2Clicked = false;
    $scope.s3Clicked = false;
    $scope.s4Clicked = false;
    $scope.s5Clicked = false;
    $scope.s6Clicked = false;
    $scope.s7Clicked = false;
    $scope.s8Clicked = false;
    $scope.s9Clicked = false;
    $scope.s10Clicked = false;

    $scope.s11Clicked = false;
    $scope.s12Clicked = false;
    $scope.s13Clicked = false;
    $scope.s14Clicked = false;
    $scope.s15Clicked = false;
    $scope.s16Clicked = false;
    $scope.s17Clicked = false;
    $scope.s18Clicked = false;
    $scope.s19Clicked = false;
    $scope.s20Clicked = false;

    $scope.s21Clicked = false;
    $scope.s22Clicked = false;
    $scope.s23Clicked = false;
    $scope.s24Clicked = false;
    $scope.s25Clicked = false;
    $scope.s26Clicked = false;
    $scope.s27Clicked = false;
    $scope.s28Clicked = false;
    $scope.s29Clicked = false;
    $scope.s30Clicked = false;

    $scope.s31Clicked = false;
    $scope.s32Clicked = false;
    $scope.s33Clicked = false;
    $scope.s34Clicked = false;
    $scope.s35Clicked = false;

    $scope.s1 = function () {
        if($scope.s1Clicked){
            $scope.s1Clicked = false;
            $scope.def1=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("1"),1);
        }else{
            $scope.s1Clicked = true;
            $scope.def1=$scope.off;
            $scope.seats.push("1");
        }
        console.log($scope.seats);
    }
    $scope.s2 = function () {
        if($scope.s2Clicked){
            $scope.s2Clicked = false;
            $scope.def2=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("2"),1);
            $scope.count--;
        }else{
            $scope.s2Clicked = true;
            $scope.def2=$scope.off;
            $scope.seats.push("2");
            $scope.count++;
        }
        console.log($scope.seats);
    }
    $scope.s3 = function () {
        if($scope.s3Clicked){
            $scope.s3Clicked = false;
            $scope.def3=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("3"),1);
            $scope.count--;
        }else{
            $scope.s3Clicked = true;
            $scope.def3=$scope.off;
            $scope.seats.push("3");
            $scope.count++;
        }
        console.log($scope.seats);
    }
    $scope.s4 = function () {
        if($scope.s4Clicked){
            $scope.s4Clicked = false;
            $scope.def4=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("4"),1);
        }else{
            $scope.s4Clicked = true;
            $scope.def4=$scope.off;
            $scope.seats.push("4");
        }
        console.log($scope.seats);
    }
    $scope.s5 = function () {
        if($scope.s5Clicked){
            $scope.s5Clicked = false;
            $scope.def5=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("5"),1);
        }else{
            $scope.s5Clicked = true;
            $scope.def5=$scope.off;
            $scope.seats.push("5");
        }
        console.log($scope.seats);
    }
    $scope.s6 = function () {
        if($scope.s6Clicked){
            $scope.s6Clicked = false;
            $scope.def6=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("6"),1);
        }else{
            $scope.s6Clicked = true;
            $scope.def6=$scope.off;
            $scope.seats.push("6");
        }
        console.log($scope.seats);
    }
    $scope.s7 = function () {
        if($scope.s7Clicked){
            $scope.s7Clicked = false;
            $scope.def7=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("7"),1);
        }else{
            $scope.s7Clicked = true;
            $scope.def7=$scope.off;
            $scope.seats.push("7");
        }
        console.log($scope.seats);
    }
    $scope.s8 = function () {
        if($scope.s8Clicked){
            $scope.s8Clicked = false;
            $scope.def8=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("8"),1);
        }else{
            $scope.s8Clicked = true;
            $scope.def8=$scope.off;
            $scope.seats.push("8");
        }
        console.log($scope.seats);
    }
    $scope.s9 = function () {
        if($scope.s9Clicked){
            $scope.s9Clicked = false;
            $scope.def9=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("9"),1);
        }else{
            $scope.s9Clicked = true;
            $scope.def9=$scope.off;
            $scope.seats.push("9");
        }
        console.log($scope.seats);
    }
    $scope.s10 = function () {
        if($scope.s10Clicked){
            $scope.s10Clicked = false;
            $scope.def10=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("10"),1);
        }else{
            $scope.s10Clicked = true;
            $scope.def10=$scope.off;
            $scope.seats.push("10");
        }
        console.log($scope.seats);
    }
    $scope.s11 = function () {
        if($scope.s11Clicked){
            $scope.s11Clicked = false;
            $scope.def11=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("11"),1);
        }else{
            $scope.s11Clicked = true;
            $scope.def11=$scope.off;
            $scope.seats.push("11");
        }
        console.log($scope.seats);
    }
    $scope.s12 = function () {
        if($scope.s12Clicked){
            $scope.s12Clicked = false;
            $scope.def12=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("12"),1);
        }else{
            $scope.s12Clicked = true;
            $scope.def12=$scope.off;
            $scope.seats.push("12");
        }
        console.log($scope.seats);
    }
    $scope.s13 = function () {
        if($scope.s13Clicked){
            $scope.s13Clicked = false;
            $scope.def13=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("13"),1);
        }else{
            $scope.s13Clicked = true;
            $scope.def13=$scope.off;
            $scope.seats.push("13");
        }
        console.log($scope.seats);
    }
    $scope.s14 = function () {
        if($scope.s14Clicked){
            $scope.s14Clicked = false;
            $scope.def14=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("14"),1);
        }else{
            $scope.s14Clicked = true;
            $scope.def14=$scope.off;
            $scope.seats.push("14");
        }
        console.log($scope.seats);
    }
    $scope.s15 = function () {
        if($scope.s15Clicked){
            $scope.s15Clicked = false;
            $scope.def15=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("15"),1);
        }else{
            $scope.s15Clicked = true;
            $scope.def15=$scope.off;
            $scope.seats.push("15");
        }
        console.log($scope.seats);
    }
    $scope.s16 = function () {
        if($scope.s16Clicked){
            $scope.s16Clicked = false;
            $scope.def16=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("16"),1);
        }else{
            $scope.s16Clicked = true;
            $scope.def16=$scope.off;
            $scope.seats.push("16");
        }
        console.log($scope.seats);
    }
    $scope.s17 = function () {
        if($scope.s17Clicked){
            $scope.s17Clicked = false;
            $scope.def17=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("17"),1);
        }else{
            $scope.s17Clicked = true;
            $scope.def17=$scope.off;
            $scope.seats.push("17");
        }
        console.log($scope.seats);
    }
    $scope.s18 = function () {
        if($scope.s18Clicked){
            $scope.s18Clicked = false;
            $scope.def18=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("18"),1);
        }else{
            $scope.s18Clicked = true;
            $scope.def18=$scope.off;
            $scope.seats.push("18");
        }
        console.log($scope.seats);
    }
    $scope.s19 = function () {
        if($scope.s19Clicked){
            $scope.s19Clicked = false;
            $scope.def19=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("19"),1);
        }else{
            $scope.s19Clicked = true;
            $scope.def19=$scope.off;
            $scope.seats.push("19");
        }
        console.log($scope.seats);
    }
    $scope.s20 = function () {
        if($scope.s20Clicked){
            $scope.s20Clicked = false;
            $scope.def20=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("20"),1);
        }else{
            $scope.s20Clicked = true;
            $scope.def20=$scope.off;
            $scope.seats.push("20");
        }
        console.log($scope.seats);
    }
    $scope.s21 = function () {
        if($scope.s21Clicked){
            $scope.s21Clicked = false;
            $scope.def21=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("21"),1);
        }else{
            $scope.s21Clicked = true;
            $scope.def21=$scope.off;
            $scope.seats.push("21");
        }
        console.log($scope.seats);
    }
    $scope.s22 = function () {
        if($scope.s22Clicked){
            $scope.s22Clicked = false;
            $scope.def22=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("22"),1);
        }else{
            $scope.s22Clicked = true;
            $scope.def22=$scope.off;
            $scope.seats.push("22");
        }
        console.log($scope.seats);
    }
    $scope.s22 = function () {
        if($scope.s22Clicked){
            $scope.s22Clicked = false;
            $scope.def22=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("22"),1);
        }else{
            $scope.s22Clicked = true;
            $scope.def22=$scope.off;
            $scope.seats.push("22");
        }
        console.log($scope.seats);
    }
    $scope.s23 = function () {
        if($scope.s23Clicked){
            $scope.s23Clicked = false;
            $scope.def23=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("23"),1);
        }else{
            $scope.s23Clicked = true;
            $scope.def23=$scope.off;
            $scope.seats.push("23");
        }
        console.log($scope.seats);
    }
    $scope.s24 = function () {
        if($scope.s24Clicked){
            $scope.s24Clicked = false;
            $scope.def24=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("24"),1);
        }else{
            $scope.s24Clicked = true;
            $scope.def24=$scope.off;
            $scope.seats.push("24");
        }
        console.log($scope.seats);
    }
    $scope.s25 = function () {
        if($scope.s25Clicked){
            $scope.s25Clicked = false;
            $scope.def25=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("25"),1);
        }else{
            $scope.s25Clicked = true;
            $scope.def25=$scope.off;
            $scope.seats.push("25");
        }
        console.log($scope.seats);
    }
    $scope.s26 = function () {
        if($scope.s26Clicked){
            $scope.s26Clicked = false;
            $scope.def26=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("26"),1);
        }else{
            $scope.s26Clicked = true;
            $scope.def26=$scope.off;
            $scope.seats.push("26");
        }
        console.log($scope.seats);
    }
    $scope.s27 = function () {
        if($scope.s27Clicked){
            $scope.s27Clicked = false;
            $scope.def27=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("27"),1);
        }else{
            $scope.s27Clicked = true;
            $scope.def27=$scope.off;
            $scope.seats.push("27");
        }
        console.log($scope.seats);
    }
    $scope.s28 = function () {
        if($scope.s28Clicked){
            $scope.s28Clicked = false;
            $scope.def28=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("28"),1);
        }else{
            $scope.s28Clicked = true;
            $scope.def28=$scope.off;
            $scope.seats.push("28");
        }
        console.log($scope.seats);
    }
    $scope.s29 = function () {
        if($scope.s29Clicked){
            $scope.s29Clicked = false;
            $scope.def29=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("29"),1);
        }else{
            $scope.s29Clicked = true;
            $scope.def29=$scope.off;
            $scope.seats.push("29");
        }
        console.log($scope.seats);
    }
    $scope.s30= function () {
        if($scope.s30Clicked){
            $scope.s30Clicked = false;
            $scope.def30=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("30"),1);
        }else{
            $scope.s30Clicked = true;
            $scope.def30=$scope.off;
            $scope.seats.push("30");
        }
        console.log($scope.seats);
    }
    $scope.s31= function () {
        if($scope.s31Clicked){
            $scope.s31Clicked = false;
            $scope.def31=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("31"),1);
        }else{
            $scope.s31Clicked = true;
            $scope.def31=$scope.off;
            $scope.seats.push("31");
        }
        console.log($scope.seats);
    }
    $scope.s32= function () {
        if($scope.s32Clicked){
            $scope.s32Clicked = false;
            $scope.def32=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("32"),1);
        }else{
            $scope.s32Clicked = true;
            $scope.def32=$scope.off;
            $scope.seats.push("32");
        }
        console.log($scope.seats);
    }
    $scope.s33= function () {
        if($scope.s33Clicked){
            $scope.s33Clicked = false;
            $scope.def33=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("33"),1);
        }else{
            $scope.s33Clicked = true;
            $scope.def33=$scope.off;
            $scope.seats.push("33");
        }
        console.log($scope.seats);
    }
    $scope.s34= function () {
        if($scope.s34Clicked){
            $scope.s34Clicked = false;
            $scope.def34=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("34"),1);
        }else{
            $scope.s34Clicked = true;
            $scope.def34=$scope.off;
            $scope.seats.push("34");
        }
        console.log($scope.seats);
    }
    $scope.s35= function () {
        if($scope.s35Clicked){
            $scope.s35Clicked = false;
            $scope.def35=$scope.on;
            $scope.seats.splice($scope.seats.indexOf("35"),1);
        }else{
            $scope.s35Clicked = true;
            $scope.def35=$scope.off;
            $scope.seats.push("35");
        }
        console.log($scope.seats);
    }
}