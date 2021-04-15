function add(a) {
	var options = {
		"key": "rzp_test_vII9dmNXP3Cab1",
		"amount": a*100,
		"name": "IEE RIT",
		"description": "description",
		"image": "img/logo.png",
		"handler": function (response) {
			console.log(response);

		},
		"prefill": {
			"name": "Anirudh",
			"email": 'anirudh123321@gmail.com.COM',
			"contact": '+919148397609'
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
