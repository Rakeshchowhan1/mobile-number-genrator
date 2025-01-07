function myfun() {

  let value = document.getElementById('inp').value
  let count = 0
  let temp = value
  while (temp !== 0) {
    temp = Math.floor(temp / 10)
    count++

  }
  if (count > 10) {
    alert("this is invalid number enter upto 10 digit only")


    document.getElementById('inp').value = value.substring(0, 10)
  }

}

document.getElementById('inp').oninput = myfun;