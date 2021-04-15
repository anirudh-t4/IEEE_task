function add(a,data_2,data_3,data_4,data_6) {
	var options = {
		"key": "rzp_test_vII9dmNXP3Cab1",
		"amount": a*100,
		"name": "IEEE RIT",
		"description": data_6,
		"image": "img/logo.png",
		"handler": function (response) {
			console.log(response);

		},
		"prefill": {
			"name": data_2+" "+data_3,
			"email": 'anirudh123321@gmail.com',
			"contact": data_4
		},
		"notes": {
			"address": "address"
		},
		"theme": {
			"color": "#15b8f3"
		}
	};
	console.log(options);
	var propay = new Razorpay(options);
	propay.open();
  }
