const changingText = document.getElementById('changing-text')
const changeColorBackground = document.querySelector('main')
console.log(changeColorBackground)

//event listener for the button.
document.getElementById('idea-btn').addEventListener('click', async () => {
  try {
    const response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await response.json()

    //here start the DOM manipulation
    changingText.textContent = data.activity
    document.querySelector('.color-change').classList.add('change-color')


  } catch (error) {
    console.error("Failed to fetch ideas!", error)
  }
})