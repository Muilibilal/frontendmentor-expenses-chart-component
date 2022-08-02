const getData = () => {
fetch('data.json').then(res => res.json()).then(d => loadDOM(d)
  ).catch(err => console.log(err))
}

getData();

const loadDOM = (data) => {
  let sum = 0;
  data.map(info => {
    document.getElementById(info.day).querySelector('span').innerText = `$${info.amount}`;
    
    sum += info.amount;
    document.getElementsByClassName("total-spend")[0].innerText = `$${sum}`;
    
    function getMax(arr, prop) {
      var max;
      for (var i = 0; i < arr.length; i++) {
        if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
          max = arr[i];
      }
      return max;
    }
      
    var maxVal = getMax(data, "amount");

    var height = ((info.amount / maxVal.amount) * 200).toFixed(0);

    setTimeout(() => { document.getElementById(info.day).getElementsByClassName('chart')[0].style.height = `${height}px` } , 500)

    

    document.getElementById(info.day).getElementsByClassName('chart')[0].style.cursor = "pointer";

    // document.querySelectorAll(".chart").forEach((price) => price.addEventListener("click", (e) => {
    //     document.querySelectorAll(".chart").forEach(price => price.previousElementSibling.classList.remove("active"))

    //     e.currentTarget.previousElementSibling.classList.add("active")
      
    // })
    // )
  });  
}