

// 5️ TV Price + Quantity + 18% GST
let tvPrice = prompt("Enter TV price:");
let qty = prompt("Enter quantity:");
if (tvPrice > 0 && qty > 0) {
  let total = tvPrice * qty;
  let gst = (total * 18) / 100;
  let finalBill = total + gst;
  console.log("Final Bill (including 18% GST) = " + finalBill);
}

