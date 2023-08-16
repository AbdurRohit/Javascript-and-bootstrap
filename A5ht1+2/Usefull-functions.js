function makeCB(label,id){
  let str = `<div class="form-check">
<input class="form-check-input" type="checkbox" value="`+label+`" id="`+id+`">
<label class="form-check-label" for="flexCheckDefault">
`+label+`
</label>`
return str
}
function makeRB(arr) {
let str = `<div class="form-check">`
str+= arr.map(obj=>{
  return `<input class="form-check-input" type="radio" name="flexRadioDefault" id="`+obj+`" value="`+obj+`"> <label class="form-check-label" for="flexRadioDefault1">`+obj+`</label>`
}).join('<br>')
str+=`</div>`
console.log(str)
return str
}
function makeDD(arr, text,id) {
let str = `<select class="form-select" aria-label="Default select example" id = "`+id+`"><option selected disabled>` + text + `</option>`
str += arr.map(obj => {
  return `<option value="`+ obj + `">` + obj + `</option>`
})
str+= `</select>`
return str
}
function makeinput(label, type, value, id, ph) {
return str = `<label class="form-label">` + label + `</label> <input type="` + type + `" value="` + value + `" class="form-control" id="` + id + `" placeholder="` + ph + `" required>`
}