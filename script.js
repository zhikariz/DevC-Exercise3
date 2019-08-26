var xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText)
    var hasil = fetch(myObj.results)
    document.getElementById('planets').innerHTML = hasil
  }
}
xmlhttp.open('GET', 'file.txt', true)
xmlhttp.send()

function fetch(data) {
  var table =
    '<table id="myPlanets"><tr><th>#</th><th>Name</th><th>Diameter</th><th>Climate</th><th>Gravity</th><th>Terrain</th><th>Population</th></tr>'
  for (i = 1; i < data.length; i++) {
    table += '<tr>'
    table += '<td>' + i + '</td>'
    table += '<td>' + data[i].name + '</td>'
    table += '<td>' + data[i].diameter + '</td>'
    table += '<td>' + data[i].climate + '</td>'
    table += '<td>' + data[i].gravity + '</td>'
    table += '<td>' + data[i].terrain + '</td>'
    table += '<td>' + data[i].population + '</td>'
    table += '</tr>'
  }
  table += '</table>'
  return table
}

function filterNama() {
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById('nama')
  filter = input.value.toUpperCase()
  table = document.getElementById('myPlanets')
  tr = table.getElementsByTagName('tr')
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1]
    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}

function filterDiameter() {
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById('diameter')
  filter = input.value.toUpperCase()
  table = document.getElementById('myPlanets')
  tr = table.getElementsByTagName('tr')
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[2]
    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}

function filterClimate() {
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById('climate')
  filter = input.value.toUpperCase()
  table = document.getElementById('myPlanets')
  tr = table.getElementsByTagName('tr')
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[3]
    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}

function filterTerrain() {
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById('terrain')
  filter = input.value.toUpperCase()
  table = document.getElementById('myPlanets')
  tr = table.getElementsByTagName('tr')
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[5]
    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}
