let inverviwList = []
let rejectedList = []
let totlet = document.getElementById('totle');
let interview = document.getElementById('interview')
let rejected = document.getElementById('rejected');

const allButton = document.getElementById('all');
const interviewButton = document.getElementById('interviewtd');
const rejectedButton = document.getElementById('rejectedtd')



const allCardSection = document.getElementById('allCard')
inverviwList.push({name:'plant-1'})
function calCulate(){
    totlet.innerText = allCardSection.children.length
    interview.innerText = inverviwList.length;
    rejected.innerText= rejectedList.length;

}
calCulate()
function togoleSbutton(id){
    allButton.classList.remove('bg-blue-600', 'text-white')
    interviewButton.classList.remove('bg-blue-600', 'text-white')
    rejectedButton.classList.remove('bg-blue-600', 'text-white')

    allButton.classList.add('bg-gray-300', 'font-bold')
    interviewButton.classList.add('bg-gray-300', 'font-bold')
    rejectedButton.classList.add('bg-gray-300', 'font-bold')
    
    const selectd = document.getElementById(id)
    selectd.classList.remove('bg-gray-300', 'font-bold')
    selectd.classList.add('bg-blue-600', 'text-white')
}