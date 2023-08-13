let countel=document.getElementById("count")
let timee=document.getElementById("time")
let sum=0
function countc()
{
    sum+=1
    countel.textContent=sum
}
function stopp(){
    sum=0
    countel.textContent=sum

}
function datee()
{
    timee.textContent=Date()
}